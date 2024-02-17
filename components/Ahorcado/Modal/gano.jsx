"use client"
import React, { useState, useRef, useEffect } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Gano = ({onClose, palabra,reiniciarJuego }) => {
  //creo la funcion en la cual voy a reiniciar el juego y cerrar el modal
  const handleReiniciar = () => {
    reiniciarJuego();
  };

    return (
        <div >
            <div>
            <Modal
             
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
              backdrop: {
              timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/12 rounded-md bg-black/20 m-2 py-2 px-2 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/90 dark:text-black/90">
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <h2 className="mx-auto text-center">Ganaste!!! La palabra era: {palabra} </h2>
            </Typography>
            <Typography id="transition-modal-description" className="flex justify-center items-center">
            <button
              onClick={()=>{
                onClose();
                handleReiniciar(); 
              }} 
              
              type="button"
              class="rounded-md bg-black/20 py-1 px-4 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-gray/10 dark:text-black/80 dark:hover:bg-gray/30 flex items-center justify-center">
              Cerrar
            </button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
            </div>
        </div>
    );
}

export default Gano;