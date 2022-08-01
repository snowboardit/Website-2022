import LogoCarousel from "./LogoCarousel";
import FilterBar from "./FilterBar";
import Project from "./Project";

const projectsList = [
  {
    thumbnailPath: "/images/max-website.png",
    thumbnailAlt: "max website thumbnail",
    title: "Website Refresh",
    description: `You are looking at it! With the goal of displaying my skills and
    portfolio at the same time, I brought this site to life from Figma
    design to code and deployment via Netlify.`,
    tags: ["ReactJS", "NextJS", "Tailwind CSS", "VantaJS"],
  },
  {
    thumbnailPath: "/images/max-website.png",
    thumbnailAlt: "max website thumbnail",
    title: "Website Refresh",
    description: `You are looking at it! With the goal of displaying my skills and
    portfolio at the same time, I brought this site to life from Figma
    design to code and deployment via Netlify.`,
    tags: ["ReactJS", "NextJS", "React-Reveal", "VantaJS"],
  },
  {
    thumbnailPath: "/images/max-website.png",
    thumbnailAlt: "max website thumbnail",
    title: "Website Refresh",
    description: `You are looking at it! With the goal of displaying my skills and
    portfolio at the same time, I brought this site to life from Figma
    design to code and deployment via Netlify.`,
    tags: ["ReactJS", "NextJS", "Tailwind CSS"],
  },
  {
    thumbnailPath: "/images/max-website.png",
    thumbnailAlt: "max website thumbnail",
    title: "Website Refresh",
    description: `You are looking at it! With the goal of displaying my skills and
    portfolio at the same time, I brought this site to life from Figma
    design to code and deployment via Netlify.`,
    tags: ["ReactJS", "NextJS", "Tailwind CSS", "GraphQL"],
  },
];

function Portfolio() {
  return (
    <section className="flex flex-col min-h-screen bg-darkBlue">
      {/* Filter Bar */}
      <FilterBar />

      {/* Projects */}
      {/* Container */}
      <div className="flex h-full flex-col 2xl:flex-row justify-center items-center 2xl:items-start mx-36 my-16 text-darkBlue">
        {/* Children */}
        {projectsList.map((project) => {
          return <Project {...project} />;
        })}
      </div>

      {/* Skills Logo Carousel */}
      <LogoCarousel />
    </section>
  );
}

export default Portfolio;
