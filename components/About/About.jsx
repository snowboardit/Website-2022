import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import CircuitBG from "./CircuitBG";

function About() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen lg:h-screen w-full justify-center items-center bg-maxLightGray">
      {/* LEFT PANEL */}
      <div className="flex w-full grow-[2] min-h-screen justify-center items-center border-b-[1px] lg:border-r-[1px] border-black/50">
        <CircuitBG>
          <LeftPanel />
        </CircuitBG>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex flex-col grow min-h-screen lg:h-screen w-full max-w-3xl justify-start lg:justify-center items-center px-4 mt-8 lg:mx-24 lg:mt-0">
        <RightPanel />
      </div>
    </section>
  );
}

export default About;
