import mongoose from 'mongoose';

export interface Products extends mongoose.Document {
  name: string;
  details: [{ header: string; content: string[] }];
  images: string[];
  color: string[];
  size: string[];
  description: string;
}

const ProductSchema = new mongoose.Schema<Products>({
  name: String,
  details: [{ header: String, content: [String] }],
  images: [String],
  color: [String],
  size: [String],
  description: String,
});

export default mongoose.models.Product ||
  mongoose.model<Products>('Product', ProductSchema);
