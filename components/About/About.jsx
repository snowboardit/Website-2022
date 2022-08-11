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
        <div className="flex w-full grow xl:min-h-screen py-16 xl:py-0 justify-center items-center">
          <Reveal triggerOnce keyframes={revealFadeLeft}>
            <LeftPanel />
          </Reveal>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex justify-center xl:justify-start items-center lg:h-screen w-full p-4">
          <Reveal triggerOnce keyframes={revealFadeUp}>
            <RightPanel />
          </Reveal>
        </div>
      </section>
      <section className="w-full reverse-overlay z-[2]"></section>
    </>
  );
}

export default About;
