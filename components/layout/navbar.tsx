'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Menu', href: '/menu' },
    { name: 'Locations', href: '/locations' },
    { name: 'About', href: '/about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
      className="sticky top-0 z-50 w-full bg-background border-b border-border"
    >
      <div className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-heading font-bold text-2xl tracking-tighter uppercase group-hover:text-accent transition-colors">
            Angkringan Joss
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-muted hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm" className="rounded-none bg-foreground text-background hover:bg-accent hover:text-white font-bold tracking-wide uppercase px-6">
            Order Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 h-screen animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-bold uppercase tracking-tight text-foreground hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button fullWidth className="mt-4 rounded-none h-12 uppercase font-bold" onClick={() => setIsOpen(false)}>
              Order Now
            </Button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
