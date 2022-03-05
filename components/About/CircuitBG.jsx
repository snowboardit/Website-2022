import Image from 'next/image'

function CircuitBG() {
    return (

        <div className="absolute h-full w-full m-0">
            <Image
                className="object-center object-cover pointer-events-none opacity-20"
                src={"/images/circuit-board.svg"}
                layout={"fill"}
            />
        </div>

    );
}

export default CircuitBG;