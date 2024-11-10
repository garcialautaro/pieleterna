// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Importa el componente Footer

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Piel Eterna',
  description: 'Sitio web de Pie Eterna',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar /> {/* Navbar aparece en la parte superior */}
        <main className="min-h-screen">{children}</main>
        <Footer /> {/* Footer aparece en la parte inferior */}
      </body>
    </html>
  );
}
