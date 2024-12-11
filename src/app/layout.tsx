import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/atoms/Theme';
import { cn } from '@/utils/function';

import {
  ClerkProvider,
  SignedIn,
} from '@clerk/nextjs';
import { Lexend } from 'next/font/google';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'NextJs Boilerplate - Im.Liam',
  description: 'A modern, scalable, and developer-friendly starter template for building fast and robust web applications using Next.js. This boilerplate comes pre-configured with essential tools and best practices to streamline development and enhance productivity.',
  icons: 'avatar.png',
};

const lexend = Lexend({
  weight: ['300', '400', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(lexend.className, 'antialiased')}
        >
          <SignedIn />

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>

  );
}
