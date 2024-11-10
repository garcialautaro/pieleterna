import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-beige_claro text-beige_oscuro p-4">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-center">
          <strong> &copy; {new Date().getFullYear()} Piel Eterna. Todos los derechos reservados.</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
