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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-cream/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center p-6"
                    >
                        <motion.div
                            className="flex flex-col gap-8 items-center w-full max-w-sm"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                            }}
                        >
                            <motion.div variants={{ open: { y: 0, opacity: 1 }, closed: { y: 20, opacity: 0 } }}>
                                <Link
                                    href="/"
                                    className="text-3xl font-bold text-brown hover:text-gold transition-colors flex items-center gap-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Home size={28} /> Home
                                </Link>
                            </motion.div>

                            <motion.div variants={{ open: { y: 0, opacity: 1 }, closed: { y: 20, opacity: 0 } }}>
                                <Link
                                    href="/gallery"
                                    className="text-3xl font-bold text-brown hover:text-gold transition-colors flex items-center gap-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="text-xs border border-brown/30 px-2 py-1 rounded-full uppercase tracking-widest">New</span>
                                    Gallery
                                </Link>
                            </motion.div>

                            <motion.div variants={{ open: { y: 0, opacity: 1 }, closed: { y: 20, opacity: 0 } }}>
                                <Link
                                    href="/about"
                                    className="text-3xl font-bold text-brown hover:text-gold transition-colors flex items-center gap-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <User size={28} /> About Us
                                </Link>
                            </motion.div>

                            <motion.div
                                variants={{ open: { y: 0, opacity: 1 }, closed: { y: 20, opacity: 0 } }}
                                className="w-full pt-8"
                            >
                                <button className="w-full bg-brown text-white py-4 rounded-2xl text-xl font-bold shadow-xl active:scale-95 transition-all">
                                    Order Now
                                </button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
