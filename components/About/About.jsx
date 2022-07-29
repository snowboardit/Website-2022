import { Slide, Fade } from "react-awesome-reveal";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import CircuitBG from "./CircuitBG";

function About() {

  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row min-h-screen lg:h-screen w-full justify-center items-center bg-slate-300"
    >
      {/* LEFT PANEL */}
      <div className="flex w-full grow min-h-screen justify-center items-center border-b-[1px] lg:border-r-[1px] border-black/50">
        <CircuitBG>
          <Slide duration={1500} triggerOnce direction="left">
            <Fade duration={1400} triggerOnce>
              <LeftPanel />
            </Fade>
          </Slide>
        </CircuitBG>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex flex-col grow min-h-screen lg:h-screen w-full max-w-3xl justify-start lg:justify-center items-center px-4 mt-8 lg:mx-12 lg:mt-0">
        <Slide duration={1500} triggerOnce direction="up">
          <Fade duration={1400} triggerOnce>
            <RightPanel />
          </Fade>
        </Slide>
      </div>
    </section>
  );
}

export default About;
