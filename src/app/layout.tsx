import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { CookieConsent } from '@/components/sections/CookieConsent';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-fraunces',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Palmira Garde | Cosmética Fresca Ringana',
  description:
    'Cosmética natural y fresca de Ringana, sin conservantes. Reclama tu código de bienvenida de 20€ con Palmira Garde.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Verificación de dominio Meta — Ramses entrega el código desde Business Suite > Dominios */}
        <meta name="facebook-domain-verification" content="PENDIENTE_CODIGO_RAMSES" />
      </head>
      <body className="font-body antialiased overflow-x-hidden" suppressHydrationWarning>
        {children}
        <CookieConsent />
        {/* Meta Pixel noscript fallback */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=3838200989821889&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
