import Link from "next/link";
import Reveal from "react-awesome-reveal";
import SVG from "react-inlinesvg";
import { revealFadeUp } from "../../utils/CustomRevealAnimations";

function Project({ project }) {
  return project.status !== "draft" ? (
    <Reveal keyframes={revealFadeUp}>
      <div className="relative min-w-[400px] max-w-lg my-8 mx-10 shadow-md">
        <div className="relative h-full px-4">
          {/* TODO - IMPLEMENT GIF ON IMG HOVER - PREVIEW OF PROJECT/SITE */}
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
            {/* Link container */}
            <div className="flex items-center mt-2 mb-4 space-x-4">
              {/* Github Link*/}
              <Link href={project.githubLink}>
                <a>
                  <SVG
                    src="/icons/icons8-github.svg"
                    alt="github logo"
                    width={36}
                    height={36}
                    className="fill-darkBlue hover:fill-lightBlue transition-colors"
                  />
                </a>
              </Link>

              {/* Project Link */}
              <Link href={project.projectLink}>
                <a>
                  <SVG
                    src="/icons/iconmonstr-link.svg"
                    alt="link image"
                    width={24}
                    height={24}
                    className="fill-darkBlue hover:fill-lightBlue transition-colors"
                  />
                </a>
              </Link>
            </div>

            <p className="text-xl">{project.description}</p>
          </div>
          <div className="flex flex-wrap p-6">
            {project.tags.map((tag, i) => {
              return (
                <p
                  key={i}
                  className="inline-block border-2 border-darkBlueSemiTrans my-1 mx-1 py-2 px-4 bg-dullBlue hover:bg-lightBlue text-darkBlue text-center drop-shadow-md rounded-2xl cursor-default transition-colors"
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
