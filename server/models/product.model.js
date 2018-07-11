import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  count: { type: Number, required: true },
  img: { type: String, default: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_red_SS_front_grande.jpg?v=1468602448' },
  dateAdded: { type: Date, default: Date.now, required: true }
});

export default mongoose.model('Product', productSchema, 'products');
