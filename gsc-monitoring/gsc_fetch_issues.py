#!/usr/bin/env -S uv run
import json
import os
from datetime import datetime, timedelta
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import pickle

SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly']
CREDENTIALS_FILE = 'credentials.json'
TOKEN_FILE = 'token.pickle'
RESULTS_DIR = 'results'

SITES = [
    'sc-domain:mathieu.schmidt.lourock.com',
    'sc-domain:lourock.com',
    'sc-domain:dakota-dreamers.lourock.com',
    'sc-domain:the-kills.lourock.com',
]

def get_credentials():
    creds = None
    
    if os.path.exists(TOKEN_FILE):
        with open(TOKEN_FILE, 'rb') as token:
            creds = pickle.load(token)
    
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists(CREDENTIALS_FILE):
                print(f"ERROR: {CREDENTIALS_FILE} not found!")
                print("\nTo set up credentials:")
                print("1. Go to https://console.cloud.google.com/")
                print("2. Create a new project or select existing")
                print("3. Enable 'Google Search Console API'")
                print("4. Go to 'Credentials' → 'Create Credentials' → 'OAuth client ID'")
                print("5. Choose 'Desktop app' as application type")
                print("6. Download the JSON file and save as 'credentials.json' in this directory")
                return None
            
            flow = InstalledAppFlow.from_client_secrets_file(CREDENTIALS_FILE, SCOPES)
            creds = flow.run_local_server(port=0)
        
        with open(TOKEN_FILE, 'wb') as token:
            pickle.dump(creds, token)
    
    return creds

def get_coverage_issues(service, site_url):
    try:
        response = service.urlInspection().index().inspect(
            body={
                'inspectionUrl': site_url,
                'siteUrl': site_url
            }
        ).execute()
        
        return response
    except HttpError as e:
        return {'error': str(e)}

def get_sitemaps(service, site_url):
    try:
        response = service.sitemaps().list(siteUrl=site_url).execute()
        return response.get('sitemap', [])
    except HttpError as e:
        return {'error': str(e)}

def get_search_analytics(service, site_url, days=7):
    try:
        end_date = datetime.now().date()
        start_date = end_date - timedelta(days=days)
        
        request = {
            'startDate': start_date.strftime('%Y-%m-%d'),
            'endDate': end_date.strftime('%Y-%m-%d'),
            'dimensions': ['page'],
            'rowLimit': 100
        }
        
        response = service.searchanalytics().query(
            siteUrl=site_url,
            body=request
        ).execute()
        
        return response.get('rows', [])
    except HttpError as e:
        return {'error': str(e)}

def main():
    print("Google Search Console - Issues Fetcher")
    print("=" * 50)
    
    os.makedirs(RESULTS_DIR, exist_ok=True)
    
    creds = get_credentials()
    if not creds:
        return
    
    service = build('searchconsole', 'v1', credentials=creds)
    
    try:
        sites_response = service.sites().list().execute()
        verified_sites = [site['siteUrl'] for site in sites_response.get('siteEntry', [])]
        
        print(f"\nVerified sites in your Search Console:")
        for site in verified_sites:
            print(f"  - {site}")
        print()
        
    except HttpError as e:
        print(f"Error fetching sites: {e}")
        verified_sites = []
    
    all_issues = {}
    
    for site_url in SITES:
        print(f"\n{'='*50}")
        print(f"Fetching issues for: {site_url}")
        print(f"{'='*50}")
        
        if verified_sites and site_url not in verified_sites:
            print(f"⚠️  WARNING: {site_url} not verified in Search Console")
            print("   Skipping...")
            continue
        
        site_issues = {
            'site_url': site_url,
            'timestamp': datetime.now().isoformat(),
            'sitemaps': [],
            'url_inspection': {},
            'top_pages': []
        }
        
        print("\n1. Fetching sitemaps...")
        sitemaps = get_sitemaps(service, site_url)
        if isinstance(sitemaps, dict) and 'error' in sitemaps:
            print(f"   ❌ Error: {sitemaps['error']}")
        else:
            site_issues['sitemaps'] = sitemaps
            print(f"   ✓ Found {len(sitemaps)} sitemap(s)")
            for sitemap in sitemaps:
                if isinstance(sitemap, dict):
                    print(f"     - {sitemap.get('path', 'N/A')}")
                    if 'errors' in sitemap:
                        print(f"       ⚠️  Errors: {sitemap['errors']}")
                    if 'warnings' in sitemap:
                        print(f"       ⚠️  Warnings: {sitemap['warnings']}")
        
        print("\n2. URL Inspection (homepage)...")
        inspection = get_coverage_issues(service, site_url)
        if isinstance(inspection, dict) and 'error' in inspection:
            print(f"   ❌ Error: {inspection['error']}")
        else:
            site_issues['url_inspection'] = inspection
            if isinstance(inspection, dict) and 'inspectionResult' in inspection:
                result = inspection['inspectionResult']
                index_status = result.get('indexStatusResult', {})
                coverage_state = index_status.get('coverageState', 'UNKNOWN')
                print(f"   Coverage State: {coverage_state}")
                
                if 'verdict' in index_status:
                    print(f"   Verdict: {index_status['verdict']}")
                
                if coverage_state != 'Submitted and indexed':
                    print(f"   ⚠️  Issue detected: {coverage_state}")
        
        print("\n3. Search Analytics (last 7 days)...")
        analytics = get_search_analytics(service, site_url, days=7)
        if isinstance(analytics, dict) and 'error' in analytics:
            print(f"   ❌ Error: {analytics['error']}")
        else:
            site_issues['top_pages'] = analytics
            print(f"   ✓ Found {len(analytics)} pages with traffic")
            if isinstance(analytics, list) and len(analytics) > 0:
                print("   Top 5 pages:")
                for i, row in enumerate(analytics[:5], 1):
                    if isinstance(row, dict):
                        page = row.get('keys', [''])[0]
                        clicks = row.get('clicks', 0)
                        impressions = row.get('impressions', 0)
                        print(f"     {i}. {page}")
                        print(f"        Clicks: {clicks}, Impressions: {impressions}")
        
        all_issues[site_url] = site_issues
    
    output_file = f'{RESULTS_DIR}/gsc_issues_{datetime.now().strftime("%Y%m%d_%H%M%S")}.json'
    with open(output_file, 'w') as f:
        json.dump(all_issues, f, indent=2)
    
    print(f"\n{'='*50}")
    print(f"✓ Results saved to: {output_file}")
    print(f"{'='*50}")

if __name__ == '__main__':
    main()
