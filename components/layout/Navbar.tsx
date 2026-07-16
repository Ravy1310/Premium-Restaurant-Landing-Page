"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/Menu" },
        { label: "About", href: "/About" },
        { label: "Gallery", href: "/gallery" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Contact", href: "/contact" },
        { label: "FAQ", href: "/faq" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 w-full h-[88px] flex items-center transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1280px] flex items-center justify-between">
                {/* Brand Logo */}
                <Link href="/" className="text-primary text-2xl font-bold font-playfair tracking-wide">
                    Ember & Oak
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="group relative text-body hover:text-primary text-sm font-semibold font-inter transition-colors py-1"
                        >
                            {item.label}
                            {/* Animasi Garis Bawah */}
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* Trailing Action (Desktop) */}
                <div className="hidden md:block">
                    <Link
                        href="/reservation"
                        className="group relative inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md active:scale-95"
                    >
                        Reservation
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-primary p-2 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMobileMenuOpen && (
                <div className="absolute top-[88px] left-0 w-full bg-white shadow-md border-t border-border flex flex-col md:hidden py-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-6 py-3 text-body hover:text-primary hover:bg-stone-50 text-base font-semibold font-inter transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="px-6 pt-4 pb-2">
                        <Link
                            href="/#reservation"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex h-10 w-full items-center justify-center rounded-full bg-primary px-6 text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition-all duration-300 hover:bg-primary/90 active:scale-95"
                        >
                            Reservation
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}