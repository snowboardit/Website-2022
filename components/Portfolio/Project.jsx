import Reveal from "react-awesome-reveal";
import { revealFadeUp } from "../../Utils/CustomRevealAnimations";

function Project({ thumbnailPath, thumbnailAlt, title, description, tags }) {
  return (
    <Reveal keyframes={revealFadeUp}>
      <div className="relative min-w-[400px] max-w-lg my-8 mx-10 shadow-md">
        <div className="h-full px-4">
          <img
            src={thumbnailPath}
            alt={thumbnailAlt}
            className="-mb-48 rounded-xl drop-shadow-lg"
          />
        </div>
        <div className="pt-[24rem] rounded-3xl bg-dullBlue border-2 border-orange shadow-md">
          <div className="px-6 -mt-48">
            <h1 className="text-4xl font-semibold pt-8 pb-4">
              <span className="marker-underline-sm">{title}</span>
            </h1>
            <p className="text-xl">{description}</p>
          </div>
          <div className="flex space-x-2 mt-4 p-6">
            {tags.map((tag) => {
              return (
                <p className="inline-block py-2 px-4 bg-darkBlue hover:bg-lightBlue text-white hover:text-darkBlue drop-shadow-md rounded-2xl cursor-default transition-colors">
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default Project;
