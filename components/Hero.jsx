import Image from "next/image";
import Link from "next/link";
import Icon from "../components/Icon";

function Hero() {
  return (
    <section className="flex flex-col gap-4 items-center justify-center h-screen z-2">
      <h1 className="text-6xl sm:text-8xl md:text-9xl drop-shadow-md text-[#555B6E]/75 whitespace-nowrap">
        Max Lareau
      </h1>

      <h3 className="text-[.8rem] -mt-2 sm:text-xl md:text-3xl drop-shadow-md text-[#555B6E]/75 whitespace-nowrap">
        Systems Engineer // Software Developer // Pilot
      </h3>

      <div className="flex flex-row gap-x-2 md:gap-x-4">
        <Icon
          linkTo={"https://github.com/snowboardit"}
          src={"/icons/icons8-github.svg"}
        />

        <Icon
          linkTo={"https://linkedin.com/in/maxlareau"}
          src={"/icons/icons8-linkedin.svg"}
        />
      </div>
    </section>
  );
}

export default Hero;
