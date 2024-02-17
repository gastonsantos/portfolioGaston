import React, { useState, useEffect } from 'react';
import Imagen from '../Imagen/Imagen';
import Botonera from '../Botonera/Botonera';
import PalabraAdivinadaHastaElMomento from '../PalabraAdivinadaHastaElMomento/PalabraAdivinadaHastaElMomento';
import ModalGano from "../Modal/gano";
import ModalPerdio from "../Modal/perdio";

const getPalabraAdivinadaHastaElMomento = (palabra) => {
  let guiones = "";
  for (let i = 0; i < palabra.length; i++) {
    guiones += "-";
  }
  return guiones;
};
// hay un error en el cual las palabras repiten letra que no la da como acertada, por el numero de letras que faltaria
const getPalabraAAdivinar = () => {
  const palabras = ["ANGULAR", "REACT", "NODE", "JAVA", "JAVASCRIPT", "NET", "PHP"];
  const numAleatorio = Math.floor(Math.random() * palabras.length);
  return palabras[numAleatorio];
};



const getBotoneraVacia = () => {
  const letras = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "Ñ", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"
  ];

  const botones = letras.map((l) => ({ letra: l, estado: "no-pulsado" }));

  return botones;
};

const Principal = () => {
  const [numFallos, setNumFallos] = useState(0);
  const [numAciertos, setNumAciertos] = useState(0);
  const [palabraAAdivinar, setPalabraAAdivinar] = useState(getPalabraAAdivinar());
  const [palabraAdivinadaHastaElMomento, setPalabraAdivinadaHastaElMomento] = useState(getPalabraAdivinadaHastaElMomento(palabraAAdivinar));
  const [botones, setBotones] = useState(getBotoneraVacia());
  const [showModalGano, setShowModalGano] = useState(false);
  const [showModalPerdio, setShowModalPerdio] = useState(false);
  const [numLetrasPalabra, setNumLetrasPalabra] = useState(0);

  useEffect(() => {
    if (numAciertos === letrasNoRepetidas()) {
      setShowModalGano(true);
      

    } else if (numFallos === 6) {
      setShowModalPerdio(true);
      
    }
  }, [numAciertos, numFallos, palabraAAdivinar]);

  const letrasNoRepetidas = () => {
    let letrasContadas = {};
    let cantidad = 0;
    for (let i = 0; i < palabraAAdivinar.length; i++) {
      const letra = palabraAAdivinar.charAt(i);
      if (!letrasContadas.hasOwnProperty(letra)) {
        letrasContadas[letra] = 1;
        cantidad++;
      }
    }
    return cantidad;
  };

  const sePulsoBoton = (i) => {
    const letra = botones[i].letra;
    const botonesAux = [...botones];

    if (hayAcierto(letra)) {
      botonesAux[i].estado = "pulsado-acertado";
      setBotones(botonesAux);
      setNumAciertos((prevNumAciertos) => prevNumAciertos + 1);
    } else {
      botonesAux[i].estado = "pulsado-no-acertado";
      setBotones(botonesAux);
      setNumFallos((prevNumFallos) => prevNumFallos + 1);
    }
  };

  const reinicilizar = () => {
    const nuevaPalabra = getPalabraAAdivinar();
    setPalabraAAdivinar(nuevaPalabra);
    setPalabraAdivinadaHastaElMomento(getPalabraAdivinadaHastaElMomento(nuevaPalabra));
    setNumFallos(0);
    setNumAciertos(0);
    setBotones(getBotoneraVacia());
  };


 


  

  const hayAcierto = (letra) => {
    let acierto = false;
    for (let i = 0; i < palabraAAdivinar.length; i++) {
      if (palabraAAdivinar.charAt(i) === letra) {
        setPalabraAdivinadaHastaElMomento((prevPalabra) =>
          prevPalabra.substr(0, i) + letra + prevPalabra.substr(i + 1)
        );
        acierto = true;
      }
    }
    return acierto;
  };

  return (
    <div>
      <h2 className='mx-auto text-center text-3xl mt-4'>Ahorcado</h2>
      <Imagen numFallos={numFallos} />
      
      <PalabraAdivinadaHastaElMomento PalabraAdivinadaHastaElMomento={palabraAdivinadaHastaElMomento} />
      {showModalGano && <ModalGano onClose={() => setShowModalGano(false)} palabra={palabraAAdivinar} reiniciarJuego={reinicilizar}/>}
      {showModalPerdio && <ModalPerdio onClose={() => setShowModalPerdio(false)} palabra={palabraAAdivinar} reiniciarJuego={reinicilizar} />}
      <Botonera sePulsoBoton={(i) => sePulsoBoton(i)} botones={botones} />
    </div>
  );
};

export default Principal;