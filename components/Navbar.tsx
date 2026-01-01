'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute top-0 w-full p-4 z-50 container mx-auto bg-transparent">
            <div className="flex justify-between items-center">
                <Link href="/" className="z-50 relative">
                    <Image
                        src="/logo.jpg"
                        alt="TD Cake & Bake Logo"
                        width={80}
                        height={80}
                        className="rounded-full border-2 border-brown/10 shadow-md"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    <Link href="/" className="flex items-center gap-2 text-brown font-medium hover:text-gold transition-colors">
                        <Home size={18} />
                        <span>Home</span>
                    </Link>
                    <Link href="/gallery" className="flex items-center gap-2 text-brown font-medium hover:text-gold transition-colors">
                        <span className="font-bold text-xs border border-brown/30 px-1 rounded">NEW</span>
                        <span>Gallery</span>
                    </Link>
                    <Link href="/about" className="flex items-center gap-2 text-brown font-medium hover:text-gold transition-colors">
                        <User size={18} />
                        <span>About Us</span>
                    </Link>
                    <button className="bg-brown text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-gold hover:text-brown transition-all shadow-md hover:shadow-lg">
                        Order Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-brown z-50 relative p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Modal Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 w-full bg-cream/95 backdrop-blur-md shadow-xl rounded-b-3xl p-6 pt-24 z-40 md:hidden flex flex-col gap-6 items-center border-b border-brown/5"
                    >
                        <Link
                            href="/"
                            className="text-xl font-bold text-brown flex items-center gap-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <Home size={20} /> Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-xl font-bold text-brown flex items-center gap-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <User size={20} /> About Us
                        </Link>
                        <button className="w-full bg-brown text-white py-3 rounded-xl font-bold shadow-md">
                            Order Now
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
