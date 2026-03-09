'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimateOnScrollProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
}

export default function AnimateOnScroll({
    children,
    delay = 0,
    duration = 0.6,
    className = '',
    direction = 'up',
}: AnimateOnScrollProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const directionOffsets = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
    };

    const offset = directionOffsets[direction];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: offset.y, x: offset.x }}
            animate={
                isInView
                    ? { opacity: 1, y: 0, x: 0 }
                    : { opacity: 0, y: offset.y, x: offset.x }
            }
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
