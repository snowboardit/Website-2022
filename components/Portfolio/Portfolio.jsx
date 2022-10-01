// import { useState, useEffect } from "react";
import LogoCarousel from "./LogoCarousel";
// import FilterBar from "./FilterBar";
import Project from "./Project";

function Portfolio({ projects }) {
  // const [tags, setTags] = useState([]);

  // Load all tags into state on startup from projects array
  // useEffect(() => {
  //   if (tags.length === 0) {
  //     let tagsCache = [];

  //     projects.map((project) => {
  //       project.tags.map((tag) => {
  //         if (!tagsCache.includes(tag.name)) {
  //           setTags((oldTags) => [
  //             ...oldTags,
  //             { name: tag.name, selected: false },
  //           ]);
  //         }
  //         tagsCache.push(tag.name);
  //       });
  //     });
  //   }
  // }, []);

  return (
    <section className="flex flex-col min-h-screen bg-darkBlue">
      {/* Filter Bar */}
      {/* <FilterBar tags={tags} setTags={setTags} /> */}

      {/* Title Bar */}
      <div className="relative flex justify-center text-lightBlue text-6xl xl:text-8xl mt-16 mb-8">
        <span>Portfolio</span>
        <img alt="radial gradient accent" src="/images/LightBlueGradient.png" className="absolute -translate-y-1/3 opacity-40"></img>
      </div>

      {/* Projects Container */}
      <div className="flex h-full flex-col 2xl:flex-row justify-center items-center 2xl:items-start mx-36 my-16 text-darkBlue">
        {/* Projects */}
        {/* {console.log("PROJECTS:\n", projects)} */}
        {projects.map((project, i) => {
          // if (project.tags)
          return <Project project={project} key={i} />;
        })}
      </div>

      {/* Skills Logo Carousel */}
      <LogoCarousel />
    </section>
  );
}

export default Portfolio;
