import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Juego } from "@/types/juego";

const ReglasJuego = ({reglas}) => {
  const [visible, setVisible] = useState(false);
  const reglas1 = reglas;
  const mostrarReglas = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button
        className={`absolute top-4 left-4 z-50 rounded-md bg-black/20 py-1 px-4 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30 flex items-center justify-center ${visible ? 'translate-y--0' : ''} ${window.innerWidth < 768 ? 'translate-y-0' : ''}`}
        onClick={mostrarReglas}
      >
        {visible ? "Ocultar reglas" : "Mostrar reglas"}
      </button>

      {visible && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className={`relative z-40 p-4 m-4 bg-black shadow-lg rounded-lg overflow-hidden ${window.innerWidth < 768 ? 'max-w-full' : ''}`} // Adjust width for smaller screens
        >
          <div className="rounded-md flex-col py-1 px-4 text-base font-semibold duration-300 ease-in-out bg-white/20 hover:bg-white/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30">
            <h1 className="text-white dark:text-white">Objetivo:</h1>
            <p className="text-white dark:text-white">
              {reglas1}
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ReglasJuego;
