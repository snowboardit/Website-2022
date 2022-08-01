import Lottie from "react-lottie-player";
import programmerLottie from "/public/lotties/programmer.json";
import TypeWriter from "typewriter-effect";

function TransitionSection() {
  return (
    <section className="relative">
      <svg
        className="absolute fill-dullBlue h-full w-full -translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon points="0,0 100,0 100,15" />
      </svg>
      <div className="flex justify-center items-center my-24 mx-80 text-8xl text-orange leading-snug">
        <div className="flex-1">
          <TypeWriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(4000)
                .typeString("Here's what I've been working on...")
                .start();
            }}
          />
        </div>
        <div className="flex-1 ml-16">
          <Lottie
            animationData={programmerLottie}
            play
            style={{ width: "75%", height: "75%" }}
          />
        </div>
        <svg
          className="absolute fill-darkBlue h-full w-full translate-y-[1px]"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon points="0,85 100,100 0,100" />
        </svg>
      </div>
    </section>
  );
}

export default TransitionSection;
