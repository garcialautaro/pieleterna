"use client";
import React from "react";
import { FaWhatsapp } from 'react-icons/fa';

interface ImageData {
  src: string;
  alt: string;
}

const Contact: React.FC = () => {
  // Lista de imágenes proporcionadas
  return (
    <div className="bg-negro_ebano text-beige_claro min-h-screen flex flex-col items-center justify-center px-6 sm:px-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">¡No esperes más!</h1>
        <p className="text-lg sm:text-xl mb-6 text-beige_oscuro">
          Transforma tu piel y recobra tu confianza con nuestro innovador tratamiento de camuflaje de estrías.
          Resultados notorios desde la primera sesión, cambios permanentes, y una piel más uniforme.
        </p>
        <p className="text-lg sm:text-xl mb-8 font-semibold ">
          Agenda tu cita hoy mismo y comienza el cambio que mereces.
          ¡Estamos aquí para ayudarte a lograr una piel renovada y hermosa!
        </p>
        <a
          href={`https://wa.me/+5492634590544`} // Número de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-beige_claro text-negro_ebano px-6 py-3 rounded-full text-lg shadow-md hover:bg-beige_oscuro transition duration-300"
        >
          <FaWhatsapp size={24} className="mr-2" />
          Agendar una cita
        </a>
      </div>
    </div>
  );
};

export default Contact;
