import { Reveal } from "react-awesome-reveal";
import { revealFadeUp } from "../../utils/CustomRevealAnimations";

function RightPanel() {
  return (
    <section className="flex flex-col mb-32 lg:mb-0 w-full max-w-2xl text-2xl xl:text-3xl leading-tight text-left text-darkBlue border-2 border-orange rounded-3xl p-8 bg-dullBlueSemiTrans shadow-md">
      <h1 className="text-5xl xl:text-7xl mb-12">
        Hi! I&apos;m <span className="marker-underline nowrap">Max</span>.
      </h1>
      <ul className="space-y-8">
        <Reveal
          keyframes={revealFadeUp}
          cascade
          triggerOnce
        >
          <li>
            I&apos;ve been exploring and tinkering with computers for more than{" "}
            <span className="marker-underline-md nowrap">fifteen years</span>.
          </li>
          <li>
            Full stack{" "}<span className="marker-underline-md nowrap">web development</span> is my passion.
          </li>
          <li>
            Recently, I have been developing <span className="marker-underline-md nowrap">Web3 applications</span> in the{" "}
            <a href="https://cosmos.network/" rel="noopener noreferrer" target="_blank">
              Cosmos
            </a>
            {" "}ecosystem
          </li>
          <li>
            When I&apos;m AFK I love to fly <a href="https://vimeo.com/167592762" rel="noopener noreferrer" target="_blank"><span className="marker-underline-md nowrap">gliders</span></a>.
          </li>
        </Reveal>
      </ul>
    </section>
  );
}

export default RightPanel;
