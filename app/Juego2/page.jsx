"use client"
import { useEffect, useState , useRef} from 'react';
import * as React from 'react';
import Sudoku from '@/components/Sudoku'
import CirculosDeco from '../../components/CirculosDeco/circulosDeco';
import ReglasJuego from '@/components/ReglasJuego';
import juegoData from "../../components/Juegos/juegoData";

const Juego2 = () => {
  const juego = juegoData[1];
  const reglas = juego.reglas;
    return (
<section 
        id="sudoku"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28">
        <div className="container">
        <ReglasJuego  reglas={reglas} />
        <Sudoku/>

      </div>

        <CirculosDeco/>
</section>
    );
}
export default Juego2;
