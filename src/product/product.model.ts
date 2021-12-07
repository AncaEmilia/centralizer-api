import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Code: { type: String, required: true },
  Weight: { type: Number, required: true },
  Price: { type: Number, required: true },
  Color: { type: String, required: true },
  isDeleted: { type: Boolean, required: true }
});

export interface Product extends mongoose.Document {
  Id: string;
  Name: string;
  Code: string;
  Weight: number;
  Price: number;
  Color: string;
  isDeleted: boolean;
} 
