import Reveal from "react-awesome-reveal";
import { revealFadeUp } from "../../utils/CustomRevealAnimations";

function RightPanel() {
  return (
    <section className="flex flex-col w-full max-w-2xl p-8 mb-32 text-2xl leading-tight text-left border-2 shadow-md text-darkBlue lg:mb-0 border-orange rounded-3xl bg-whiteTrans">
      <h1 className="mb-8 text-4xl xl:text-5xl">
        Hi! I&apos;m <span className="marker-underline">Max</span> 👋
      </h1>
      

      <div className="space-y-4">
        <Reveal
          cascade
          keyframes={revealFadeUp}
        >
          <p>
            I am a web developer with a background in IT infrastructure and audio/video engineering.
          </p>
          <p>
            What began as completing <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">Colt Steele's Web Developer Bootcamp</a> quickly snowballed into a full-time profession and hobby for me.
          </p>
          <p>
            Through my autodidact nature and guidance from the community, I have 3 years of combined full stack web development experience and more.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default RightPanel;
