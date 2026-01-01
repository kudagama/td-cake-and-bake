'use client';

import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brown text-cream pt-16 pb-8"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="mb-6 relative w-24 h-24">
                            <Image
                                src="/logo.jpg"
                                alt="TD Cake & Bake"
                                fill
                                className="object-contain rounded-full border-2 border-gold/50"
                            />
                        </div>
                        <p className="text-cream/80 mb-6 leading-relaxed">
                            Crafting memories with sugar, spice, and everything nice. We bring the bakery to your doorstep with our premium delivery service.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-brown transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-brown transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Quick Links (optional, maybe not needed for single page-ish feel but good for structure) */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Explore</h3>
                        <ul className="space-y-3 text-cream/80">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                                <a href="/about" className="hover:text-gold transition-colors">About Us</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                                <a href="/#gallery" className="hover:text-gold transition-colors">Our Menu</a>
                            </li>
                            <li className="mt-4 font-semibold text-white/90">Delivery Areas:</li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Godakawela
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Balawinna
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Madampe
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Kahawatta
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-gold shrink-0" />
                                <span className="text-cream/80">Main Street, Pallebedda, Sri Lanka</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="text-gold shrink-0" />
                                <span className="text-cream/80">+94 76 856 1837</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-gold shrink-0" />
                                <span className="text-cream/80">orders@tdcakeandbake.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-cream/10 pt-8 text-center text-cream/60 text-sm">
                    <p>&copy; {new Date().getFullYear()} TD Cake & Bake. All rights reserved.</p>
                </div>
            </div>
        </motion.footer>
    );
}
