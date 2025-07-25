import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from "@vercel/analytics/react"
import { CustomCursor } from '@/components/custom-cursor';

export const metadata: Metadata = {
  title: 'RAJAT SHUKLA | Web & Mobile Developer',
  description: 'Portfolio of RAJAT SHUKLA, a skilled web and mobile developer specializing in creating modern and responsive applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <CustomCursor />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
