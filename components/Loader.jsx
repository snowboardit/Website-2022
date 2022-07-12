import Lottie from "react-lottie-player";
import planeLottie from "../public/lotties/plane2.json";

function Loader({ loading }) {
  return (
    <section
      className={`fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-white transition-all ease-out duration-1000 z-[100] ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Lottie
        animationData={planeLottie}
        loop
        play
        style={{ width: "100%", height: "100%" }}
        className="sm:max-w-3xl"
      />
    </section>
  );
}

export default Loader;
