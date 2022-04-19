import Image from 'next/image'

function CircuitBG({ children }) {
    return (

        <div className="h-full w-full bg-circuit-pattern object-center object-cover pointer-events-none bg-opacity-20">
            {children}
        </div>

    );
}

export default CircuitBG;