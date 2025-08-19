#!/bin/bash

# LouRock Deployment Script
# Deploys specified projects to Vercel production
# Usage: ./deploy.sh [project1 project2 ...] or ./deploy.sh --all
# Requires explicit project names or --all flag

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

# Show usage if no arguments provided
if [ $# -eq 0 ]; then
    echo -e "${RED}Error: No arguments provided${NC}"
    echo ""
    echo -e "${YELLOW}Usage:${NC}"
    echo "  ./deploy.sh --all                    # Deploy all projects"
    echo "  ./deploy.sh [project1] [project2]   # Deploy specific projects"
    echo ""
    echo -e "${YELLOW}Available projects:${NC}"
    for i in "${!PROJECTS[@]}"; do
        echo "  ${PROJECTS[$i]} -> ${DOMAINS[$i]}"
    done
    echo ""
    exit 1
fi

# Determine which projects to deploy
if [ "$1" = "--all" ]; then
    DEPLOY_PROJECTS=("${PROJECTS[@]}")
    echo -e "${YELLOW}📋 Deploying all projects...${NC}"
else
    DEPLOY_PROJECTS=("$@")
    echo -e "${YELLOW}📋 Deploying specified projects: ${DEPLOY_PROJECTS[*]}${NC}"
    
    # Validate project names
    for project in "${DEPLOY_PROJECTS[@]}"; do
        if [[ ! " ${PROJECTS[*]} " =~ " ${project} " ]]; then
            echo -e "${RED}Error: Unknown project '${project}'${NC}"
            echo -e "${YELLOW}Available projects: ${PROJECTS[*]}${NC}"
            exit 1
        fi
    done
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
    
    DEPLOYMENT_URL=$(vercel --prod --yes --token "$NOW_TOKEN" --scope mathieus-projects-19f8bd9f)
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