# Portfolio Website Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

- Git installed on your machine
- A GitHub account
- Your portfolio files (index.html, styles.css, script.js)

## Quick Start

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Create a new repository on GitHub**
   - Go to [github.com/new](https://github.com/new)
   - Name it: `alameenkh7.github.io` (or `username.github.io` with your GitHub username)
   - Make it public
   - Don't initialize with README

2. **Push your portfolio to GitHub**

   ```bash
   # Navigate to your portfolio directory
   cd /home/alameen/dev/alameenkh7

   # Initialize git (if not already done)
   git init

   # Add all files
   git add index.html styles.css script.js

   # Commit
   git commit -m "Initial portfolio deployment"

   # Add remote (replace 'alameenkh7' with your GitHub username)
   git remote add origin https://github.com/alameenkh7/alameenkh7.github.io.git

   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://alameenkh7.github.io`

### Option 2: Deploy to a Project Repository

If you want to keep it as a project under your existing account:

1. **Create a new repository**
   - Name it: `portfolio` (or any name you prefer)

2. **Push your code**

   ```bash
   cd /home/alameen/dev/alameenkh7
   git init
   git add index.html styles.css script.js
   git commit -m "Initial portfolio deployment"
   git remote add origin https://github.com/alameenkh7/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "main" branch and "/" (root) folder
   - Your site will be at: `https://alameenkh7.github.io/portfolio`

## Customization Before Deployment

Before deploying, update these items in `index.html`:

### 1. Update GitHub Links
Replace placeholder links with your actual repositories:
- Line with `nest-clean-arch` href
- Line with `queue-master` href
- Line with `healthcare-appointment-system` href
- Line with `devops-blueprints` href

### 2. Update Contact Information
- LinkedIn URL (search for `linkedin.com/in/alameenkh`)
- Email address (search for `alameen@example.com`)
- GitHub profile URL (search for `github.com/alameenkh7`)

### 3. Update GitHub Stats (Optional)
In `index.html`, find the GitHub stats images and replace `alameenkh7` with your username:
```html
<img src="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&...
```

## Post-Deployment Checklist

After deployment, verify:

- [ ] All links work correctly
- [ ] Mobile navigation toggles properly
- [ ] Smooth scrolling works on all sections
- [ ] Project cards link to actual repositories
- [ ] Contact links (GitHub, LinkedIn, Email) are correct
- [ ] Site is responsive on mobile devices
- [ ] GitHub stats display correctly

## Adding a Custom Domain (Optional)

1. **Purchase a domain** (e.g., from Namecheap, Google Domains)

2. **Configure DNS**
   - Add an A record pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add a CNAME record pointing to `alameenkh7.github.io`

3. **Add custom domain in GitHub**
   - Go to repository Settings → Pages
   - Enter your custom domain in "Custom domain"
   - Enable "Enforce HTTPS"

4. **Create CNAME file**
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

## Updating Your Portfolio

To make changes:

```bash
# Edit your files
# Then commit and push

git add .
git commit -m "Update portfolio content"
git push
```

Changes will be live within 1-2 minutes.

## Troubleshooting

### Site not loading
- Check that GitHub Pages is enabled in settings
- Verify the repository is public
- Wait 2-3 minutes after first deployment

### 404 Error
- Ensure `index.html` is in the root directory
- Check that the branch selected in Pages settings is correct

### Styles not loading
- Verify `styles.css` and `script.js` are in the same directory as `index.html`
- Check browser console for errors (F12)

### Links not working
- Ensure all repository links point to existing repos
- Update placeholder URLs with actual links

## File Structure

```
alameenkh7/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # JavaScript interactions
├── DEPLOYMENT.md       # This file
└── CNAME              # (Optional) Custom domain
```

## Additional Features to Add

Consider adding these enhancements:

1. **Favicon**: Add a custom favicon
2. **Open Graph Tags**: Better social media sharing
3. **Analytics**: Google Analytics or Plausible
4. **Blog Section**: Add a /blog directory with posts
5. **Resume PDF**: Link to downloadable resume

## Performance Optimization

Your site is already optimized with:
- ✅ Minimal dependencies (no frameworks)
- ✅ Optimized CSS and JavaScript
- ✅ Lazy loading for animations
- ✅ Responsive design
- ✅ Fast load times (<1s)

## Support

If you encounter issues:
- Check GitHub Pages [documentation](https://docs.github.com/en/pages)
- Verify all files are committed and pushed
- Check browser console for errors

---

**Your portfolio is ready to impress!** 🚀

Live at: `https://alameenkh7.github.io` (or your custom domain)
