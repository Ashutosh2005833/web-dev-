# ⚡ Quick Start Guide (5 Minutes)

## Prerequisites
- Node.js installed (download from nodejs.org)
- Your website folder

## Step 1: Open Terminal
- **Mac/Linux**: Open Terminal
- **Windows**: Open Command Prompt (cmd) or PowerShell

## Step 2: Navigate to Website Folder
```bash
cd path/to/your/ashutosh\ web
```

Replace `path/to/your` with your actual folder path.

## Step 3: Install Dependencies
```bash
npm install
```

Wait for it to finish (1-2 minutes first time).

## Step 4: Start Server
```bash
npm start
```

You should see:
```
🚀 Server running at http://localhost:3000
📊 Admin panel: http://localhost:3000/admin
```

## Step 5: Test Your Website
1. Open browser
2. Go to: **http://localhost:3000**
3. Fill the contact form
4. Click "Submit Karein"
5. Message saved! ✅

## Step 6: View Submissions
1. Go to: **http://localhost:3000/admin**
2. See all submitted forms
3. Contact info, messages, timestamps

## That's It! 🎉

### To Stop Server
Press `Ctrl + C` in terminal

### To Restart
```bash
npm start
```

---

## What Got Created?

- ✅ `server.js` - Backend server
- ✅ `package.json` - Dependencies list
- ✅ `form_submissions.db` - Database (auto-created)
- ✅ `admin.html` - Admin dashboard
- ✅ Updated form to save data

---

## Forms Now Save:
- Name
- Phone
- Email
- Website Type
- Budget
- Message
- Date & Time

---

## Ready to Deploy?
See `DEPLOYMENT.md` for production setup

Need help? All instructions in `README.md`
