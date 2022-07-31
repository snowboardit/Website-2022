import { Slide, Fade } from "react-awesome-reveal";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

function About() {
  return (
    <>
      <section
        id="about"
        className="flex flex-col lg:flex-row min-h-screen w-full justify-center items-center bg-circuitboard z-[1]"
      >
        {/* LEFT PANEL */}
        <div className="flex w-full grow min-h-screen justify-center items-center">
          <Slide duration={1500} triggerOnce direction="left">
            <Fade duration={1400} triggerOnce>
              <LeftPanel />
            </Fade>
          </Slide>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex justify-start items-center min-h-screen lg:h-screen w-full p-4">
          <Slide duration={1500} triggerOnce direction="up">
            <Fade duration={1400} triggerOnce>
              <RightPanel />
            </Fade>
          </Slide>
        </div>
      </section>
      <section className="w-full reverse-overlay z-[2]"></section>
    </>
  );
}

export default About;
