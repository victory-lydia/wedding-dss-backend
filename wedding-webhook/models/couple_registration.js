const mongoose = require("mongoose");

const CoupleSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  name: String,
  email: String,
  phone: String,
  wedding_date: Date,
  budget: Number,
});

module.exports = mongoose.model("Couple", CoupleSchema, "couple_registrations");
