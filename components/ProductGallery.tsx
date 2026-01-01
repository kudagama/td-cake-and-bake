'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import { IProduct } from '@/models/Product'; // We can use the interface from models

const CATEGORIES = [
    'All',
    'Wedding Cake Structures',
    'Birthday Cakes',
    'Cup Cakes',
    'Anniversary Cakes',
    'Jar Cakes',
    'All other cakes'
];

export default function ProductGallery() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [filter, setFilter] = useState('All');
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('/api/products');
                if (!res.ok) {
                    throw new Error('Failed to fetch cakes. Please refresh or try again later.');
                }
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
                setError('Unable to load our delicious cakes properly. Please check your connection.');
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-brown mb-4">Our Sweet Creations</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our wide range of delicious cakes tailored for every occasion.
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === cat
                                ? 'bg-brown text-white shadow-lg scale-105'
                                : 'bg-cream text-brown hover:bg-gold/20'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Product Grid */}
                {error ? (
                    <div className="text-center py-12">
                        <p className="text-red-500 mb-4">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="text-brown hover:text-gold underline"
                        >
                            Try Again
                        </button>
                    </div>
                ) : loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brown"></div>
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence>
                            {filteredProducts.map((product) => (
                                <ProductCard key={String(product._id)} product={product} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

                {filteredProducts.length === 0 && !loading && (
                    <div className="text-center py-12 text-gray-500">
                        No cakes found in this category yet.
                    </div>
                )}
            </div>
        </section>
    );
}
