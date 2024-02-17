"use client"
import * as React from 'react';
import CirculosDeco from '../../components/CirculosDeco/circulosDeco';
import MemoProg from '../../components/MemoProg';
import juegoData from "../../components/Juegos/juegoData";
import ReglasJuego from '@/components/ReglasJuego';
const Juego3 = () => {
  const juego = juegoData[0];
  const reglas = juego.reglas;
  
    return (
      <section 
        id="memotest"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28">
            <ReglasJuego reglas={reglas} />
            <MemoProg/>
            <CirculosDeco/>
      </section>
     
    );
}
export default Juego3;
