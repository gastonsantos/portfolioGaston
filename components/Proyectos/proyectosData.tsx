import { Proyectos } from "@/types/proyectos";

const proyectoData: Proyectos[] = [
  {
    id: 1,
    nombre: "Garage",
    descripcion:
      "Proyecto realizado en grupo para la materia Taller web de la Unlam. El proyecto esta hecho en Java con MVC con el Framework Spring y el ORM Hibernate con unit test en jUnit.",
    imagen: "/images/proyecto/Garage1.jpg",
    path: "https://github.com/gastonsantos/taller-web",
  },
  {
    id: 2,
    nombre: "El Romano",
    descripcion:
      "Aplicación web para la materia Taller Web 2 para la Universidad de La Matanza. Para este proyecto grupal el Front-End fue hecho con Angular, para el Back-End fue Node-JS.",
    imagen: "/images/proyecto/ElRomano.jpg",
    path: "https://github.com/Lenh22/TP-TALLER-2-LIBROS",
  },
  {
    id: 3,
    nombre: "Gaucho Rocket",
    descripcion:
      "Aplicacion realizada para la materia Programacion web 2, creada en PHP con validación de email con phpmailer, dompdf y mustache. Es una empresa de ventas de viajes espaciales.",
    imagen: "/images/proyecto/guachoRocket.jpg",
    path: "https://github.com/gastonsantos/PHP-MVC",
  },
  {
    id: 4,
    nombre: "Home Inmobiliaria",
    descripcion:
      "Página informativa de una Inmobiliaria, realizada integramente en .NET con MVC, se utilizó el ORM MongoFramework para la interacción con la base de datos.",
    imagen: "/images/proyecto/TuCasa.jpg",
    path: "https://github.com/gastonsantos/PruebaCosmosDb",
  },
  {
    id: 5,
    nombre: "Tickeadora Garage",
    descripcion:
      "Aplicación de escritorio realizada  en .NET con WinForms y Base de datos SQLite con Entity Framework. Totalmente portable con modificación de tarífas e impresión de Tickets. ",
    imagen: "/images/proyecto/Tickeadora.jpg",
    path: "https://github.com/gastonsantos/ProyectoGarage",
  },
  {
    id: 6,
    nombre: "Taleweave",
    descripcion:
      "Aplicación realizada en grupo como proyecto de final de carrera, el Backend se realizó con .NET y el Front se hizo con Next js con base de datos SQL server y  Servicios de Azure ",
    imagen: "/images/proyecto/Taleweave.jpg",
    path: "https://github.com/osceck123/front-tpi",
  },
  {
    id: 7,
    nombre: "Sports Squad",
    descripcion:
      "Aplicación realizada con .Net (Api rest) para el Backend y el Front se hizo con Next js (React), con base de datos Sql Server, JWT, SqlDependency.",
    imagen: "/images/proyecto/SportSquad.jpg",
    path: "https://deportes-front.vercel.app",
  },

];
export default proyectoData;
