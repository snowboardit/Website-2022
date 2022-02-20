import Image from "next/image";
import Link from "next/link"

function Hero() {
    return (
        <section className="flex flex-col gap-4 items-center justify-center h-screen z-2">

            <h1 className="text-9xl drop-shadow-md text-[#555B6E]/75">
                Max Lareau
            </h1>

            <h3 className="text-3xl drop-shadow-md text-[#555B6E]/75">
                Systems Engineer // Software Developer // Pilot
            </h3>

            <div className="flex gap-3">
                <Link href={'https://github.com/snowboardit'}>
                    <a>
                        <Image className="drop-shadow-sm" src='/icons/icons8-github.svg' height={32} width={32} />
                    </a>
                </Link>

                <Link href={'https://linkedin.com/in/maxlareau'}>
                    <a>
                        <Image className="drop-shadow-sm" src='/icons/icons8-linkedin.svg' height={32} width={32} />
                    </a>
                </Link>
            </div>

        </section>
    );
}

export default Hero;