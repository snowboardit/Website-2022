import Reveal from "react-awesome-reveal";
import {
  revealFadeLeft,
  revealFadeUp,
} from "../../utils/CustomRevealAnimations";
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
          <Reveal keyframes={revealFadeLeft}>
            <LeftPanel />
          </Reveal>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex justify-start items-center min-h-screen lg:h-screen w-full p-4">
          <Reveal keyframes={revealFadeUp}>
            <RightPanel />
          </Reveal>
        </div>
      </section>
      <section className="w-full reverse-overlay z-[2]"></section>
    </>
  );
}

export default About;
