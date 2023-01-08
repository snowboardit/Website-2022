// import Link from "next/link";
import Icon from '../Icon/Icon';
import Navbar from '../Navbar/Navbar';
import usePageLocation from '../../hooks/usePageLocation';
import { revealFadeUp } from '../../utils/CustomRevealAnimations';
import { Slide } from 'react-awesome-reveal';

function Hero() {
	const { atPageTop } = usePageLocation();

	return (
		<>
			{/* Navbar */}
			<Navbar atPageTop={atPageTop} />

			{/* Name, subtitle, and socials */}
			<div className="relative flex flex-col items-center justify-center w-full h-screen z-[3] leading-tight">
				<Slide keyframes={revealFadeUp} triggerOnce delay={300}>
					<div className="flex flex-col items-center justify-center text-center">
						<h1 className="text-clamp-xl drop-shadow-md text-darkBlueSemiTrans">
							Max Lareau
						</h1>

						<h3 className="text-clamp-lg drop-shadow-md text-darkBlueSemiTrans">
							Full Stack Web Developer
						</h3>
					</div>
				</Slide>

				<Slide keyframes={revealFadeUp} triggerOnce delay={600}>
					<div className="flex items-center justify-center mt-8 space-x-2 md:space-x-4">
						<Icon
							linkTo={'https://github.com/cosmwatch'}
							src={'/icons/icons8-github.svg'}
							title={'Web3 Github'}
							width={42}
							height={42}
						/>

						<Icon
							linkTo={'https://github.com/snowboardit'}
							src={'/icons/icons8-github.svg'}
							title={'Github'}
							width={42}
							height={42}
						/>

						<Icon
							linkTo={'https://linkedin.com/in/maxlareau'}
							src={'/icons/icons8-linkedin.svg'}
							title={'LinkedIn'}
							width={42}
							height={42}
						/>
					</div>
				</Slide>
			</div>
		</>
	);
}

export default Hero;
