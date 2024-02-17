import SingleProyecto from "./SingleProyecto";
import ProyectoData from "./proyectosData";
import SectionTitle from "../Common/SectionTitle";

const Proyectos = () => {
  return (
    <>
    <section
      id="proyectos"
      className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
    >
      <div className="container">
      
      <SectionTitle
          title="Mis Proyectos."
          paragraph="Estos son algunos de mis proyectos realizados, la mayoria son proyectos universitarios."
          center
        />
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {ProyectoData.map((proyecto) => (
            <SingleProyecto key={proyecto.id} proyectos={proyecto} />
          ))}
        </div>
      </div>
    </section>
  </>
  );
};

export default Proyectos;
