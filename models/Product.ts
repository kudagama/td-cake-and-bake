import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
    title: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    isAvailable: boolean;
}

const ProductSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
        type: String,
        required: true,
        enum: [
            'Wedding Cake Structures',
            'Birthday Cakes',
            'Cup Cakes',
            'Anniversary Cakes',
            'Jar Cakes',
            'All other cakes'
        ]
    },
    imageUrl: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
}, { timestamps: true });

// Check if model exists to avoid recompilation errors in Next.js
const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
