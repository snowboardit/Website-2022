import { RingLoader } from "react-spinners";

function Loader({ loading }) {

    const color = "#adc1de"
    const speedMultiplier = 0.8

    return (
        <section className="flex w-screen h-screen justify-center items-center bg-white">
            <RingLoader loading={loading} color={color} speedMultiplier={speedMultiplier} />
        </section>
    );
}

export default Loader;