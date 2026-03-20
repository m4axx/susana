import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Palmira Garde | Premium Beauty & Skincare',
  description: 'Descubre la excelencia en cosmética natural y maquillaje profesional. Asesoramiento exclusivo por Palmira Garde.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}