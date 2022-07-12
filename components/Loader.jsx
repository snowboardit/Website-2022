import Lottie from "react-lottie-player";
import planeLottie from "../public/lotties/2d-airplane.json";

function Loader({ loading }) {
  return (
    <section
      className={`fixed top-0 w-full h-screen overflow-hidden flex justify-center items-center skyGradientBackground transition-opacity ease-out duration-1000 z-[100] ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Lottie
        animationData={planeLottie}
        play
        speed={1.25}
        style={{ width: "75%", height: "75%" }}
        className="max-w-xl"
      />
    </section>
  );
}

export default Loader;
