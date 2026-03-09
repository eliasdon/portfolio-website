'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/data/resume';
import ImageLightbox from './ImageLightbox';
import AnimateOnScroll from './AnimateOnScroll';

export default function Projects() {
    const [lightboxImage, setLightboxImage] = useState<{
        src: string;
        alt: string;
    } | null>(null);

    return (
        <>
            <section
                id="projects"
                className="bg-primary-navy-light py-24 px-6"
                aria-labelledby="projects-heading"
            >
                <div className="mx-auto max-w-5xl">
                    <AnimateOnScroll>
                        <h2
                            id="projects-heading"
                            className="text-2xl font-bold tracking-tight text-primary-light sm:text-3xl"
                        >
                            Projects
                        </h2>
                        <div className="mt-2 h-0.5 w-12 bg-accent-teal" aria-hidden="true" />
                    </AnimateOnScroll>

                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, idx) => (
                            <AnimateOnScroll key={idx} delay={idx * 0.15}>
                                <motion.article
                                    className="glass-card group flex flex-col rounded-lg p-6 h-full"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                >
                                    {/* Architecture diagram image or placeholder */}
                                    {project.image ? (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setLightboxImage({
                                                    src: project.image!,
                                                    alt: `${project.title} — Architecture Diagram`,
                                                })
                                            }
                                            className="mb-5 overflow-hidden rounded-md border border-deep-grey bg-deep-grey/50 focus:outline-none focus:ring-2 focus:ring-accent-teal focus:ring-offset-2 focus:ring-offset-primary-navy"
                                            aria-label={`View architecture diagram for ${project.title}`}
                                        >
                                            <Image
                                                src={project.image}
                                                alt={`${project.title} — Architecture Diagram`}
                                                width={400}
                                                height={225}
                                                className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                                                loading="lazy"
                                            />
                                        </button>
                                    ) : (
                                        <div className="mb-5 flex h-36 items-center justify-center rounded-md bg-deep-grey/50 border border-deep-grey">
                                            <span className="text-xs text-muted/60 tracking-wide uppercase">
                                                Architecture Diagram
                                            </span>
                                        </div>
                                    )}

                                    <h3 className="text-base font-semibold text-primary-light leading-snug">
                                        {project.title}
                                    </h3>

                                    <div className="mt-4 space-y-3 flex-1">
                                        <div>
                                            <h4 className="text-xs font-medium uppercase tracking-wider text-accent-teal">
                                                Problem
                                            </h4>
                                            <p className="mt-1 text-sm leading-relaxed text-muted">
                                                {project.problem}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-medium uppercase tracking-wider text-accent-teal">
                                                Solution
                                            </h4>
                                            <p className="mt-1 text-sm leading-relaxed text-muted">
                                                {project.solution}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="tech-badge rounded-full border border-deep-grey px-2.5 py-0.5 text-xs text-muted"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.article>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {lightboxImage && (
                <ImageLightbox
                    src={lightboxImage.src}
                    alt={lightboxImage.alt}
                    onClose={() => setLightboxImage(null)}
                />
            )}
        </>
    );
}
