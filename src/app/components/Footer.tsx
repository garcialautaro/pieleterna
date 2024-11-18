import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importamos el ícono de WhatsApp

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-beige_claro p-4 border-t-4 border-beige_oscuro">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left mb-2 sm:mb-0">
          <strong>&copy; {new Date().getFullYear()} Piel Eterna. Todos los derechos reservados.</strong>
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <p className="text-center sm:text-left">
            <strong>Desarrollado por Lautaro Garcia</strong>
          </p>
          <a
            href="https://wa.me/5492634540527"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-beige_claro hover:text-beige_oscuro"
          >
            <FaWhatsapp size={20} className="mr-2" />
            2634540527
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
