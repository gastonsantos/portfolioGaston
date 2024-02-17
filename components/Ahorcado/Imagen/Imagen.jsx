import React from 'react';

const Imagen = ({ numFallos }) => {
  const getNombreImagen = () => {
    return `/images/ahorcado/${numFallos}.png`;
  };

  return (
    <div className="flex flex-col justify-center">
      <img
        src={getNombreImagen()}
        alt="Ahorcado"
        className="w-full max-w-md sm:max-w-sm md:max-w-lg lg:max-w-xl mx-auto"
      />
    </div>
  );
};

export default Imagen;
