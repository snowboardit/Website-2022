// import Link from "next/link";
import Icon from "../components/Icon";
import SVG from "react-inlinesvg";
import { Fade, Slide } from "react-awesome-reveal";
import { revealFadeLeft } from "../utils/CustomRevealAnimations";

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
            <Slide keyframes={revealFadeLeft} triggerOnce delay={3000}>
              <h1 className="text-clamp-xl drop-shadow-md text-darkBlueSemiTrans">
                Max Lareau
              </h1>
            </Slide>

            <h3 className="text-clamp-lg drop-shadow-md text-darkBlueSemiTrans">
              <Slide keyframes={revealFadeLeft} triggerOnce delay={3400} >
                <Fade triggerOnce delay={3200} className="inline">
                  <span className="text-orange">{" // "}</span>
                  <span>Full Stack Web3 Developer</span>
                  <span className="text-orange">{" // "}</span>
                </Fade>
              </Slide>
            </h3>
          </div>
        </Fade>

        <Fade triggerOnce delay={4800}>
          <div className="flex justify-center items-center mt-8 space-x-2 md:space-x-4">
            <Icon
              linkTo={"https://github.com/snowboardit"}
              src={"/icons/icons8-github.svg"}
              title={"Github"}
              width={48}
              height={48}
            />

            <Icon
              linkTo={"https://linkedin.com/in/maxlareau"}
              src={"/icons/icons8-linkedin.svg"}
              title={"LinkedIn"}
              width={48}
              height={48}
            />
          </div>
        </Fade>
      </div>
    </>
  );
}

export default Hero;
