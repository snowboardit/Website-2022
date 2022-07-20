import { useParallax } from "react-scroll-parallax";
import { Slide } from "react-awesome-reveal";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import CircuitBG from "./CircuitBG";

function About() {
  const { ref } = useParallax({
    speed: -10,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="flex flex-col lg:flex-row min-h-screen lg:h-screen w-full justify-center items-center bg-maxLightGray"
    >
      {/* LEFT PANEL */}
      <div className="flex w-full grow min-h-screen justify-center items-center border-b-[1px] lg:border-r-[1px] border-black/50">
        <CircuitBG>
          <Slide duration={1500} direction="left">
            <LeftPanel />
          </Slide>
        </CircuitBG>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex flex-col grow min-h-screen lg:h-screen w-full max-w-3xl justify-start lg:justify-center items-center px-4 mt-8 lg:mx-12 lg:mt-0">
        <Slide duration={1500} direction="right">
          <RightPanel />
        </Slide>
      </div>
    </section>
  );
}

export default About;
