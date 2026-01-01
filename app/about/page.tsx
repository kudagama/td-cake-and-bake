'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Smile, Star, Truck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-cream">
            <Navbar />

            {/* 1. Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-brown/5">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-pink/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <span className="block text-gold font-bold tracking-widest text-sm uppercase mb-4">
                            Est. 2024
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-brown mb-6 font-serif">
                            Our Sweet Journey
                        </h1>
                        <p className="text-xl md:text-2xl text-brown/70 max-w-2xl mx-auto italic">
                            "Baking memories with love, right here in the heart of Pallebedda."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Our Story Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-brown mb-6">From a Home Kitchen to Your Heart</h2>
                        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                            <p>
                                What started as a small passion project in a humble home kitchen has blossomed into Pallebedda's favorite sweet spot. At TD Cake & Bake, we believe that a cake is more than just a dessert—it's the centerpiece of your celebration.
                            </p>
                            <p>
                                Every layer is baked with precision, every frosting swirl is applied with care, and every decoration is hand-picked to ensure your special day is nothing short of perfect.
                            </p>
                            <cite className="block mt-6 font-bold text-brown not-italic text-xl">
                                - The TD Cake & Bake Team
                            </cite>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white"
                    >
                        {/* Using one of the uploaded images (assumed to be the baker/person) */}
                        <Image
                            src="/about/photo1.jpg"
                            alt="Our Baker"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                </div>
            </section>

            {/* 3. Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-brown mb-4">Why Choose Us?</h2>
                        <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Star className="w-12 h-12 text-gold" />,
                                title: "Premium Ingredients",
                                desc: "We never compromise on quality. Fresh butter, real chocolate, and farm-fresh eggs go into every bake."
                            },
                            {
                                icon: <Smile className="w-12 h-12 text-gold" />,
                                title: "Custom Designs",
                                desc: "Dreaming of a unique cake? We bring your vision to life with bespoke designs tailored to your theme."
                            },
                            {
                                icon: <Truck className="w-12 h-12 text-gold" />,
                                title: "Reliable Delivery",
                                desc: "Delivering happiness to Godakawela, Balawinna, Madampe, Kahawatta and beyond."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-cream p-8 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300 border border-brown/5"
                            >
                                <div className="mb-6 flex justify-center bg-white w-20 h-20 mx-auto rounded-full items-center shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-brown mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Photo Gallery */}
            <section className="py-20 container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-brown mb-4">Life at the Bakery</h2>
                    <p className="text-gray-600">A glimpse behind the scenes and our happy moments.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
                    {/* Main Large Image */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden shadow-lg group"
                    >
                        <Image
                            src="/about/photo2.jpg"
                            alt="Bakery Highlights"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    </motion.div>

                    {/* Side Image 1 */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-2xl overflow-hidden shadow-lg group"
                    >
                        {/* Fallback to photo1 if photo3 doesn't exist, or use a placeholder URL */}
                        <Image
                            src="/about/photo1.jpg"
                            alt="Freshly Baked"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Side Image 2 - Placeholder */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-2xl overflow-hidden shadow-lg group bg-brown/10 flex items-center justify-center"
                    >
                        {/* Using external placeholder for visual completeness if user hasn't provided a 3rd image */}
                        <Image
                            src="/gallery/cake11.jpg"
                            alt="Kitchen Vibes"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    </motion.div>
                </div>
            </section>

            {/* 5. Location & Vibe */}
            <section className="py-20 bg-brown text-cream text-center">
                <div className="container mx-auto px-4">
                    <MapPin className="w-16 h-16 text-gold mx-auto mb-6" />
                    <h2 className="text-4xl font-bold mb-6">Proudly Based in Pallebedda</h2>
                    <p className="max-w-xl mx-auto text-cream/80 text-lg mb-8">
                        We are deeply rooted in our community, serving the sweetest treats to our neighbors and friends across the region.
                    </p>
                    <div className="inline-flex gap-4 flex-wrap justify-center">
                        {['Godakawela', 'Balawinna', 'Madampe', 'Kahawatta'].map((loc) => (
                            <span key={loc} className="border border-gold text-gold px-4 py-2 rounded-full text-sm font-semibold hover:bg-gold hover:text-brown transition-colors cursor-default">
                                {loc}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
