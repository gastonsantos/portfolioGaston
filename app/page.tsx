
import Juegos from "@/components/Juegos";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Presentacion from "@/components/Presentacion";
import Proyectos  from "@/components/Proyectos";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Presentacion />
      <Skills />
      <Proyectos />
      <Juegos />
      <Contact />
    </>
  );
}
