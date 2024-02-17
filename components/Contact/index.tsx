"use client"
import Redes from "./Redes";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Exito from '../Mensajes/exito';
import Error from '../Mensajes/error';
import {KEY, SID, TID} from "@/config/constants"
import {sendEmail} from "../../servicios/email"
const Contact = () => {

  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [showModalError, setShowModalError] = useState(false);

  
  const sendEmail1 = async (e) => {
    e.preventDefault(); // lo que hace el preventDefault es evitar que se recargue la pagina ya que por defecto con la etiqueta Form es recargar la pagina cuando se envia el formulario.
  
    const success = await sendEmail(form.current);
  
    if (success) {
      setShowModal(true); 
    } else {
      setShowModalError(true); 
    }
  };
  return (
    <section id="contacto" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-primary/10 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contacto
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Me va a llegar un mail, lo voy a responder a la brevedad!!
              </p>
              <form ref={form} onSubmit={sendEmail1}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Nombre"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Emai"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Mensaje
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Dejame tu mensaje..."
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button  type="submit" value="Send" className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
              {showModal && <Exito onClose={() => setShowModal(false)} />}
              {showModalError && <Error onClose={() => setShowModalError(false)} />}
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <Redes />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
