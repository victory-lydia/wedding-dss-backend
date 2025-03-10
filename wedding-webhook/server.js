const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Couple = require("./models/couple_registration");
const Vendor = require("./models/vendor_registration");
const Invoice = require("./models/invoice");
const VendorSelection = require("./models/vendor_selection");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" })); // Allow Google Apps Script requests

// 🔹 Connect to MongoDB (Ensure correct URI)
mongoose
  .connect("mongodb+srv://vickylydy:7OMAeohxUSAP5P6U@wddingcluster.5djus.mongodb.net/weddingDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.post("/", async (req, res) => {
  try {
    const { form_id, ...formData } = req.body;

    let Model;
    if (form_id === "couple_registration") Model = Couple;
    else if (form_id === "vendor_registration") Model = Vendor;
    else if (form_id === "invoice_submission") Model = Invoice;
    else if (form_id === "vendor_selection") Model = VendorSelection;
    else return res.status(400).json({ error: "Invalid form ID" });

    const newEntry = new Model(formData);
    await newEntry.save();

    res.status(200).json({ message: "✅ Data saved to MongoDB!" });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: "❌ Server error" });
  }
});

// 🔹 Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
