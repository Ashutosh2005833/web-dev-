const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.dirname(__filename)));

// Database setup
const dbPath = path.join(path.dirname(__filename), 'form_submissions.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to SQLite database at:', dbPath);
    initializeDatabase();
  }
});

// Initialize database table
function initializeDatabase() {
  db.run(`
    CREATE TABLE IF NOT EXISTS submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT,
      website_type TEXT,
      budget TEXT,
      message TEXT,
      submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Database table ready');
    }
  });
}

// API endpoint to handle form submissions
app.post('/api/submit-form', (req, res) => {
  const { name, phone, email, websiteType, budget, message } = req.body;

  // Validate required fields
  if (!name || !phone || !websiteType) {
    return res.status(400).json({
      success: false,
      message: 'Name, phone, and website type are required'
    });
  }

  // Insert into database
  db.run(
    `INSERT INTO submissions (name, phone, email, website_type, budget, message)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [name, phone, email || null, websiteType, budget || null, message || null],
    function(err) {
      if (err) {
        console.error('Database insert error:', err);
        return res.status(500).json({
          success: false,
          message: 'Error saving submission'
        });
      }

      console.log(`New submission received from ${name} (Phone: ${phone})`);
      res.json({
        success: true,
        message: 'Form submitted successfully',
        submissionId: this.lastID
      });
    }
  );
});

// API endpoint to get all submissions (admin view)
app.get('/api/submissions', (req, res) => {
  db.all(
    `SELECT id, name, phone, email, website_type, budget, message, submitted_at 
     FROM submissions 
     ORDER BY submitted_at DESC`,
    (err, rows) => {
      if (err) {
        console.error('Database query error:', err);
        return res.status(500).json({
          success: false,
          message: 'Error fetching submissions'
        });
      }

      res.json({
        success: true,
        count: rows.length,
        submissions: rows
      });
    }
  );
});

// API endpoint to get submission stats
app.get('/api/stats', (req, res) => {
  db.all(
    `SELECT 
      COUNT(*) as total_submissions,
      COUNT(DISTINCT website_type) as website_types,
      MIN(submitted_at) as first_submission,
      MAX(submitted_at) as last_submission
     FROM submissions`,
    (err, rows) => {
      if (err) {
        console.error('Database query error:', err);
        return res.status(500).json({
          success: false,
          message: 'Error fetching stats'
        });
      }

      res.json({
        success: true,
        stats: rows[0]
      });
    }
  );
});

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'agency-website-v3.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Server running at http://localhost:${PORT}`);
  console.log(`📊 Admin panel: http://localhost:${PORT}/admin`);
  console.log(`💾 Database: ${dbPath}\n`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err);
    } else {
      console.log('\n✅ Database connection closed');
    }
    process.exit(0);
  });
});
