# 🚀 Deployment Guide

## Local Development
Run locally before deploying to production.

```bash
npm install
npm start
```

Visit: http://localhost:3000

---

## Production Deployment Options

### Option 1: DigitalOcean / Linode (Recommended)
Best for small to medium projects

**Steps:**
1. Create a Droplet (Ubuntu 20.04, 1GB RAM is enough)
2. SSH into server: `ssh root@your-server-ip`
3. Install Node.js:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```
4. Clone your project:
   ```bash
   git clone your-repo.git
   cd ashutosh\ web
   npm install
   ```
5. Install PM2 (keeps app running):
   ```bash
   sudo npm install -g pm2
   pm2 start server.js --name "novacraft"
   pm2 startup
   pm2 save
   ```
6. Setup Nginx reverse proxy (optional but recommended)
7. Get SSL certificate (Let's Encrypt - free)

**Cost:** $5-10/month

### Option 2: Railway.app (Easiest)
Simplest deployment, includes free tier

**Steps:**
1. Push code to GitHub
2. Go to railway.app, sign up with GitHub
3. Create new project, select your repo
4. Railway auto-detects Node.js
5. Set domain and deploy
6. Database auto-backed up

**Cost:** Free tier available, then $5+/month

### Option 3: Render.com
Similar to Railway, very beginner-friendly

**Steps:**
1. Push to GitHub
2. Connect Render.com to GitHub
3. Create Web Service
4. Auto-deploys on git push
5. Free tier available

### Option 4: AWS (Advanced)
For high-traffic sites

**Services needed:**
- EC2 instance
- RDS (database) or keep SQLite
- CloudFront (CDN)

**Cost:** $5-50+/month depending on traffic

---

## Database Backup Strategy

### Local Backup
Keep `form_submissions.db` backed up:
```bash
cp form_submissions.db form_submissions.db.backup
```

### Cloud Backup (Recommended)
- Use cron job to backup daily
- Store on S3 / Google Drive / Dropbox

### Example Backup Script
Create `backup.sh`:
```bash
#!/bin/bash
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
cp form_submissions.db backups/form_submissions_$TIMESTAMP.db
echo "Backup completed: $TIMESTAMP"
```

Run daily:
```bash
crontab -e
# Add: 0 2 * * * /home/user/backup.sh
```

---

## Environment Setup for Production

Create `.env` file (add to .gitignore):
```
NODE_ENV=production
PORT=3000
DB_PATH=/var/data/form_submissions.db
ADMIN_PASSWORD=your_secure_password
```

Update `server.js` to use `.env` values:
```javascript
require('dotenv').config();
const PORT = process.env.PORT || 3000;
```

---

## SSL Certificate (HTTPS)

**On DigitalOcean/Linode:**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --standalone -d your-domain.com
```

**Auto-renewal:**
```bash
sudo systemctl enable certbot.timer
```

---

## Performance Tips

1. **Enable GZIP compression** in Nginx
2. **Cache static files** (CSS, JS, images)
3. **Use CDN** for images (Cloudflare Free)
4. **Monitor performance** (Uptimerobot.com)
5. **Set up alerts** for crashes

---

## Troubleshooting Production Issues

### Site goes down
- Check server logs: `pm2 logs`
- Check disk space: `df -h`
- Restart app: `pm2 restart novacraft`

### Database locked
- Stop app: `pm2 stop novacraft`
- Check for lock files
- Restart: `pm2 start novacraft`

### High memory usage
- Check with `top` command
- May need database optimization
- Consider upgrading server

---

## Monitoring & Maintenance

**Weekly:**
- Check submission count
- Verify backups are working
- Check error logs

**Monthly:**
- Review database size
- Archive old submissions
- Update dependencies: `npm update`

---

**Need help deploying?** Ask in the comments!
