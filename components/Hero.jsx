import Icon from "../components/Icon";
import SVG from "react-inlinesvg";

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
      <div className="absolute top-0 left-0 w-full h-16 flex justify-center items-center text-center align-middle text-maxDarkGray/75 z-[3]">
        <SVG
          src={iconSelector(timeOfDay)}
          className="w-8 h-8 fill-maxDarkGray/90"
        />
      </div>

      <div className="relative flex flex-col items-center justify-center w-full h-screen z-[3]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl sm:text-8xl md:text-9xl drop-shadow-md text-[#555B6E]/75">
            Max Lareau
          </h1>

          <h3 className="text-sm mt-2 sm:text-xl md:text-3xl drop-shadow-md text-[#555B6E]/75">
            Systems Engineer // Software Developer // Pilot
          </h3>
        </div>

        <div className="flex justify-center items-center mt-4 md:mt-8 space-x-2 md:space-x-4">
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
      </div>
    </>
  );
}

export default Hero;
