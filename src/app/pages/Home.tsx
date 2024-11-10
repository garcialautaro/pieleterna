"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaWhatsapp } from 'react-icons/fa'; // Importar íconos de flecha

const Home: React.FC = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const agendarSectionRef = useRef<HTMLDivElement>(null); // Referencia para la sección de agendar cita
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Función para desplazar la vista hacia la siguiente sección
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Función para redirigir a la sección de Agendar Cita
  const scrollToAgendarSection = () => {
    if (agendarSectionRef.current) {
      agendarSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lista de imágenes
  const images = [
    { src: "/home/img_home_2.png", alt: "Imagen 2" },
    { src: "/home/img_home_1.png", alt: "Imagen 1" },
    { src: "/home/img_home_3.png", alt: "Imagen 3" },
  ];

  // Función para ir a la siguiente imagen
  const goToNextImage = () => {
    setIsTransitioning(true); // Iniciar la transición
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setIsTransitioning(false); // Finalizar la transición
    }, 500); // Tiempo igual al de la duración de la transición
  };

  // Función para ir a la imagen anterior
  const goToPreviousImage = () => {
    setIsTransitioning(true); // Iniciar la transición
    setTimeout(() => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length); // Mover a la imagen anterior
      setIsTransitioning(false); // Finalizar la transición
    }, 500); // Tiempo igual al de la duración de la transición
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
      <section ref={nextSectionRef} className="bg-beige_claro pt-24 sm:pt-4 pb-4 min-h-screen">
        {/* Contenedor de las imágenes con centrado vertical y horizontal */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 justify-center items-center space-y-4 sm:space-y-0">
          <div className="flex flex-col items-center sm:hidden relative">
            {/* Flecha izquierda */}
            <div
              onClick={goToPreviousImage}
              className="absolute left-[-35px] top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              <FaArrowLeft size={30} color="#111111" />
            </div>

            {/* Imagen con transición suave */}
            <div
              className={`transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            >
              <Image
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                width={250}
                height={250}
                className="object-cover rounded-lg"
              />
            </div>

            {/* Flecha derecha */}
            <div
              onClick={goToNextImage}
              className="absolute right-[-35px] top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              <FaArrowRight size={30} color="#111111" />
            </div>
          </div>
        </div>

        {/* En escritorio, mostrar todas las imágenes una al lado de la otra */}
        <div className="hidden sm:flex sm:space-x-4 justify-center items-center">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Botón "Agendá tu cita" para ir a la siguiente sección */}
        <div className="flex justify-center mt-8">
          <button
            onClick={scrollToAgendarSection}  // Cambié la acción para que redirija a la sección de agendar
            className="bg-beige_oscuro text-blanco_hueso px-6 py-2 rounded-full text-lg shadow-md hover:bg-negro_ebano transition duration-300"
          >
            Agendá una cita
          </button>
        </div>
      </section>

      {/* Nueva Sección de Agendar cita */}
      <section ref={agendarSectionRef} className="bg-beige_oscuro py-4 min-h-screen flex sm:flex-row flex-col items-center justify-center px-6 sm:px-12">
        <div className="flex-1 sm:w-1/2">
          <Image
            src="/home/img_cita.jpg"  // Imagen representativa de la sección
            alt="Imagen de Agendar Cita"
            width={400}
            height={400}
            className="object-cover rounded-lg ml-0 sm:ml-40"
          />
        </div>
        <div className="flex-1 sm:w-1/2 text-center mb-6 sm:mb-0">
        <h1 className="text-5xl font-semibold text-beige_claro mb-6 mt-4 sm:mt-0">Florencia García</h1>
        <h2 className="text-3xl font-semibold text-beige_claro mb-4">Camuflaje de estrías cero tinta</h2>
          <p className="text-xl text-beige_claro mb-6">
          Transforma tus estrías sin necesidad de tintas con nuestro tratamiento exclusivo. Este innovador procedimiento reestructura y regenera la piel, logrando resultados permanentes del 70 al 90%, ¡notorios desde la primera sesión!
          </p>
          <a
            href={`https://wa.me/+5492634590544`}  // Número de WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-beige_claro text-negro_ebano px-4 py-2 rounded-full text-lg shadow-md hover:bg-negro_ebano hover:text-blanco_hueso transition duration-300 sm:px-6 sm:py-3"
          >
            <FaWhatsapp size={20} className="mr-2" />
            Agendá tu cita
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
