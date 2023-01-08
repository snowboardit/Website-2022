import React from 'react';
import Reveal from 'react-awesome-reveal';
import { Element } from 'react-scroll';
import {
	revealFadeLeft,
	revealFadeUp,
} from '../../utils/CustomRevealAnimations';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

function About() {
	return (
		<>
			<Element
				name="about"
				className="flex flex-col lg:flex-row min-h-screen w-full justify-center items-center z-[1] pt-20 lg:pt-14"
			>
				{/* LEFT PANEL */}
				<div className="flex items-center justify-center w-full lg:py-16 grow xl:min-h-screen xl:py-0">
					<Reveal triggerOnce keyframes={revealFadeLeft}>
						<LeftPanel />
					</Reveal>
				</div>

				{/* RIGHT PANEL */}
				<div className="flex items-center justify-center w-full px-4 lg:p-4 xl:justify-start lg:h-screen">
					<Reveal triggerOnce keyframes={revealFadeUp}>
						<RightPanel />
					</Reveal>
				</div>
			</Element>
			<section className="w-full reverse-overlay z-[2]"></section>
		</>
	);
}

export default About;
