import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import CircuitBG from "./CircuitBG";

function About() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen lg:h-screen w-full justify-evenly items-center bg-maxLightGray">
      {/* LEFT PANEL */}
      <div className="flex h-full w-full lg:w-1/2 justify-center items-center border-r-[1px] border-black/20">
        <CircuitBG>
          <LeftPanel />
        </CircuitBG>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex flex-col min-h-[70vh] w-full lg:w-1/2 justify-start lg:justify-center items-center mx-16 mt-8 lg:mt-0">
        <RightPanel />
      </div>
    </section>
  );
}

export default About;
