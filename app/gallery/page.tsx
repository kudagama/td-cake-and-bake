'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Use strict types for better code quality
type ImageCategory = 'Wedding' | 'Birthday' | 'Cup Cakes' | 'Anniversary' | 'Jar Cakes' | 'Others';

interface GalleryImage {
    id: string;
    src: string;
    category: ImageCategory;
    alt: string;
}

// Data Structure - Updated with local mappings as per request
const GALLERY_IMAGES: GalleryImage[] = [
    { id: '1', src: '/gallery/cake1.jpg', category: 'Birthday', alt: 'Birthday Love Cake' },
    { id: '2', src: '/gallery/cake2.jpg', category: 'Birthday', alt: 'Blue Floral Birthday Cake' },
    { id: '3', src: '/gallery/cake3.jpg', category: 'Others', alt: 'Strawberry Slice' },
    { id: '4', src: '/gallery/cake4.jpg', category: 'Anniversary', alt: 'Golden Anniversary Cake' },
    { id: '5', src: '/gallery/cake5.jpg', category: 'Birthday', alt: 'Chocolate Drip Birthday' },
    { id: '6', src: '/gallery/cake6.jpg', category: 'Birthday', alt: 'Pink Flowers - Akka' },
    { id: '7', src: '/gallery/cake7.jpg', category: 'Birthday', alt: 'Mermaid Theme - Thanuli' },
    { id: '8', src: '/gallery/cake8.jpg', category: 'Birthday', alt: 'Rose Anniversary - Methmal' },
    { id: '9', src: '/gallery/cake9.jpg', category: 'Birthday', alt: 'Classic Ribbon - Amma' },
    { id: '10', src: '/gallery/cake10.jpg', category: 'Birthday', alt: 'Red Floral Small Cake' },
    { id: '11', src: '/gallery/cake11.jpg', category: 'Birthday', alt: 'Hello Kitty Theme - Damsadhi' },
    { id: '12', src: '/gallery/cake12.jpg', category: 'Birthday', alt: 'Blue Green Floral - Manike' },
    { id: '13', src: '/gallery/cake13.jpg', category: 'Birthday', alt: 'Mickey Mouse 1st Birthday - Minosh' },
    // Placeholders to demonstrate other categories
    { id: '6', src: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800', category: 'Wedding', alt: 'Classic Wedding Cake' },
    { id: '7', src: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=800', category: 'Cup Cakes', alt: 'Red Velvet Cupcake' },
    { id: '8', src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800', category: 'Jar Cakes', alt: 'Strawberry Jar Cake' },
];

const CATEGORIES: (ImageCategory | 'All')[] = ['All', 'Wedding', 'Birthday', 'Cup Cakes', 'Anniversary', 'Jar Cakes', 'Others'];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState<'All' | ImageCategory>('All');
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const filteredImages = activeCategory === 'All'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter(img => img.category === activeCategory);

    return (
        <main className="min-h-screen bg-cream">
            <Navbar />

            {/* Header */}
            <div className="pt-32 pb-10 text-center container mx-auto px-4">
                <h1 className="text-5xl font-bold text-brown mb-4 font-serif">Cake Gallery</h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    A visual feast of our finest creations. Click on any image to view details.
                </p>

                {/* Sticky Filter Bar */}
                <div className="sticky top-24 z-30 mt-8 py-4 bg-cream/95 backdrop-blur-sm -mx-4 px-4 overflow-x-auto">
                    <div className="flex justify-center min-w-max gap-2 md:gap-4">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border border-transparent
                    ${activeCategory === cat
                                        ? 'bg-brown text-white shadow-lg scale-105'
                                        : 'bg-white text-brown hover:border-gold hover:text-gold shadow-sm'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <section className="container mx-auto px-4 pb-20">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredImages.map((image) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                key={image.id}
                                className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-square bg-white shadow-md border border-brown/5"
                                onClick={() => setSelectedImage(image)}
                            >
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 w-10 h-10 drop-shadow-lg" />
                                </div>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                    <span className="text-white font-semibold text-sm">{image.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredImages.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <p>No cakes found in this category yet.</p>
                    </div>
                )}
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl max-h-[90vh] aspect-auto rounded-lg overflow-hidden flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-[80vh] rounded-lg overflow-hidden bg-transparent">
                                <Image // Changed to Next.js Image for optimization even in modal
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    fill
                                    className="object-contain" // Keep aspect ratio whole
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-2xl font-bold text-white">{selectedImage.alt}</h3>
                                <span className="text-gold font-medium">{selectedImage.category}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
