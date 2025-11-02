# Google Search Console Monitoring

Python script to fetch issues and analytics from Google Search Console.

## Setup

### 1. Get Google Cloud Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Search Console API**:
   - Navigate to "APIs & Services" → "Library"
   - Search for "Google Search Console API"
   - Click "Enable"
4. Create OAuth 2.0 credentials:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - Configure OAuth consent screen if prompted:
     - Choose "External" for user type
     - Fill in required fields (app name, support email, developer email)
     - Add yourself as a test user in "Test users" section
   - Choose "Desktop app" as application type
   - Download the credentials JSON file
5. Save the downloaded file as `credentials.json` in this directory (`gsc-monitoring/`)

**⚠️ IMPORTANT**: Never commit `credentials.json` to git. It's already in `.gitignore`.

### 2. Install Dependencies

Using `uv`:
```bash
cd gsc-monitoring
uv sync
```

Or with pip:
```bash
pip install google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client
```

### 3. Run the Script

```bash
./gsc_fetch_issues.py
```

On first run, it will:
1. Open your browser for OAuth authentication
2. Ask you to authorize the app
3. Save a token for future runs (no browser needed after first auth)

## What It Fetches

For each verified site in your Search Console:
- ✅ Sitemap status and errors
- ✅ Search analytics (clicks, impressions, top pages)
- ❌ URL inspection (not available for `sc-domain:` properties)

Results are saved to `results/gsc_issues_TIMESTAMP.json`

## Files

- `gsc_fetch_issues.py` - Main script
- `credentials.json` - OAuth credentials (gitignored, you must create)
- `token.pickle` - Auth token (gitignored, auto-generated)
- `results/` - JSON output files (gitignored)

## Security

**Never commit these files:**
- `credentials.json` - Contains OAuth client secrets
- `token.pickle` - Contains your access tokens
- `results/*.json` - May contain private analytics data

All sensitive files are in `.gitignore`.
