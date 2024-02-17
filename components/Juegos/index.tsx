import SectionTitle from "../Common/SectionTitle";
import SingleJuego from "./SingleJuego";
import juegoData from "./juegoData";

const Juegos = () => {
  return (
    <section id="juegos" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Juguemos un rato!!"
          paragraph="Tanto trabajar es agotador siempre es bueno tomar un descanso y entretenerse!!!"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {juegoData.map((juego) => (
            <div key={juego.id} className="w-full">
              <SingleJuego juego={juego} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Juegos;
