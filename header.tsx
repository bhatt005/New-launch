'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/contact-modal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Community', href: '#community' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Kailshians Logo"
            width={50}
            height={50}
            className="w-12 h-12"
          />
          <span className="text-xl font-bold text-primary hidden sm:block">Kailshians</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <ContactModal>
          <Button className="hidden md:block bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </ContactModal>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <ContactModal>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </ContactModal>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
