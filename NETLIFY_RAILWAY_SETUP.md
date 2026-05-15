# Netlify + Railway Deployment Guide

## Step 1: Deploy Website to Netlify (HTML only)

1. **Push to GitHub** (already done ✅)
2. Go to https://netlify.com
3. Click "Add new site" → "Import an existing project"
4. Select GitHub repo: `web-dev-`
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (current folder)
6. Click Deploy

Website goes live! 🎉

## Step 2: Deploy Backend to Railway (Node.js server)

1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub"
3. Select your `web-dev-` repo
4. Railway auto-detects Node.js
5. Click Deploy
6. Wait 2-3 minutes
7. Get your Railway URL: https://your-railway-app.up.railway.app

## Step 3: Update HTML to Use Railway Backend

Change this line in `agency-website-v3.html`:

Old:
```javascript
const response=await fetch('/api/submit-form',{
```

New:
```javascript
const response=await fetch('https://your-railway-app.up.railway.app/api/submit-form',{
```

Replace `your-railway-app.up.railway.app` with your actual Railway URL.

## Step 4: Redeploy to Netlify

Push the updated HTML:
```bash
git add agency-website-v3.html
git commit -m "Update backend URL for Railway"
git push
```

Netlify auto-redeploys! ✅

---

## Result

✅ Website: `https://your-netlify-site.netlify.app`
✅ Backend: `https://your-railway-app.up.railway.app`
✅ Database: `form_submissions.db` on Railway

---

## Free Tier Details

**Netlify Free:**
- Unlimited sites
- Unlimited bandwidth
- Custom domain

**Railway Free:**
- $5/month free credit
- Enough for your site
- Auto-scales

Total cost: **FREE** 🎉
