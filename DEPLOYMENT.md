# Memozy Website - Deployment Guide

Memozy AI - Your AI Memory & Companion Website

## 🚀 Quick Deployment

### Current Setup: Deploy to /test
```bash
./deploy-test.sh
```

### Deploy to Main Website (Root)
```bash
./deploy-main.sh
```

## 📋 Deployment Configurations

| Environment | Script | URL | basePath | ENV Variable | Deploy Path |
|-------------|--------|-----|----------|--------------|-------------|
| **Test** | `./deploy-test.sh` | `memozy.ai/test` | `'/test'` | `'/test'` | `/var/www/.../test/` |
| **Main** | `./deploy-main.sh` | `memozy.ai` | *(none)* | `''` | `/var/www/.../public_html/` |

## 🔧 Switching Between Environments

### Current (Test) Configuration
✅ Already configured in `next.config.ts`:
```typescript
basePath: '/test',
env: {
  NEXT_PUBLIC_BASE_PATH: '/test',
}
```

### To Deploy to Main Website

**1. Update `next.config.ts`:**
```typescript
const nextConfig = {
  output: 'export',
  // basePath: '/test',  // ← COMMENT OUT
  env: {
    NEXT_PUBLIC_BASE_PATH: '',  // ← Change to empty string
  },
  // ... rest stays the same
};
```

**2. Build and deploy:**
```bash
./deploy-main.sh  # Includes safety checks and backup
```

## 📝 Manual Deployment

Both scripts use the same simple approach: copy everything from `out/` to the deployment directory.

### Test Environment
```bash
npm run build
sudo cp -r out/* /var/www/memozy.ai/public_html/test/
sudo chown -R www-data:www-data /var/www/memozy.ai/public_html/test/
```

### Main Website
```bash
npm run build
sudo cp -r out/* /var/www/memozy.ai/public_html/
sudo chown -R www-data:www-data /var/www/memozy.ai/public_html/_next
sudo chown www-data:www-data /var/www/memozy.ai/public_html/*.{html,png,svg,json,mp4,jpeg,jpg,txt,xml,webmanifest}
```

**Note**: The `cp -r out/*` command is safe for the main website because:
- It overwrites `index.html` (which we want)
- It updates all Next.js assets (`_next/`, static files)
- Existing files with different names remain untouched (e.g., `privacy-policy.html`, `survey.html`, `app-feedback.html`)
- The `/test` subdirectory is not affected

## 📦 Project Structure

This is a Next.js 15 project with static export configured.

- **Framework**: Next.js 15.5.4
- **Export Mode**: Static (SSG)
- **Base Path**: `/test`
- **Deployment Path**: `/var/www/memozy.ai/public_html/test/`

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## ⚙️ Configuration

The project uses a custom configuration for the `/test` subdirectory deployment:

**next.config.ts:**
- `output: 'export'` - Static site generation
- `basePath: '/test'` - Base path for all routes and assets
- `NEXT_PUBLIC_BASE_PATH: '/test'` - Environment variable for dynamic paths (e.g., videos)
- `images.unoptimized: true` - Required for static export

## 📝 Important Notes

1. **Video Assets**: The loop video uses dynamic path resolution:
   ```tsx
   <source src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/loop-video.mp4`} />
   ```

2. **Static Export**: All pages are pre-rendered at build time

3. **Deployment**: Files are served from `/var/www/memozy.ai/public_html/test/`

## 🔗 Links

- **Live Site**: https://memozy.ai/test
- **Repository**: https://github.com/kakoee/memozy-website

## 📄 License

Private - All rights reserved
