
const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    vendor_type: { type: String, enum: ["event_hall", "photographer"], required: true },
    name: String,
    email: String,
    phone: String,
    location: String,
    price_range: String,
    availability: Boolean
  });
  
  module.exports = mongoose.model("Vendor", VendorSchema, "vendor_registrations");
  