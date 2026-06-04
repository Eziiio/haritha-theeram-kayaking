const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({

  // Customer Name
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
  },


  // Phone Number Registration
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
    trim: true,
  },


  // Selected Experience Package
  packageType: {
    type: String,
    required: [true, 'Please select an experience package'],
    enum: [
      'Morning Experience',
      'Village Explorer Experience',
      'Evening Experience',
      'Kayaking Experience'
    ],
  },


  // Kayaking Duration
  duration: {
    type: String,
    required: [true, 'Please select kayaking duration'],
    enum: [
      '1.5 Hours',
      '3 Hours'
    ],
  },


  // Selected Booking Date
  date: {
    type: Date,
    required: [true, 'Please select a date'],
  },


  // Selected Time Slot
  timeSlot: {
    type: String,
    required: [true, 'Please select a time slot'],
  },


  // Number of Visitors
  guests: {
    type: Number,
    required: [true, 'Please specify number of visitors'],
    min: [1, 'Minimum one visitor required'],
  },


  // Extra Requests
  notes: {
    type: String,
    trim: true,
  },


  // Later payment can use this
  paymentStatus: {
    type: String,
    enum: [
      'Not Required',
      'Pending',
      'Paid'
    ],
    default: 'Not Required',
  },


  // Booking Status
  status: {
    type: String,
    enum: [
      'Pending',
      'Confirmed',
      'Cancelled'
    ],
    default: 'Pending',
  },


  // Created Time
  createdAt: {
    type: Date,
    default: Date.now,
  },

});


module.exports = mongoose.model(
  'Booking',
  bookingSchema
);