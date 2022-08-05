import Reveal from "react-awesome-reveal";
import { revealFadeUp } from "../../utils/CustomRevealAnimations";

function Project({ project }) {
  return project.status !== "draft" ? (
    <Reveal keyframes={revealFadeUp}>
      <div className="relative min-w-[400px] max-w-lg my-8 mx-10 shadow-md">
        <div className="h-full px-4">
          <img
            src={project.thumbnail.url}
            alt={project.thumbnailAlt}
            className="-mb-48 rounded-xl drop-shadow-lg"
          />
        </div>
        <div className="pt-[24rem] rounded-3xl bg-dullBlue border-2 border-orange shadow-md">
          <div className="px-6 -mt-48">
            <h1 className="text-4xl font-semibold pt-8 pb-4">
              <span className="marker-underline-sm">{project.title}</span>
            </h1>
            <p className="text-xl">{project.description}</p>
          </div>
          <div className="flex flex-wrap space-x-2 mt-4 p-6">
            {project.tags.map((tag, i) => {
              return (
                <p
                  key={i}
                  className="inline-block border-2 border-darkBlueSemiTrans my-1 py-2 px-4 bg-dullBlue hover:bg-lightBlue text-darkBlue text-center drop-shadow-md rounded-2xl cursor-default transition-colors"
                >
                  {tag.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  ) : null;
}

export default Project;
