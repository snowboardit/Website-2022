import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import CircuitBG from './CircuitBG';

function About() {

    return (
        <section className="flex h-auto min-h-screen lg:h-screen w-full justify-evenly items-center bg-maxLightGray">

            {/* LEFT PANEL */}
            <div className="relative flex h-full w-full lg:w-1/2 justify-center items-center border-r-[1px] border-black/20">

                <CircuitBG />

                <LeftPanel />

            </div>



            {/* RIGHT PANEL */}
            <div className="flex flex-col h-screen w-full lg:w-1/2 justify-center items-center mx-16">

                <RightPanel />

            </div>

        </section>
    );
}

export default About