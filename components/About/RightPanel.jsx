import Reveal from 'react-awesome-reveal';
import { revealFadeUp } from '../../utils/CustomRevealAnimations';

function RightPanel() {
	return (
		<section className="flex flex-col max-w-[500px] p-8 mb-32 text-base leading-tight text-left border-2 shadow-md md:max-w-2xl md:text-2xl text-darkBlue lg:mb-0 border-orange rounded-b-3xl xs:rounded-3xl bg-whiteTrans">
			<h1 className="mb-4 text-3xl md:mb-8 md:text-4xl xl:text-5xl">
				Hi! I&apos;m <span className="marker-underline">Max</span> 👋
			</h1>

			<div className="space-y-2 md:space-y-4">
				<Reveal cascade triggerOnce keyframes={revealFadeUp}>
					<p>
						As a full stack web developer with an eclectic
						background in IT and audio/video engineering, I bring a
						unique perspective to my work.
					</p>
					<p>
						With over three years of experience in software
						development, I am dedicated to creating intuitive and
						powerful web applications that solve real-world
						problems.
					</p>
					<p>
						I am committed to delivering high-quality work and
						providing exceptional service to my clients.
					</p>
					<p>
						From concept to creation, I'm ready to help you bring
						your next project to life. Let's chat!
					</p>
				</Reveal>
			</div>
		</section>
	);
}

export default RightPanel;
