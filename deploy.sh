#!/bin/bash

# LouRock Deployment Script
# Deploys changed projects to Vercel production
# Usage: ./deploy.sh [project1 project2 ...] or ./deploy.sh --all
# If no arguments, detects changes automatically

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECTS=("landing" "dakota-dreamers" "tribute-band-the-kills" "mathieu-schmidt")
DOMAINS=(
    "lourock.com"
    "dakota-dreamers.lourock.com" 
    "the-kills.lourock.com"
    "mathieu-schmidt.lourock.com"
)

# Always deploy to production
ENV="production"
PROD_FLAG="--prod"

# Function to get changed projects
get_changed_projects() {
    local changed_projects=()
    
    if git rev-parse --verify HEAD~1 >/dev/null 2>&1; then
        # Get changed files since last commit
        changed_files=$(git diff --name-only HEAD~1 HEAD)
    elif git rev-parse --verify origin/main >/dev/null 2>&1; then
        # Compare with origin/main if no previous commit
        changed_files=$(git diff --name-only origin/main HEAD)
    else
        # If no git history, deploy all projects
        echo "${PROJECTS[@]}"
        return
    fi
    
    for project in "${PROJECTS[@]}"; do
        if echo "$changed_files" | grep -q "^$project/"; then
            changed_projects+=("$project")
        fi
    done
    
    # Always deploy if deploy.sh, GitHub workflows, or deployment docs changed
    if echo "$changed_files" | grep -qE "(deploy\.sh|\.github/workflows/|DEPLOYMENT\.md)"; then
        echo "${PROJECTS[@]}"
        return
    fi
    
    echo "${changed_projects[@]}"
}

# Determine which projects to deploy
if [ "$1" = "--all" ]; then
    DEPLOY_PROJECTS=("${PROJECTS[@]}")
    echo -e "${YELLOW}📋 Deploying all projects...${NC}"
elif [ $# -gt 0 ]; then
    DEPLOY_PROJECTS=("$@")
    echo -e "${YELLOW}📋 Deploying specified projects: ${DEPLOY_PROJECTS[*]}${NC}"
else
    CHANGED_PROJECTS=($(get_changed_projects))
    if [ ${#CHANGED_PROJECTS[@]} -eq 0 ]; then
        echo -e "${GREEN}✨ No changes detected. Nothing to deploy.${NC}"
        exit 0
    fi
    DEPLOY_PROJECTS=("${CHANGED_PROJECTS[@]}")
    echo -e "${YELLOW}📋 Detected changes in: ${DEPLOY_PROJECTS[*]}${NC}"
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${RED}Error: Vercel CLI is not installed${NC}"
    echo "Install it with: npm i -g vercel"
    exit 1
fi

# Check for NOW_TOKEN environment variable in CI
if [ ! -z "$CI" ] && [ -z "$NOW_TOKEN" ]; then
    echo -e "${RED}Error: NOW_TOKEN environment variable is required in CI${NC}"
    exit 1
fi

echo -e "${BLUE}🚀 Starting LouRock deployment to production...${NC}"
echo ""

# Deploy each project
for project in "${DEPLOY_PROJECTS[@]}"; do
    # Find project index for domain mapping
    project_index=-1
    for i in "${!PROJECTS[@]}"; do
        if [ "${PROJECTS[$i]}" = "$project" ]; then
            project_index=$i
            break
        fi
    done
    
    if [ $project_index -eq -1 ]; then
        echo -e "${RED}Error: Unknown project ${project}${NC}"
        continue
    fi
    
    DOMAIN=${DOMAINS[$project_index]}
    
    echo -e "${YELLOW}📦 Deploying ${project}...${NC}"
    
    # Check if project directory exists
    if [ ! -d "$project" ]; then
        echo -e "${RED}Error: Project directory ${project} not found${NC}"
        continue
    fi
    
    cd "$project"
    
    # Ensure dependencies are installed
    if [ ! -d "node_modules" ]; then
        echo -e "${BLUE}📥 Installing dependencies for ${project}...${NC}"
        npm install
    fi
    
    # Deploy to Vercel production
    echo -e "${BLUE}🔄 Deploying ${project} to Vercel...${NC}"
    
    DEPLOYMENT_URL=$(vercel --prod --yes)
    echo -e "${GREEN}✅ ${project} deployed to production${NC}"
    echo -e "${BLUE}🌐 Production URL: https://${DOMAIN}${NC}"
    
    echo ""
    cd ..
done

echo -e "${GREEN}🎉 All deployments completed!${NC}"

echo ""
echo -e "${YELLOW}🌐 Deployed Projects:${NC}"
for project in "${DEPLOY_PROJECTS[@]}"; do
    # Find project index for domain mapping
    for i in "${!PROJECTS[@]}"; do
        if [ "${PROJECTS[$i]}" = "$project" ]; then
            echo -e "  ${project}: ${BLUE}https://${DOMAINS[$i]}${NC}"
            break
        fi
    done
done

echo ""
echo -e "${YELLOW}📋 Post-deployment checklist:${NC}"
echo "  □ Verify all sites are accessible"
echo "  □ Test mobile responsiveness"
echo "  □ Check navigation between sites"
echo "  □ Test contact forms"
echo "  □ Verify design system pages"