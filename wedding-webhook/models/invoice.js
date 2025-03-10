
const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    couple_id: mongoose.Schema.Types.ObjectId, // References Couple
    vendor_id: mongoose.Schema.Types.ObjectId, // References Vendor
    amount: Number,
    status: { type: String, enum: ["Pending", "Paid", "Cancelled"], default: "Pending" },
    payment_method: String
  });
  
  module.exports = mongoose.model("Invoice", InvoiceSchema, "invoices");
  