"use client";
import React from 'react';
import Image from 'next/image';
import { useRef } from 'react';

const Home: React.FC = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  // Función para desplazar la vista hacia la siguiente sección
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Sección de imagen de fondo con el botón */}
      <section className="relative h-[calc(100vh-80px)]">
        {/* Imagen de fondo */}
        <Image
          src="/home/background_home.png"
          alt="Background Home"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        {/* Botón "Quiero saber más" */}
        <div className="absolute bottom-12 w-full flex justify-center">
          <button
            onClick={scrollToNextSection}
            className="bg-beige_oscuro text-blanco_hueso px-6 py-2 rounded-full text-lg shadow-md hover:bg-negro_ebano transition duration-300"
          >
            Quiero saber más
          </button>
        </div>
      </section>

      {/* Sección siguiente, donde se desplazará el usuario */}
      <section ref={nextSectionRef} className="h-screen bg-blanco_hueso">
        {/* Aquí puedes agregar el contenido de la próxima sección */}
        <div className="flex justify-center items-center h-full">
          <h2 className="text-3xl font-bold text-beige_oscuro">Bienvenido a la siguiente sección</h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
