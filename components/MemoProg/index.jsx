"use client"
import { useEffect, useState , useRef} from 'react';
import Board from "@/components/Board/Board";
import Ganador from '../../components/Ganador';
import Perdedor from '../../components/Perdedor';
import * as React from 'react';



const emojuList1= [
  "/images/memo/c.png",
  "/images/memo/css.png",
  "/images/memo/java.png",
  "/images/memo/mysql.png",
  "/images/memo/node_js.png",
  "/images/memo/php.png",
  "/images/memo/react.png",
  "/images/memo/typescript.png"
];


const MemoProg = () => {
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  // Se guarda cual es el bloque seleccionado
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  // para que el usuario no haga click en mas bloques
  const [animating, setAnimating] = useState(false);

  const[contador, setContador] = useState(0);
  const [memo, setMemo] = useState([]);

  const [shouldReset, setShouldReset] = useState(false); // creo un estado en el cual va a reiniciar el juego

  useEffect(() => {
    // Llama a reiniciarJuego al montar el componente para iniciar el juego automáticamente.
    reiniciarJuego();
  }, []);
  useEffect(() => {
    if (shouldReset) {
      const shuffledEmojiList = shuffleArray([...emojuList1, ...emojuList1]);
      setShuffledMemoBlocks(
        shuffledEmojiList.map((emoji, i) => ({ index: i, emoji, flipped: false }))
      );
      setselectedMemoBlock(null);
      setAnimating(false);
      setContador(0);
      setMemo([]); // Reinicia también el estado de "aciertos"
      setShouldReset(false); // Desactiva la bandera de reinicio
    }
  }, [shouldReset]);
  

  const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const handleMemoClick = (memoBlock) => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
    shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlocks(shuffledMemoBlocksCopy);
    if (selectedMemoBlock === null) {
      setselectedMemoBlock(memoBlock);
    } else if (selectedMemoBlock.emoji === memoBlock.emoji) {
      setselectedMemoBlock(null);
      setMemo([...memo, "a"]);
      console.log(shuffledMemoBlocksCopy);
    } else {
      setAnimating(true);
      setTimeout(() => {
        setContador(contador + 1);
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
        shuffledMemoBlocksCopy.splice(
          selectedMemoBlock.index,
          1,
          selectedMemoBlock,
          
      
        );
        setShuffledMemoBlocks(shuffledMemoBlocksCopy);
        setselectedMemoBlock(null);
        setAnimating(false);
        
      }, 1000);
    }
    
  };

//esta es la funcioan en la cual va a reiniciar el juego
  const reiniciarJuego = () => {
    setShouldReset(true); // Activa la bandera de reinicio
  };
  
  // console.log(memo);

  return (
    <section>
      
      <div className="container">
      

      <div>
       <h2 className='mx-auto text-center text-3xl'>MemoProg</h2>
       <h3 className='mx-auto text-center text-2xl'>Fallos: {contador}</h3>
       

        <Board
          memoBlocks={shuffledMemoBlocks}
          animating={animating}
          handleMemoClick={handleMemoClick}
        /> 
    </div>

      {contador >= 15 ? (
        <div className="container">
           <Perdedor reiniciarJuego={reiniciarJuego}/>
        </div>
      ) : ( 
        <div> 
          {memo.length===8 ?(
             <div className="container">
             <Ganador reiniciarJuego={reiniciarJuego} intentos={contador}/>
              </div>
          ):(
            <div className="container">
          
            </div>
          )}
         
        </div>
      )}
    </div>
    <div className="flex justify-center items-center">
  <button className="mx-auto text-center text-3xl rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30" onClick={reiniciarJuego}>
    Reiniciar
  </button>
</div>




    
    </section>
  );
};




export default MemoProg;
