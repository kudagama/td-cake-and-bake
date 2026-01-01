'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    const scrollToGallery = () => {
        const gallery = document.getElementById('gallery');
        gallery?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-[90vh] pt-32 md:pt-44 pb-20 overflow-hidden bg-cream">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-pink/20 rounded-bl-[100px] -z-0 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gold/10 rounded-tr-[100px] -z-0 blur-3xl" />

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left space-y-6"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-gold/20 text-brown font-semibold text-sm tracking-wide">
                        Making Life Sweeter Since 2024
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold text-brown leading-tight">
                        Taste the <span className="text-gold italic">Magic</span> <br />
                        in Every Bite
                    </h1>
                    <p className="text-lg text-brown/80 max-w-lg">
                        Handcrafted cakes for your special moments. From elegant wedding structures to delightful jar cakes.
                    </p>

                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto">
                            <button
                                onClick={scrollToGallery}
                                className="group bg-brown text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gold hover:text-brown transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl w-full sm:w-auto"
                            >
                                Order Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a href="/about" className="group bg-transparent border-2 border-brown text-brown px-8 py-4 rounded-full font-bold text-lg hover:bg-brown hover:text-white transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                                Our Story
                            </a>
                        </div>

                        <div className="text-sm text-brown/70 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-brown/10 inline-block">
                            <p className="font-semibold">🚚 We Deliver To:</p>
                            <p>Godakawela • Balawinna • Madampe • Kahawatta & surrounding areas</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop"
                            alt="Delicious Chocolate Cake"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                </motion.div>
            </div>
        </section>
    );
}
