"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaWhatsapp } from 'react-icons/fa'; // Importar íconos de flecha

const Home: React.FC = () => {
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const thirdSectionRef = useRef<HTMLDivElement>(null);
  const fourSectionRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Función para desplazar la vista hacia la siguiente sección
  const scrollToFirstSection = () => {
    if (firstSectionRef.current) {
      firstSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSecondSection = () => {
    if (secondSectionRef.current) {
      secondSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Función para redirigir a la sección de Agendar Cita
  const scrollToThirdSection = () => {
    if (thirdSectionRef.current) {
      thirdSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFourSection = () => {
    if (fourSectionRef.current) {
      fourSectionRef.current.scrollIntoView({ behavior: 'smooth' });
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
        {/* Imagen de fondo para escritorio */}
        <div className="hidden sm:block">
          <Image
            src="/home/background_home.png"
            alt="Background Home Desktop"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>

        {/* Imagen de fondo para móviles */}
        <div className="sm:hidden">
          <Image
            src="/home/background_home_mobile.png"
            alt="Background Home Mobile"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>

        {/* Botón "Quiero saber más" */}
        <div className="absolute bottom-12 w-full flex justify-center">
          <button
            onClick={scrollToFirstSection}
            className="bg-beige_claro text-negro_ebano px-6 py-2 rounded-full text-lg shadow-md hover:bg-beige_oscuro transition duration-300"
          >
            Quiero saber más
          </button>
        </div>
      </section>

      {/* Sección siguiente, donde se desplazará el usuario */}
      <section ref={firstSectionRef} className="bg-negro_claro pt-24 sm:pt-4 pb-4 min-h-screen">
        {/* Contenedor de las imágenes con centrado vertical y horizontal */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 justify-center items-center space-y-4 sm:space-y-0">
          <div className="flex flex-col items-center sm:hidden relative">
            {/* Flecha izquierda */}
            <div
              onClick={goToPreviousImage}
              className="absolute left-[-35px] top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              <FaArrowLeft size={30} color="#E4D0B6" />
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
              <FaArrowRight size={30} color="#E4D0B6" />
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
            onClick={scrollToSecondSection}  // Cambié la acción para que redirija a la sección de agendar
            className="bg-beige_claro text-negro_ebano px-6 py-2 rounded-full text-lg shadow-md hover:bg-beige_oscuro transition duration-300"
          >
            Enterate como funciona
          </button>
        </div>
      </section>

      {/* Nueva Sección de Agendar cita */}
      <section ref={secondSectionRef} className="bg-negro_ebano py-4 min-h-screen flex sm:flex-row flex-col items-center justify-center px-6 sm:px-12">
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
          <h1 className="text-4xl font-semibold text-beige_claro mb-6 mt-4 sm:mt-0">Florencia García Valot</h1>
          <h2 className="text-2xl font-semibold text-beige_claro mb-4">Camuflaje de estrías cero tinta</h2>
          <p className="text-xl text-beige_oscuro mb-6">
            Transforma tus estrías sin necesidad de tintas con nuestro tratamiento exclusivo. Este innovador procedimiento reestructura y regenera la piel, logrando resultados permanentes del 70 al 90%, ¡notorios desde la primera sesión!
          </p>
          <button
            className="flex items-center justify-center bg-beige_claro text-negro_ebano px-4 py-2 rounded-full text-lg shadow-md hover:bg-beige_oscuro transition duration-300 sm:px-6 sm:py-3 w-full"
            onClick={scrollToThirdSection}
          >
            Quiero saber más
          </button>
        </div>
      </section>

      {/* Nueva sección intermedia */}
      <section ref={thirdSectionRef} className="bg-negro_claro text-beige_claro h-screen flex flex-col items-center justify-center px-6 sm:px-12">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">¿Cómo funciona?</h1>
          <p className="text-lg sm:text-xl mb-6 text-beige_oscuro">
            Estimulamos elastina y colágeno para suavizar la textura de las estrías y activamos la melanina para devolverles su color natural, unificando el tono de la piel sin recurrir a tintas.
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Beneficios:</h2>
          <ul className="list-disc list-inside text-lg sm:text-xl space-y-2 text-beige_oscuro">
            <li>Cambios permanentes sin necesidad de retoques.</li>
            <li>Piel más sana y renovada.</li>
            <li>Menos profundidad al tacto.</li>
            <li>Color más uniforme.</li>
            <li>¡Confianza y seguridad renovadas!</li>
          </ul>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Número de sesiones:</h2>
          <p className="text-lg sm:text-xl text-beige_oscuro">
            Entre 4 y 5 sesiones, cada 30/45 días para estrías blancas y cada 60 días para estrías rojas.
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={scrollToFourSection}
            className="bg-beige_claro text-negro_ebano px-6 py-2 rounded-full text-lg shadow-md hover:bg-beige_oscuro transition duration-300"
          >
            Agendar una cita
          </button>
        </div>
      </section>

      {/* Sección de contacto final */}
      <section ref={fourSectionRef} className="bg-negro_ebano text-beige_claro h-screen flex flex-col items-center justify-center px-6 sm:px-12">
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
      </section>

    </div>
  );
};

export default Home;
