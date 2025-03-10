const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vickylydy:7OMAeohxUSAP5P6U@wddingcluster.5djus.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));
