const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Price catalog mapping package to price per person
const packagePrices = {
  'Morning Package': 350,
  'Afternoon Package': 500,
  'Evening Package': 250,
  'Kayaking Only': 200,
};

// Admin authentication middleware
const protectAdmin = (req, res, next) => {
  const password = req.headers['x-admin-password'];
  const expectedPassword = process.env.ADMIN_PASSWORD || 'admin123';
  if (password === expectedPassword) {
    next();
  } else {
    res.status(401).json({ success: false, message: 'Unauthorized. Invalid admin password.' });
  }
};

// @route   POST /api/bookings
// @desc    Create a new booking
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, phone, packageType, date, guests, notes } = req.body;

    if (!name || !phone || !packageType || !date || !guests) {
      return res.status(400).json({ success: false, message: 'Please fill all required fields.' });
    }

    const pricePerPerson = packagePrices[packageType];
    if (pricePerPerson === undefined) {
      return res.status(400).json({ success: false, message: 'Invalid package selection.' });
    }

    const totalPrice = pricePerPerson * Number(guests);

    const booking = new Booking({
      name,
      phone,
      packageType,
      date,
      guests,
      notes,
      totalPrice,
    });

    const savedBooking = await booking.save();
    res.status(201).json({ success: true, data: savedBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ success: false, message: error.message || 'Server Error' });
  }
});

// @route   GET /api/bookings
// @desc    Get all bookings (with optional search query)
// @access  Private (Admin)
router.get('/', protectAdmin, async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      // Search by name or phone (case insensitive)
      query = {
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { phone: { $regex: search, $options: 'i' } },
          { packageType: { $regex: search, $options: 'i' } }
        ]
      };
    }

    const bookings = await Booking.find(query).sort({ date: 1, createdAt: -1 });
    res.status(200).json({ success: true, count: bookings.length, data: bookings });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// @route   GET /api/bookings/stats
// @desc    Get admin statistics
// @access  Private (Admin)
router.get('/stats', protectAdmin, async (req, res) => {
  try {
    const bookings = await Booking.find({});
    const totalBookings = bookings.length;
    const totalRevenue = bookings.reduce((sum, b) => sum + b.totalPrice, 0);
    const totalGuests = bookings.reduce((sum, b) => sum + b.guests, 0);

    // Group bookings by packageType
    const packageStats = {
      'Morning Package': 0,
      'Afternoon Package': 0,
      'Evening Package': 0,
      'Kayaking Only': 0,
    };
    bookings.forEach(b => {
      if (packageStats[b.packageType] !== undefined) {
        packageStats[b.packageType]++;
      }
    });

    res.status(200).json({
      success: true,
      stats: {
        totalBookings,
        totalRevenue,
        totalGuests,
        packageStats,
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// @route   DELETE /api/bookings/:id
// @desc    Delete a booking
// @access  Private (Admin)
router.delete('/:id', protectAdmin, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    await booking.deleteOne();
    res.status(200).json({ success: true, message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// @route   POST /api/bookings/verify-auth
// @desc    Verify admin credentials
// @access  Public
router.post('/verify-auth', (req, res) => {
  const { password } = req.body;
  const expectedPassword = process.env.ADMIN_PASSWORD || 'admin123';
  if (password === expectedPassword) {
    res.status(200).json({ success: true, message: 'Authenticated successfully' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid admin password' });
  }
});

module.exports = router;
