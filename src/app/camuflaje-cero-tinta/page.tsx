"use client";
import React from "react";
import Image from "next/image";

interface ImageData {
  src: string;
  alt: string;
}

const CamuflajeCeroTinta: React.FC = () => {
  // Lista de imágenes proporcionadas
  const images: ImageData[] = [
    { src: "/home/img_home_2.png", alt: "Imagen 2" },
    { src: "/home/img_home_1.png", alt: "Imagen 1" },
    { src: "/home/img_home_3.png", alt: "Imagen 3" },
  ];

  return (
    <div className="bg-negro_ebano text-beige_claro px-6 py-12 sm:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Título principal */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
          Camuflaje de Estrías Cero Tinta
        </h1>
        {/* Descripción inicial */}
        <p className="text-lg sm:text-xl mb-6 text-center text-beige_oscuro">
          Transforma tus estrías sin necesidad de tintas con nuestro tratamiento exclusivo:{" "}
          <span className="font-semibold text-beige_claro">Camuflaje de Estrías Cero Tinta</span>.
        </p>
        <p className="text-lg sm:text-xl mb-12 text-center text-beige_oscuro">
          Este innovador procedimiento reestructura y regenera la piel, logrando{" "}
          <span className="font-semibold text-beige_claro">resultados permanentes del 70 al 90%</span>, obteniendo
          resultados notorios desde la primera sesión. 🤲
        </p>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {images.map((image, index) => (
            <div key={index} className="relative min-h-96">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Sección de texto explicativo */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Cómo funciona:</h2>
            <p className="text-lg sm:text-xl text-beige_oscuro">
              Estimulamos elastina y colágeno para suavizar la textura de las estrías y activamos la
              melanina para devolverles su color natural, unificando el tono de la piel sin recurrir
              a tintas.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Beneficios:</h2>
            <ul className="list-disc list-inside space-y-2 text-lg sm:text-xl text-beige_oscuro">
              <li>✨ Cambios permanentes sin necesidad de retoques.</li>
              <li>✨ Piel más sana y renovada.</li>
              <li>✨ Menos profundidad al tacto.</li>
              <li>✨ Color más uniforme.</li>
              <li>✨ ¡Confianza y seguridad renovadas! 🤗</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Número de sesiones:</h2>
            <p className="text-lg sm:text-xl text-beige_oscuro">
              Entre 4 y 5 sesiones, cada 30/45 días para estrías blancas y cada 60 días para
              estrías rojas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamuflajeCeroTinta;
