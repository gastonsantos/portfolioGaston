"use client"
import React, { useState, useRef, useEffect } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Exito = ({onClose}) => {
  //creo la funcion en la cual voy a reiniciar el juego y cerrar el modal
  const handleReiniciar = () => {
    
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
          <Box className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/12 rounded-md bg-success/80 m-2 py-2 px-2 text-base font-semibold text-black duration-300 ease-in-out hover:bg-success/80 dark:bg-success/80 dark:text-black dark:hover:bg-success/100">
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <h2 className="mx-auto text-center">Mensaje enviado.</h2>
            </Typography>
            <Typography id="transition-modal-description" className="flex justify-center items-center">
            <button
              onClick={onClose}
              type="button"
              class="rounded-md bg-green/20 py-1 px-4 text-base font-semibold text-black duration-300 ease-in-out hover:bg-green/80 dark:bg-green/20 dark:text-black dark:hover:bg-white/30 flex items-center justify-center">
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

export default Exito;