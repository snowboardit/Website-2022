import {} from "react-awesome-reveal"
import Lottie from "react-lottie-player";
import planeLottie from "../public/lotties/plane-loader.json";

function Loader({ loading }) {
  return (
    <section
      className={`fixed top-0 w-full h-screen overflow-hidden flex justify-center items-center z-[100] transition-all ease-in-out animate-slideInLeft ${
        loading ? "opacity-90" : "translate-x-full duration-1000 opacity-0 pointer-events-none"
      }`}
    >
      <Lottie
        animationData={planeLottie}
        play
        speed={1.1}
        style={{ width: "100%", height: "100%" }}
        className="max-w-xl"
      />
    </section>
  );
}

export default Loader;
