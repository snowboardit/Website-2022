// import Link from "next/link";
import Icon from "../components/Icon";
import { Slide } from "react-awesome-reveal";
import { revealFadeLeft } from "../utils/CustomRevealAnimations";


function Hero() {

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 flex p-4 justify-center w-full text-darkBlue z-[4]">
        <div className="flex justify-between items-center w-[48rem]">
          <a href="/" className="hover:text-darkBlueSemiTrans transition-colors duration-150">
            <h1 className="font-medium text-4xl">ML</h1>
          </a>

          <div className="space-x-8">
            <a href="#about" className="text-2xl hover:text-darkBlueSemiTrans transition-colors duration-150">
              About
            </a>
            <a href="#portfolio" className="text-2xl hover:text-darkBlueSemiTrans transition-colors duration-150">
              Portfolio
            </a>
          </div>
        </div>
      </nav>

      {/* Name, subtitle, and socials */}
      <div className="relative flex flex-col items-center justify-center w-full h-screen z-[3] leading-tight">
        <Slide keyframes={revealFadeLeft} triggerOnce delay={2800}>
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-clamp-xl drop-shadow-md text-darkBlueSemiTrans">
              Max Lareau
            </h1>

            <Slide keyframes={revealFadeLeft} delay={3400} triggerOnce className="inline">
              <h3 className="text-clamp-lg drop-shadow-md text-darkBlueSemiTrans">
                <span className="text-orange">{" // "}</span>
                <span>Full Stack &amp; Web3 Developer</span>
                <span className="text-orange">{" // "}</span>
              </h3>
            </Slide>
          </div>
        </Slide>

        <Slide keyframes={revealFadeLeft} triggerOnce delay={4000}>
          <div className="flex justify-center items-center mt-8 space-x-2 md:space-x-4">
            <Icon
              linkTo={"https://github.com/cosmwatch"}
              src={"/icons/icons8-github.svg"}
              title={"Web3 Github"}
              width={48}
              height={48}
            />
            
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
        </Slide>
      </div>
    </>
  );
}

export default Hero;
