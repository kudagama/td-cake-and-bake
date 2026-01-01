import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brown text-cream pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-gold mb-6 font-serif">TD Cake & Bake</h2>
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
                    </div>

                    {/* Quick Links (optional, maybe not needed for single page-ish feel but good for structure) */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Delivery Areas</h3>
                        <ul className="space-y-3 text-cream/80">
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
                                <span className="text-cream/80">+94 7X XXX XXXX</span>
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
        </footer>
    );
}
