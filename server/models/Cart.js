import mongoose, { Schema } from 'mongoose'

const CartSchema = new Schema({
  total: { type: Number, max: 100000, min: 0 },
  subTotal: { type: Number, max: 100000, min: 0 },
  tax: { type: Number, default: .075, max: 100, min: 0.000 },
  quantity: { type: Number, max: 100000, min: 0 },
  items: [{
    productId: { type: Schema.Types.ObjectId, required: true },
    productQty: { type: Number, required: true, max: 100000, min: 0 },
    image: {
      src: { type: String, minlength: 1, trim: true, maxlength: 150 }
    },
    productSlug: { type: String, maxlength: 100 },
    name: { type: String, required: true, maxlength: 50 },
    price: { type: Number, required: true, max: 100000, min: 0 },
    total: { type: Number, max: 100000, min: 0 }
  }],
}, {
  timestamps: true
})

const Cart = mongoose.model('Cart', CartSchema)

export default Cart
