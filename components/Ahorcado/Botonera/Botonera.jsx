import React, { useState } from 'react';

const Botonera = ({ botones, sePulsoBoton }) => {
  const botonesPorFila = 7;

  const getBotonera = () => {
    const filas = [];

    for (let i = 0; i < botones.length; i += botonesPorFila) {
      const fila = botones.slice(i, i + botonesPorFila);
      const botonesEnFila = fila.map((boton, index) => (
        <button
          key={index + i}
          className={`focus:outline-none ${
            boton.estado === 'no-pulsado'
              ? 'rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80'
              : boton.estado === 'pulsado-acertado' || boton.estado === 'pulsado-no-acertado'
                ? 'rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30'
                : 'rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30'
          }`}
          disabled={boton.estado !== 'no-pulsado'}
          onClick={() => sePulsoBoton(i + index)}
        >
          {boton.letra}
        </button>
      ));

      filas.push(
        <div key={i} className="flex mb-4 justify-center">
          {botonesEnFila}
        </div>
      );
    }

    return filas;
  };

  return (
    <div id="botonera">
      {getBotonera()}
    </div>
  );
};

export default Botonera;
