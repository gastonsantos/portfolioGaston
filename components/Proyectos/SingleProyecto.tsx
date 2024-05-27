import { Proyectos } from "@/types/proyectos";
import Image from "next/image";
const SingleProyecto = ({ proyectos }: { proyectos: Proyectos }) => {
  const { id, nombre, descripcion, imagen, path} = proyectos;
  return (

    <div
      className="wow fadeInUp relative overflow-hidden rounded-md bg-primary/[3%] shadow-one dark:bg-primary/10"
      data-wow-delay=".1s"
      >
      <a href={path}>
       <img
          className="rounded-t-lg object-cover w-full h-48"
          src={imagen}
          alt="" 
          
          />
       
      </a>
      <div className="p-6">
        <h5
          className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {nombre}
        </h5>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
         {descripcion}
        </p>
        <a href={path} 
        rel="noreferrer noopener"
        target="_blank"
        className="flex items-center justify-center">
        <button
          type="button"
          className="rounded-md bg-primary m-4 py-2 px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
          data-te-ripple-init
          data-te-ripple-color="light">
          ver Aplicación
        </button>
        </a>
      </div>
    </div>
  );
};

export default SingleProyecto;
