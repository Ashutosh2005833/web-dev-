# NovaCraft Form Database Setup

Complete form submission system for your NovaCraft website with database storage.

## What's Included

✅ **Express.js Server** - Backend API to handle form submissions  
✅ **SQLite Database** - Lightweight, no external setup needed  
✅ **Admin Dashboard** - View all form submissions  
✅ **Automatic Storage** - All form data saved with timestamps  
✅ **CORS Enabled** - Works from any domain  

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install:
- express (web server)
- sqlite3 (database)
- cors (cross-origin requests)
- body-parser (parse JSON data)

### 2. Start the Server

```bash
npm start
```

You should see:
```
🚀 Server running at http://localhost:3000
📊 Admin panel: http://localhost:3000/admin
💾 Database: ./form_submissions.db
```

### 3. Test It

- **Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin (view all submissions)

## Form Fields Stored

Each submission saves:
- **Name** ✓ (required)
- **Phone** ✓ (required)
- **Email** (optional)
- **Website Type** ✓ (required)
- **Budget** (optional)
- **Message** (optional)
- **Timestamp** (auto-added)

## Database File

- **Location**: `form_submissions.db` (in same folder)
- **Auto-created** on first server start
- **Table**: `submissions`
- **Format**: SQLite 3

## API Endpoints

### POST `/api/submit-form`
Submit a new form

**Request:**
```json
{
  "name": "Rajesh Kumar",
  "phone": "+919876543210",
  "email": "rajesh@email.com",
  "websiteType": "Online Store",
  "budget": "₹15,000 – ₹30,000",
  "message": "Mujhe ek online store chahiye..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Form submitted successfully",
  "submissionId": 1
}
```

### GET `/api/submissions`
Get all submissions (admin view)

### GET `/api/stats`
Get submission statistics

## Deployment

### Deploy on Heroku
```bash
# Install Heroku CLI, then:
heroku login
heroku create your-app-name
git push heroku main
```

### Deploy on Vercel
Not recommended (no built-in database). Use a separate backend or database service.

### Deploy on AWS/DigitalOcean
Run on a VPS with Node.js. Keep the database backed up regularly.

## Important Files

- **server.js** - Main backend server
- **package.json** - Dependencies
- **form_submissions.db** - Database (auto-created)
- **admin.html** - Admin dashboard
- **agency-website-v3.html** - Main website (already updated)

## Stopping the Server

Press `Ctrl + C` in terminal.

## Tips

- **Backup database regularly**: Copy `form_submissions.db` to safe location
- **Check server logs**: See who submitted and when
- **Admin access**: Add password protection to `/admin` later
- **Email notifications**: Can add email alerts when forms come in

## Troubleshooting

### "Port 3000 already in use"
```bash
# Change port in server.js
# Or kill the process using port 3000
lsof -i :3000
kill -9 <PID>
```

### "Cannot find module 'express'"
```bash
npm install
```

### Database not saving
- Check folder permissions
- Ensure write access to the directory
- Check server console for errors

## Need Help?

1. Check the browser console (F12) for errors
2. Check the server terminal for logs
3. Verify all fields are filled in the form
4. Make sure server is running on http://localhost:3000

---

**Created for NovaCraft Studio** | Form management system with ❤️
