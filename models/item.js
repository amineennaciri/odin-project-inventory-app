const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
/*   category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
  }, */
  category:{
    type: String,
    required: true,
  }, 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Items", ItemSchema);
