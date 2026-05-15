# 🚀 Fix 404 Error - Deploy on Netlify + Railway

## The Problem
Netlify doesn't support Node.js servers (it's for static sites only).

## The Solution
- **Website (HTML/CSS/JS)** → Deploy on **Netlify** (free, instant)
- **Backend (Node.js API)** → Deploy on **Railway** (free tier, $5/mo value)

---

## 📋 Step-by-Step Setup

### Step 1: Deploy Website to Netlify ✅

1. Go to https://netlify.com (sign up with GitHub)
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repo: `Ashutosh2005833/web-dev-`
4. Build settings:
   - **Build command:** (leave blank)
   - **Publish directory:** `.` (dot)
5. Click **Deploy Site**
6. Wait 1 minute → You'll get a URL like `https://your-site-name.netlify.app`

✅ **Website is LIVE!**

---

### Step 2: Deploy Backend to Railway 🚂

1. Go to https://railway.app (sign up with GitHub)
2. Click **New Project** → **Deploy from GitHub**
3. Select repo: `Ashutosh2005833/web-dev-`
4. Railway auto-detects Node.js ✅
5. Click **Deploy**
6. Wait 2-3 minutes
7. Go to **Settings** → Copy the **Domain** URL
   - It looks like: `https://web-dev-production.up.railway.app`

✅ **Backend is LIVE!**

---

### Step 3: Update Website with Backend URL 🔗

Edit your local file `agency-website-v3.html`

Find line ~705:
```javascript
const BACKEND_URL = 'https://web-dev-production.up.railway.app';
```

Replace with your Railway URL from Step 2.

Save file.

---

### Step 4: Redeploy Website 🔄

```bash
cd "/Users/ashutoshkamat/Downloads/ashutosh web"
git add agency-website-v3.html
git commit -m "Update backend URL for Railway deployment"
git push origin main
```

**Netlify auto-redeploys** (check Status: https://app.netlify.com)

✅ **Done! Website + Backend Connected!**

---

## ✅ Final Result

| What | Where | URL |
|------|-------|-----|
| Website | Netlify | `https://your-site-name.netlify.app` |
| Backend | Railway | `https://web-dev-production.up.railway.app` |
| Database | Railway | Saved in `form_submissions.db` |

---

## 🧪 Test It

1. Open your Netlify URL: `https://your-site-name.netlify.app`
2. Fill contact form
3. Click "Submit Karein"
4. Should say "✅ Shukriya!" 🎉

---

## 💰 Cost

- **Netlify:** FREE (unlimited sites, bandwidth)
- **Railway:** FREE ($5/month free credit - enough for your site)
- **Total:** **$0** 🎉

---

## 🆘 Troubleshooting

### "Network error" on form submit
- Check if Railway URL in HTML matches your actual Railway domain
- Make sure backend is running on Railway

### Submit button stuck on "⏳ Submitting..."
- Open browser console (F12)
- Check error message
- Verify Railway URL is correct

### "404 Not Found" on website
- Check Netlify deploy status
- Verify `netlify.toml` is in repo
- Redeploy: Go to Site settings → Trigger deploy

### Can't see Railway URL
- Go to https://railway.app
- Select your project
- Settings → Copy the Domain

---

## 📚 Admin Dashboard

View all submissions at:
```
YOUR_RAILWAY_URL/admin
Example: https://web-dev-production.up.railway.app/admin
```

---

## 🔄 Auto Backups (Optional)

Enable automatic daily backups in Railway:
- Dashboard → Settings → Add environment → `BACKUP_ENABLED=true`

---

**All set!** Your website is now deployed and working! 🚀
