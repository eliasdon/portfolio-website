'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const honeypot = (form.elements.namedItem('_gotcha') as HTMLInputElement)?.value;
        if (honeypot) return; // bot detected

        // Static site — no server route. Open mailto as fallback.
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
        window.open(`mailto:e.abiadal@hotmail.com?subject=${subject}&body=${body}`, '_self');
        setSubmitted(true);
    }

    return (
        <section
            id="contact"
            className="bg-primary-navy-light py-24 px-6"
            aria-labelledby="contact-heading"
        >
            <div className="mx-auto max-w-4xl">
                <AnimateOnScroll>
                    <h2
                        id="contact-heading"
                        className="text-2xl font-bold tracking-tight text-primary-light sm:text-3xl"
                    >
                        Contact
                    </h2>
                    <div className="mt-2 h-0.5 w-12 bg-accent-teal" aria-hidden="true" />
                </AnimateOnScroll>

                <div className="mt-12 grid gap-12 md:grid-cols-2">
                    {/* Form */}
                    <AnimateOnScroll delay={0.1}>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                            aria-label="Contact form"
                        >
                            {/* Honeypot — hidden from users and assistive tech */}
                            <input
                                type="text"
                                name="_gotcha"
                                aria-hidden="true"
                                tabIndex={-1}
                                className="absolute opacity-0 h-0 w-0 -z-10"
                                autoComplete="off"
                            />

                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium text-primary-light">
                                    Name
                                </label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    required
                                    className="input-glow mt-1.5 w-full rounded-md border border-deep-grey bg-primary-navy px-3 py-2 text-sm text-primary-light placeholder:text-muted/50 focus:border-metallic-gold focus:ring-1 focus:ring-metallic-gold transition-all duration-300"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-primary-light">
                                    Email
                                </label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    required
                                    className="input-glow mt-1.5 w-full rounded-md border border-deep-grey bg-primary-navy px-3 py-2 text-sm text-primary-light placeholder:text-muted/50 focus:border-metallic-gold focus:ring-1 focus:ring-metallic-gold transition-all duration-300"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium text-primary-light">
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="input-glow mt-1.5 w-full rounded-md border border-deep-grey bg-primary-navy px-3 py-2 text-sm text-primary-light placeholder:text-muted/50 focus:border-metallic-gold focus:ring-1 focus:ring-metallic-gold transition-all duration-300 resize-none"
                                    placeholder="Your message"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={submitted}
                                className="rounded-md bg-accent-teal px-5 py-2.5 text-sm font-medium text-primary-navy transition-all duration-300 hover:bg-accent-teal-dim hover:shadow-lg hover:shadow-accent-teal/20 disabled:opacity-50"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                {submitted ? '✓ Message Sent' : 'Send Message'}
                            </motion.button>
                        </form>
                    </AnimateOnScroll>

                    {/* Contact links */}
                    <AnimateOnScroll delay={0.25} direction="right">
                        <div className="flex flex-col justify-center gap-5">
                            <h3 className="text-sm font-semibold text-primary-light">Get in Touch</h3>
                            <a
                                href="mailto:e.abiadal@hotmail.com"
                                className="group inline-flex items-center gap-3 text-sm text-muted hover:text-accent-teal transition-all duration-300"
                            >
                                <svg className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                e.abiadal@hotmail.com
                            </a>

                            <a
                                href="https://linkedin.com/in/eliasabiadal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 text-sm text-muted hover:text-accent-teal transition-all duration-300"
                            >
                                <svg className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                linkedin.com/in/eliasabiadal
                            </a>
                            <a
                                href="https://github.com/eliasabiadal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 text-sm text-muted hover:text-accent-teal transition-all duration-300"
                            >
                                <svg className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                github.com/eliasabiadal
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
