import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Elias Abiadal — Systems Analyst & Backend Integration Engineer',
    description:
        'Portfolio of Elias Abiadal, a Systems Analyst with 4+ years of experience in cloud transformation, legacy ERP integration, and automated workflow architecture.',
    openGraph: {
        title: 'Elias Abiadal — Systems Analyst',
        description:
            'Cloud transformation, ERP integration, and enterprise automation.',
        type: 'website',
        locale: 'en_CA',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="font-sans antialiased">{children}</body>
        </html>
    );
}
