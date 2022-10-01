import Link from "next/link";
import Reveal from "react-awesome-reveal";
import SVG from "react-inlinesvg";
import Icon from "../Icon";
import { revealFadeUp } from "../../utils/CustomRevealAnimations";

function Project({ project }) {
  return project.status ? (
    <Reveal keyframes={revealFadeUp}>
      <div className="relative min-w-[400px] max-w-lg my-8 mx-10">
        <div className="relative h-full px-4">
          {/* TODO - IMPLEMENT GIF ON IMG HOVER - PREVIEW OF PROJECT/SITE */}
          <a href={project.projectLink}>
            <img
              src={project.thumbnailUrl}
              alt={project.thumbnailAlt}
              className="-mb-48 rounded-xl drop-shadow-lg hover:scale-105 transition-transform"
            />
          </a>
        </div>
        <div className="pt-[24rem] rounded-3xl bg-dullBlue border-2 border-orange shadow-md">
          <div className="px-6 -mt-48">
            <h1 className="text-4xl font-semibold pt-8 pb-4">
              <span className="marker-underline-sm">{project.title}</span>
            </h1>
            {/* Link container */}
            <div className="flex items-center mt-2 mb-4 space-x-4">
              {/* Github Link*/}
              <Icon
                title={"Github repo"}
                linkTo={project.githubLink}
                src={"/icons/icons8-github.svg"}
                width={40}
                height={40}
              />

              {/* Project Link */}
              <Icon
                title={"Project link"}
                linkTo={project.projectLink}
                src={"/icons/iconmonstr-link.svg"}
                width={30}
                height={30}
              />
            </div>

            <p className="text-xl">{project.description}</p>
          </div>
          <div className="flex flex-wrap p-6">
            {project.tags && project.tags.map((tag, i) => {
              return (
                <p
                  key={i}
                  className="inline-block border-2 border-darkBlueSemiTrans my-1 mx-1 py-2 px-4 bg-dullBlue hover:bg-lightBlue text-darkBlue text-center drop-shadow-md rounded-2xl cursor-default transition-colors ease-in-out"
                >
                  {tag.toString()}
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
