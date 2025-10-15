#!/bin/bash

# Memozy Website Deployment Script
# Deploys to memozy.ai (main website - root path)

set -e  # Exit on error

echo "🚀 Starting deployment to memozy.ai (MAIN WEBSITE)..."
echo ""
echo "⚠️  WARNING: This will deploy to the PRODUCTION root path!"
echo "   Make sure next.config.ts has:"
echo "   - basePath commented out or removed"
echo "   - NEXT_PUBLIC_BASE_PATH: ''"
echo ""
read -p "Continue? (y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment cancelled."
    exit 1
fi

# Navigate to project directory
cd ~/Github/memozy-website

# Check if we're on the correct branch
BRANCH=$(git branch --show-current)
echo "📍 Current branch: $BRANCH"

# Show current commit
COMMIT=$(git log -1 --oneline)
echo "📝 Current commit: $COMMIT"
echo ""

# Verify configuration
echo "🔍 Checking next.config.ts configuration..."
# Check for uncommented basePath (ignore commented lines)
if grep -v "^[[:space:]]*\/\/" next.config.ts | grep -q "basePath: '/test'"; then
    echo "❌ ERROR: basePath is still set to '/test'!"
    echo "   Please update next.config.ts for main website deployment:"
    echo "   1. Remove or comment out: basePath: '/test'"
    echo "   2. Set: NEXT_PUBLIC_BASE_PATH: ''"
    exit 1
fi
echo "✅ Configuration looks good"
echo ""

# Build the project
echo "🔨 Building Next.js project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Backup existing files (optional but recommended)
BACKUP_DIR="/var/www/memozy.ai/public_html/backup_$(date +%Y%m%d_%H%M%S)"
echo "📦 Creating backup at $BACKUP_DIR..."
mkdir -p "$BACKUP_DIR"
# Copy only the main HTML files, not subdirectories like /test
cp /var/www/memozy.ai/public_html/*.html "$BACKUP_DIR/" 2>/dev/null || true
cp /var/www/memozy.ai/public_html/*.css "$BACKUP_DIR/" 2>/dev/null || true
echo "✅ Backup created"
echo ""

# Deploy to production
echo "📦 Deploying to /var/www/memozy.ai/public_html/..."
echo "   Note: This will update index.html and Next.js assets"
echo "   Existing files like privacy-policy.html, survey.html, etc. will remain untouched"

# Copy all files from out/ to public_html/
# This will overwrite index.html and _next directory, but leave other existing files intact
sudo cp -r out/* /var/www/memozy.ai/public_html/

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed!"
    exit 1
fi

# Set proper ownership
echo "🔒 Setting proper file ownership..."
sudo chown -R www-data:www-data /var/www/memozy.ai/public_html/_next
sudo chown www-data:www-data /var/www/memozy.ai/public_html/*.{html,png,svg,json,mp4,jpeg,jpg,txt,xml,webmanifest} 2>/dev/null || true

echo "✅ Deployment successful!"
echo ""

# Verify deployment
echo "🔍 Verifying deployment..."
if [ -f /var/www/memozy.ai/public_html/index.html ]; then
    echo "✅ index.html deployed"
    
    # Check if video path is correct (should be /loop-video.mp4 for main site)
    if grep -q 'src="/loop-video.mp4"' /var/www/memozy.ai/public_html/index.html; then
        echo "✅ Video path is correct: /loop-video.mp4"
    elif grep -q 'src="/test/loop-video.mp4"' /var/www/memozy.ai/public_html/index.html; then
        echo "⚠️  WARNING: Video path is still /test/loop-video.mp4"
        echo "   Did you update next.config.ts?"
    fi
else
    echo "⚠️  Warning: index.html not found"
fi

echo ""
echo "🎉 Deployment complete!"
echo "🌐 Visit: https://memozy.ai"
echo ""
echo "Deployed commit: $COMMIT"
echo "Deployment time: $(date)"
echo "Backup location: $BACKUP_DIR"
