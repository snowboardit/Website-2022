import Image from "next/image";
import TypedText from "./TypedText";

function About() {
    return (
        <section className="flex bg-[#555B6E]">
            {/* LEFT PANEL */}
            <div className="flex basis-1/2 h-screen justify-end lg:justify-end items-center">
                <Image alt='max portrait' className='rounded-3xl opacity-90' src='/images/me.png' width={525} height={710} />
                <div className="drop-shadow-md">
                </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="flex flex-col basis-1/2 h-screen justify-center items-center lg:items-start">
                {/* Main Container */}
                <div className="flex flex-col gap-6 h-2/5 max-w-3xl md:px-32 ">

                    <h1 className="text-7xl text-gray-100 drop-shadow-sm">
                        Max Lareau
                    </h1>

                    <div className="flex gap-2 drop-shadow-sm bg-gray-800 w-fit p-2 rounded-md border-2 border-black">
                        <TypedText />
                    </div>

                    <div className="text-xl text-gray-300 drop-shadow-sm">
                        I am a <strong>passion-driven</strong>, self-taught software engineer with a background in IT. Web development and I began a serious relationship back in 2019, when I took Colt Steele{"'"}s Web Development Boot Camp on Udemy. Previously, I tinkered with Swift and Python to solve creative problems in and outside of the workplace.
                    </div>

                    <div className="max-w-md">
                        <h3 className="text-3xl text-gray-100 mb-4">Skills:</h3>

                        <ol className="grid grid-cols-2 gap-2 h-12 text-xl text-gray-300">
                            <li>• Microsoft 365</li>
                            <li>• Windows Server</li>
                            <li>• {'Windows & Azure AD'}</li>
                            <li>• {'AWS & Azure Clouds'}</li>
                            <li>• PowerShell</li>
                            <li>• Python</li>
                            <li>• {'React & Next.js'}</li>
                            <li>• {'Node & Express.js'}</li>
                        </ol>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About