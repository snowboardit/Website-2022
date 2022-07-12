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
        style={{ width: "50%", height: "50%" }}
      />
    </section>
  );
}

export default Loader;
