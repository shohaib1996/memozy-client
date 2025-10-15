#!/bin/bash

# Memozy Website Deployment Script
# Deploys to memozy.ai/test

set -e  # Exit on error

echo "🚀 Starting deployment to memozy.ai/test..."
echo ""

# Navigate to project directory
cd ~/Github/memozy-website

# Check if we're on the correct branch
BRANCH=$(git branch --show-current)
echo "📍 Current branch: $BRANCH"

# Show current commit
COMMIT=$(git log -1 --oneline)
echo "📝 Current commit: $COMMIT"
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

# Deploy to production
echo "📦 Deploying to /var/www/memozy.ai/public_html/test/..."
sudo cp -r out/* /var/www/memozy.ai/public_html/test/

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed!"
    exit 1
fi

# Set proper ownership
echo "🔒 Setting proper file ownership..."
sudo chown -R www-data:www-data /var/www/memozy.ai/public_html/test/

echo "✅ Deployment successful!"
echo ""

# Verify deployment
echo "🔍 Verifying deployment..."
if grep -q 'src="/test/loop-video.mp4"' /var/www/memozy.ai/public_html/test/index.html; then
    echo "✅ Video path is correct: /test/loop-video.mp4"
else
    echo "⚠️  Warning: Video path might not be correct"
fi

echo ""
echo "🎉 Deployment complete!"
echo "🌐 Visit: https://memozy.ai/test"
echo ""
echo "Deployed commit: $COMMIT"
echo "Deployment time: $(date)"
