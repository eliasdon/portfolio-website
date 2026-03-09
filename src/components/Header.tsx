'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-primary-navy/80 backdrop-blur-xl border-b border-accent-teal/10 shadow-lg shadow-black/20'
                    : 'bg-transparent border-b border-transparent'
                }`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <nav
                className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
                aria-label="Primary navigation"
            >
                <a
                    href="#"
                    className="text-lg font-semibold tracking-tight text-primary-light hover:text-accent-teal transition-colors"
                >
                    EA
                </a>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link, idx) => (
                        <motion.li
                            key={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                        >
                            <a
                                href={link.href}
                                className="nav-link-anim text-sm text-muted hover:text-accent-teal transition-colors"
                            >
                                {link.label}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    className="md:hidden text-muted hover:text-primary-light transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    aria-label="Toggle navigation menu"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <motion.div
                    id="mobile-menu"
                    className="md:hidden border-t border-deep-grey/50 bg-primary-navy/95 backdrop-blur-xl"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="flex flex-col px-6 py-4 gap-4">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="nav-link-anim text-sm text-muted hover:text-accent-teal transition-colors"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.header>
    );
}
