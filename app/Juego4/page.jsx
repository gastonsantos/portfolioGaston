"use client"

import * as React from 'react';
import CirculosDeco from '../../components/CirculosDeco/circulosDeco';
import Ahorcado from "@/components/Ahorcado/Principal/Principal";
import ReglasJuego from '@/components/ReglasJuego';
import juegoData from "../../components/Juegos/juegoData";

const Juego4 = () => {
  const juego = juegoData[2];
  const reglas = juego.reglas;
    return (
      <section 
        id="memotest"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28">
          <ReglasJuego  reglas={reglas} />
          <Ahorcado />
          <CirculosDeco/>
      </section>
     
    );
}
export default Juego4;
