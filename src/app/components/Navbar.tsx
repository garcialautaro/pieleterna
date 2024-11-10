"use client";
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo_no_bg.png'; // Importamos el logo desde la carpeta public

// Definimos una lista de enlaces para el menú
const menuItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes somos', href: '/quienes-somos' },
  { label: 'Camuflaje cero tinta', href: '/camuflaje-cero-tinta' },
  { label: 'Contáctenos', href: '/contacto' },
];

// Componente Navbar
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar el toggle del menú móvil
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para manejar el cierre del menú al seleccionar un item
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-beige_claro text-beige_oscuro p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo con borde tipo nube */}
        <Link href="/">
          <div className="p-2 bg-blanco_hueso rounded-full shadow-md border-2 border-blanco_hueso cursor-pointer">
            <Image src={logo} alt="Logo" width={40} height={40} className="w-10 h-10" />
          </div>
        </Link>

        {/* Menú de escritorio */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-negro_ebano"
            >
              <strong>{item.label}</strong>
            </a>
          ))}
        </div>

        {/* Icono de menú para mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
          <FiMenu className="text-negro_ebano text-2xl" />
        </button>
      </div>

      {/* Menú mobile con animación */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block py-2 px-4 hover:text-negro_ebano"
            onClick={handleMenuItemClick} // Colapsa el menú al hacer clic
          >
            <strong>{item.label}</strong>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
