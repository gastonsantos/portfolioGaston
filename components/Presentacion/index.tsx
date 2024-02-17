import Link from "next/link";
import CirculosDeco from '@/components/CirculosDeco/CirculosDeco';
const Presentacion = () => {


  


  return (
    <>
      <section
        id="presentacion"
        className="bg-backgroud/[.03] relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Hola, Soy Gaston Santos
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                 Soy graduado de la Tecnicatura en Desarrollo Web en la UNLaM, estoy buscando la oportunidad de contribuir con mis habilidades. Poseo muchas ganas de seguir aprendiendo y me considero una persona autodidacta y muy proactiva. 
                 Sinceramente la remuneración no es mi principal motivación, en este momento estoy enfocado en adquirir experiencia y crecer profesionalmente. Sé que es importante pero no es algo en lo que esté enfocado actualmente.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    rel="noreferrer noopener"
                    target="_blank"
                    href="https://drive.google.com/file/d/1eXG24jchLH1gusqS9pWViFINsmMLgyhq/view?usp=sharing"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Mi CV
                  </Link>
                  <Link
                    href="https://github.com/gastonsantos"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    Mi GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
       <CirculosDeco/>
      </section>
    </>
  );
};

export default Presentacion;
