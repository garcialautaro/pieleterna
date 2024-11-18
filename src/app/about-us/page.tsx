"use client";
import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-negro_ebano text-beige_claro min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 pt-14">
      <div className="max-w-4xl text-center">
        {/* Título principal */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Florencia García Valot
        </h1>
        {/* Imagen de Florencia */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/about-us/florencia_garcia_valot.jpg"
            alt="Florencia García Valot"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
        {/* Descripción */}
        <p className="text-lg sm:text-xl mb-6 text-beige_oscuro">
          Soy <span className="font-bold text-beige_claro">Florencia García Valot</span>, una profesional apasionada y dedicada a mi trabajo.
          Me esfuerzo por ayudar a mis clientes a <span className="font-bold text-beige_claro">transformar su confianza</span> y autoestima
          a través de <span className="font-bold text-beige_claro">tratamientos innovadores</span>. Amo lo que hago, y eso se refleja en cada
          detalle, desde el primer contacto hasta los <span className="font-bold text-beige_claro">resultados finales</span>.
        </p>
        <p className="text-lg sm:text-xl mb-6 text-beige_oscuro">
          Creo firmemente en la importancia de <span className="font-bold text-beige_claro">brindar un servicio personalizado</span>,
          adaptado a las <span className="font-bold text-beige_claro">necesidades únicas</span> de cada persona. Mi enfoque combina un profundo
          <span className="font-bold text-beige_claro"> conocimiento técnico</span> con un <span className="font-bold text-beige_claro">toque humano</span>,
          asegurándome de que cada cliente se sienta <span className="font-bold text-beige_claro">escuchado</span>, valorado y cómodo durante todo el proceso.
        </p>
        <p className="text-lg sm:text-xl mb-8 font-semibold text-beige_oscuro">
          Mi compromiso no solo se enfoca en ofrecer <span className="font-bold text-beige_claro">resultados visibles</span>, sino también en
          proporcionar una experiencia que inspire <span className="font-bold text-beige_claro">confianza y tranquilidad</span>.
          Para mí, cada cliente representa una <span className="font-bold text-beige_claro">historia de éxito</span> y una oportunidad para
          marcar una <span className="font-bold text-beige_claro">diferencia positiva</span> en sus vidas.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
