const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      id: Number,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Order", orderSchema)

