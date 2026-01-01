'use client';

import { IProduct } from '@/models/Product';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
    product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
    const whatsappNumber = "94768561837"; // Replace with actual number
    const message = encodeURIComponent(`Hi TD Cake & Bake! I would like to order the "${product.title}". Is it available?`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-brown/5 flex flex-col h-full"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {!product.isAvailable && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full font-bold">Sold Out</span>
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-gold uppercase tracking-wider">{product.category}</span>
                    <span className="font-bold text-lg text-brown">LKR {product.price.toLocaleString()}</span>
                </div>

                <h3 className="text-xl font-bold text-brown mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-2">{product.description}</p>

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                    <MessageCircle size={20} />
                    Order via WhatsApp
                </a>
            </div>
        </motion.div>
    );
}
