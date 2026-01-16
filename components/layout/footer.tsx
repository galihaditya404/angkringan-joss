import Link from 'next/link';
import { Instagram, MapPin, Phone } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-earth-900 text-earth-100 py-16">
            <div className="container-custom grid gap-12 md:grid-cols-3">
                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="font-heading text-2xl font-bold tracking-tight">Angkringan Joss</h3>
                    <p className="text-earth-100/70 text-sm max-w-xs leading-relaxed">
                        Elevated humble coffee experience. <br />
                        Brewing stories and community since 2026.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-bold mb-6 text-olive-100 uppercase tracking-widest text-xs">Explore</h4>
                    <ul className="space-y-3 text-sm text-earth-100/80">
                        <li><Link href="/menu" className="hover:text-olive-100 transition-colors">Menu</Link></li>
                        <li><Link href="/locations" className="hover:text-olive-100 transition-colors">Locations</Link></li>
                        <li><Link href="/about" className="hover:text-olive-100 transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-olive-100 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-bold mb-6 text-olive-100 uppercase tracking-widest text-xs">Connect</h4>
                    <ul className="space-y-4 text-sm text-earth-100/80">
                        <li className="flex items-center gap-3 group">
                            <div className="p-2 rounded-full bg-white/5 text-earth-100 group-hover:bg-olive-500 group-hover:text-white transition-colors">
                                <Instagram size={16} />
                            </div>
                            <span>@angkringanjoss</span>
                        </li>
                        <li className="flex items-center gap-3 group">
                            <div className="p-2 rounded-full bg-white/5 text-earth-100 group-hover:bg-olive-500 group-hover:text-white transition-colors">
                                <Phone size={16} />
                            </div>
                            <span>+62 812 3456 7890</span>
                        </li>
                        <li className="flex items-start gap-3 group">
                            <div className="p-2 rounded-full bg-white/5 text-earth-100 group-hover:bg-olive-500 group-hover:text-white transition-colors mt-0.5">
                                <MapPin size={16} />
                            </div>
                            <span>Jl. Damai Sejahtera No. 88,<br />Yogyakarta</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-custom border-t border-white/10 mt-16 pt-8 text-center text-xs text-white/30">
                © 2026 Angkringan Joss. All rights reserved.
            </div>
        </footer>
    );
}
