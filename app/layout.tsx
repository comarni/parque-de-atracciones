import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Parque de Atracciones de Madrid | Diversión y Emoción Extrema',
  description: 'El parque de atracciones más grande y moderno de Madrid. Más de 40 atracciones, espectáculos en vivo y diversión para toda la familia desde 1969.',
  keywords: 'parque atracciones madrid, montañas rusas, diversión familiar, atracciones extremas, tickets online',
  authors: [{ name: 'Parque de Atracciones de Madrid' }],
  openGraph: {
    title: 'Parque de Atracciones de Madrid',
    description: 'Vive la emoción extrema en el parque más grande de Madrid',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parque de Atracciones de Madrid',
    description: 'Vive la emoción extrema en el parque más grande de Madrid',
    images: ['/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <Navbar />
        <ThemeToggle />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        
        {/* Easter Egg - Hidden message */}
        <div className="fixed bottom-4 left-4 opacity-10 hover:opacity-30 transition-opacity duration-300">
          <div className="text-xs text-gray-500">🎢 Hecho con ❤️ para Madrid</div>
        </div>
      </body>
    </html>
  );
}