const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting - 5 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many form submissions from this IP, please try again later.'
  }
});

app.use('/api/contact', limiter);

// Email transporter configuration
const createTransporter = () => {
  // For development, you can use Gmail with app password
  // For production on Hostinger, use their SMTP settings
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      businessType,
      message
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: 'All required fields must be filled out.'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    const transporter = createTransporter();

    // Email content
    const emailContent = `
      New Business Valuation Inquiry
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Business Type: ${businessType || 'Not specified'}
      
      Message:
      ${message || 'No additional message provided'}
      
      ---
      Submitted on: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}
    `;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'form@mybusinessvaluation.com.au',
      subject: `New Business Valuation Inquiry - ${firstName} ${lastName}`,
      text: emailContent,
      replyTo: email
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon!'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later or contact us directly.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Make sure to set up your .env file with SMTP configuration');
});
