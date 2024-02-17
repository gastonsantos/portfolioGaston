import { Juego } from "@/types/juego";

const juegoData: Juego[] = [
  {
    id: 1,
    title: "MemoProg",
    paragraph:
      "En este juego tendras que usar la memoria, dar vuelta las fichas y encontrar la otra ficha igual. Si encuentras todas las parejas de fichas en menos de 15 intentos seras el ganador, si no lo vuelves a intentar.",
    image: "/images/juego/memoProg.jpg",
    tags: ["Memoria"],
    publishDate: "2025",
    path: "/Juego3",
    reglas: "Deberás encontrar todas las parejas de fichas en menor numero de intentos, como mazimo tienes 15 intentos. Si lo logras ganaras."

  },
  {
    id: 2,
    title: "Sudoku",
    paragraph:
      "Sudoku es un juego matemático que se inventó a finales de la década de 1970, adquirió popularidad en Japón en la década de 1980, y se dio a conocer en el ámbito internacional en 2005.",
    image: "/images/juego/sudoku.jpg",
    tags: ["Pensar"],
    publishDate: "2025",
    path: "/Juego2",
    reglas: "Sudoku se juega en una cuadrícula de 9 x 9 espacios. Dentro de las filas y columnas hay 9 cuadrados (compuestos de 3 x 3 espacios). Cada fila, columna y cuadrado (9 espacios cada uno) debe completarse con los números del 1 al 9, sin repetir ningún número dentro de la fila, columna o cuadrado."
  },
  {
    id: 3,
    title: "Ahorcado",
    paragraph:
      "El ahorcado (también llamado colgado) es un juego para dos o más jugadores. Deberas adivinar la palabra según lo que sugiere por letras o dentro de un cierto número de oportunidades.",
    image: "/images/juego/ahorcado.jpg",
    tags: ["Adivinar"],
    publishDate: "2025",
    path: "/Juego4",
    reglas: "Adivinar la palabra antes de 6 intentos, si el dibujo se completa pierdes."
   
    
  },
];
export default juegoData;
