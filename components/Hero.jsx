import Icon from "../components/Icon";

function Hero() {
  return (
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
        />

        <Icon
          linkTo={"https://linkedin.com/in/maxlareau"}
          src={"/icons/icons8-linkedin.svg"}
        />
      </div>
    </div>
  );
}

export default Hero;
