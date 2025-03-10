
const mongoose = require("mongoose");

const VendorSelectionSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    couple_id: mongoose.Schema.Types.ObjectId, // References Couple
    selected_vendors: [{ vendor_id: mongoose.Schema.Types.ObjectId, vendor_type: String }]
  });
  
  module.exports = mongoose.model("VendorSelection", VendorSelectionSchema, "vendor_selections");
  