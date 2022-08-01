import Lottie from "react-lottie-player";
import programmerLottie from "/public/lotties/programmer.json";
import TypeWriter from "typewriter-effect";

function TransitionSection() {
  return (
    <section className="relative">
      <svg
        className="absolute fill-dullBlue h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon points="0,0 100,0 100,15" />
      </svg>
      <div className="flex justify-center items-center my-24 px-36 text-8xl text-darkBlue leading-snug">
        <div className="grow-[2] pl-16 max-w-4xl">
          <TypeWriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(4000)
                .typeString("Here's what I've been working on...")
                .start();
            }}
          />
        </div>
        <div className="grid place-items-center grow">
          <Lottie
            animationData={programmerLottie}
            play
            style={{ width: "80%", height: "80%" }}
            className="max-w-lg"
          />
        </div>
        <svg
          className="absolute fill-darkBlue h-full w-full"
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
