// import Link from "next/link";
import Icon from "../components/Icon";
import SVG from "react-inlinesvg";
import { Fade, Zoom } from "react-awesome-reveal";

function Hero() {
  const timeOfDay = "day";

  function iconSelector(timeOfDay) {
    switch (timeOfDay) {
      case "day":
        return "/icons/sun-svgrepo-com.svg";
      case "dawn":
        return "/icons/sunrise-svgrepo-com.svg";
      case "dusk":
        return "/icons/sunset-svgrepo-com.svg";
      case "night":
        return "/icons/moon-svgrepo-com.svg";
    }
  }

  return (
    <>
      {/* Time of day: dawn | day | dusk | night */}
      <div className="absolute top-0 left-0 w-full h-16 flex justify-center items-center text-center align-middle text-darkBlueSemiTrans z-[3]">
        <SVG
          src={iconSelector(timeOfDay)}
          title={timeOfDay}
          className="w-8 h-8 fill-darkBlueSemiTrans"
        />
      </div>

      {/* Name, subtitle, and socials */}
      <div className="relative flex flex-col items-center justify-center w-full h-screen z-[3] leading-tight">
        <Fade triggerOnce delay={2800}>
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-clamp-xl drop-shadow-md text-darkBlueSemiTrans">
              Max Lareau
            </h1>

            <h3 className="text-clamp-lg drop-shadow-md text-darkBlueSemiTrans">
              <Zoom delay={3400} triggerOnce cascade className="inline">
                <span>Systems Engineer</span>
                <span className="text-orange">{" // "}</span>
                <span>Software Developer</span>
                <span className="text-orange">{" // "}</span>
                <span>Pilot</span>
              </Zoom>
            </h3>
          </div>
        </Fade>

        <Fade triggerOnce delay={5800}>
          <div className="flex justify-center items-center mt-8 space-x-2 md:space-x-4">
            <Icon
              linkTo={"https://github.com/snowboardit"}
              src={"/icons/icons8-github.svg"}
              title={"Github"}
            />

            <Icon
              linkTo={"https://linkedin.com/in/maxlareau"}
              src={"/icons/icons8-linkedin.svg"}
              title={"LinkedIn"}
            />
          </div>
        </Fade>
      </div>
    </>
  );
}

export default Hero;
