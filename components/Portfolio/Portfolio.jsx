import LogoCarousel from "./LogoCarousel";
import FilterBar from "./FilterBar";
import Project from "./Project";

function Portfolio({ projects }) {
  console.log("projects", projects);

  return (
    <section className="flex flex-col min-h-screen bg-darkBlue">
      {/* Filter Bar */}
      <FilterBar projects={projects} />

      {/* Projects Container */}
      <div className="flex h-full flex-col 2xl:flex-row justify-center items-center 2xl:items-start mx-36 my-16 text-darkBlue">
        {/* Projects */}
        {projects.map((project, i) => {
          return <Project project={project} key={i} />;
        })}
      </div>

      {/* Skills Logo Carousel */}
      <LogoCarousel />
    </section>
  );
}

export default Portfolio;
