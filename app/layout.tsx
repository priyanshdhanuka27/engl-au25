// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'NightPulse Seattle | Student Grant Proposal',
  description: 'A student-led, all-night music festival proposal focused on community wellness, high-energy music, and sustainability in Seattle.',
  keywords: ['music festival', 'Seattle', 'UW', 'mental health', 'sustainability', 'EDM', 'student proposal'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
