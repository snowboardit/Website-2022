import Lottie from "react-lottie-player";
import programmerLottie from "/public/lotties/programmer.json";

function TransitionSection() {
  return (
    <section className="relative flex justify-center items-center">
      <svg
        className="absolute fill-dullBlue h-full w-full -translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon points="0,0 100,0 100,15" />
      </svg>

      <div className="flex flex-col lg:flex-row justify-center items-center my-48 lg:my-24 mx-8 lg:mx-80 text-8xl text-orange">
        <div className="flex-1 lg:min-w-[600px] mb-16 lg:mb-0 text-5xl lg:text-6xl !leading-tight text-center lg:text-left">
          Here is what I have been working on...
        </div>
        <div className="flex-1 lg:order-none min-w-[300px] px-32 lg:p-0 ml-0 lg:ml-16">
          <Lottie animationData={programmerLottie} play />
        </div>
      </div>

      <svg
        className="absolute fill-darkBlue h-full w-full translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon points="0,85 100,100 0,100" />
      </svg>
    </section>
  );
}

export default TransitionSection;
