
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
        

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
