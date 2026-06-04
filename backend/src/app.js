const express = require('express');
const cors = require('cors');
const bookingRoutes = require('./routes/bookings');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/bookings', bookingRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Backend server is running smoothly.' });
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'API Route Not Found' });
});

module.exports = app;
