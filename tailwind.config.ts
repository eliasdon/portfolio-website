import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/app/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-navy': '#0f1b2d',
                'primary-navy-light': '#162338',
                'primary-light': '#f0f4f8',
                'accent-teal': '#2dd4a8',
                'accent-teal-dim': '#1a9a78',
                'metallic-gold': '#c8956c',
                'deep-grey': '#1e293b',
                'muted': '#94a3b8',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;
