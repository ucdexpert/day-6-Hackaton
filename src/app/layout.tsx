// src/app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css'; // Ensure you have your global CSS imported
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
// Configure the Inter font with fallback and display properties
const inter = Inter({
  subsets: ['latin'],
  fallback: ['Arial', 'sans-serif'], // Add fallback fonts
  display: 'swap', // Ensures content is visible while the font loads
});

export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
