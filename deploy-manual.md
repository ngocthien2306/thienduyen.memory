# Manual Deployment Guide

## GitHub Actions Permission Issue

If you're getting the "access_denied_to_user" error, follow these steps:

### Option 1: Fix Repository Settings (Recommended)

1. **Go to your GitHub repository**: https://github.com/ngocthien2306/thienduyen.memory

2. **Settings** > **Actions** > **General**
   - Scroll down to **"Workflow permissions"**
   - Select **"Read and write permissions"**
   - Check ✅ **"Allow GitHub Actions to create and approve pull requests"**
   - Click **"Save"**

3. **Re-run the failed workflow**:
   - Go to **Actions** tab
   - Click on the failed workflow run
   - Click **"Re-run all jobs"**

### Option 2: Manual Deployment

If GitHub Actions still doesn't work, deploy manually:

```bash
# 1. Build the project
npm run build

# 2. Deploy to gh-pages branch
npm run deploy
```

### Option 3: Alternative GitHub Pages Setup

1. **Settings** > **Pages**
2. **Source**: Select **"GitHub Actions"** instead of **"Deploy from a branch"**
3. This will use the built-in GitHub Pages action

### Troubleshooting

- **Check if you're the repository owner**: Only owners can change these settings
- **Verify branch protection rules**: Make sure `gh-pages` branch isn't protected
- **Check organization settings**: If this is under an organization, check org-level permissions

### Manual Deploy Commands

```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Build and deploy
npm run build
npm run deploy
```

The `npm run deploy` command will:
1. Build the project
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub Pages
4. Your site will be available at: https://ngocthien2306.github.io/thienduyen.memory