# LouRock Deployment Guide

## Project Structure

This monorepo contains 4 Next.js applications:
- **landing/** - Main website (lourock.com)
- **dakota-dreamers/** - Dakota Dreamers band site (dakota-dreamers.lourock.com)
- **tribute-band-the-kills/** - Tribute Band The Kills site (the-kills.lourock.com)  
- **mathieu-schmidt/** - Mathieu Schmidt artist site (mathieu-schmidt.lourock.com)

## Automated Deployment (Recommended)

### Using the Deployment Script

A `deploy.sh` script is provided with intelligent selective deployment:

```bash
# Deploy only changed projects (detects changes automatically)
./deploy.sh

# Deploy all projects
./deploy.sh --all

# Deploy specific projects
./deploy.sh dakota-dreamers landing
```

**Smart Change Detection:**
- Automatically detects which projects have changed files
- Only deploys projects that actually need updating
- Deploys all projects if deployment configuration changes
- Skips deployment if no changes are detected

The script will:
- Analyze git changes to determine which projects need deployment
- Install dependencies only for projects being deployed
- Deploy each changed project to Vercel production
- Show production URLs for deployed projects
- Provide a post-deployment checklist

### GitHub Actions (CI/CD)

Automatic selective deployments are configured via GitHub Actions:

- **On Push to `main`**: Analyzes changes and deploys only affected projects
- **Manual Trigger**: Allows manual deployment via GitHub Actions UI
- **Smart Detection**: Only runs deployments when files actually change
- **Efficient**: Skips deployment entirely if no relevant changes are detected

#### Setup Requirements

1. Add `NOW_TOKEN` as a repository secret:
   - Go to your repository settings → Secrets and variables → Actions
   - Add new secret: `NOW_TOKEN` with your Vercel token value
   - Get your token from: https://vercel.com/account/tokens

2. The workflow will automatically:
   - Detect which projects have changes
   - Install dependencies only for changed projects
   - Handle Git LFS files
   - Deploy only the projects that need updating
   - Skip deployment if no changes are detected

## Manual Vercel Deployment Instructions

### Option 1: Deploy as Separate Projects (Recommended)

1. **Deploy Main Landing Page**
   ```bash
   cd landing
   vercel --prod
   ```
   - Set production domain to: `lourock.com`
   - Add alias: `www.lourock.com`

2. **Deploy Dakota Dreamers**
   ```bash
   cd dakota-dreamers
   vercel --prod
   ```
   - Set production domain to: `dakota-dreamers.lourock.com`

3. **Deploy Tribute Band The Kills**
   ```bash
   cd tribute-band-the-kills
   vercel --prod
   ```
   - Set production domain to: `the-kills.lourock.com`
   - **Important**: Add the video file `whirling-eyes.mp4` to the `public/` folder before deployment

4. **Deploy Mathieu Schmidt**
   ```bash
   cd mathieu-schmidt
   vercel --prod
   ```
   - Set production domain to: `mathieu-schmidt.lourock.com`

### Option 2: Deploy as Monorepo with Vercel Projects

1. Push the entire repository to GitHub
2. In Vercel Dashboard, import the repository 4 times as separate projects:
   - Project 1: Set root directory to `landing/`
   - Project 2: Set root directory to `dakota-dreamers/`
   - Project 3: Set root directory to `tribute-band-the-kills/`
   - Project 4: Set root directory to `mathieu-schmidt/`
3. Configure domains for each project as listed above

## Domain Configuration

### DNS Settings Required

For the main domain (lourock.com):
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

For subdomains:
```
Type: CNAME
Name: dakota-dreamers
Value: cname.vercel-dns.com

Type: CNAME
Name: the-kills
Value: cname.vercel-dns.com

Type: CNAME
Name: mathieu-schmidt
Value: cname.vercel-dns.com
```

## Environment Variables

### Required for Automated Deployment

- `NOW_TOKEN` - Vercel authentication token (required for GitHub Actions and CI)
  - Get your token from: https://vercel.com/account/tokens
  - Set as environment variable locally or repository secret for GitHub Actions

### Local Usage

```bash
# Set the token in your environment
export NOW_TOKEN=your_vercel_token_here

# Then run the deployment script
./deploy.sh
```

No other environment variables are required for the basic deployment.

## Build Commands

All sites use the standard Next.js build process:
```bash
npm install
npm run build
```

## Post-Deployment Checklist

- [ ] Verify all sites are accessible at their domains
- [ ] Test mobile responsiveness on all sites
- [ ] Check that navigation between sites works
- [ ] Test contact forms on the landing page
- [ ] Add the video file to tribute-band-the-kills/public/
- [ ] Verify design system pages at /design-system for each site
- [ ] Test SEO metadata with social media debuggers
- [ ] Set up analytics if needed

## Local Development

To run any site locally:
```bash
cd [site-folder]
npm install
npm run dev
```

Sites will run on:
- landing: http://localhost:3000
- dakota-dreamers: http://localhost:3001
- tribute-band-the-kills: http://localhost:3002
- mathieu-schmidt: http://localhost:3003

(Use different ports by running `npm run dev -- -p [port]`)

## Troubleshooting

1. **Build Errors**: Ensure all dependencies are installed with `npm install`
2. **Domain Not Working**: Check DNS propagation (can take up to 48 hours)
3. **404 Errors**: Verify the Vercel project root directory is set correctly
4. **Video Not Playing**: Ensure whirling-eyes.mp4 is in tribute-band-the-kills/public/