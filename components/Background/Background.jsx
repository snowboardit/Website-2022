import React, { useState, useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import Hero from '../Hero/Hero';

function Background() {
	const [scrollOpacity, setScrollOpacity] = useState(0);
	const [vantaEffect, setVantaEffect] = useState(null);
	const vantaRef = useRef(null);

	// Scroll listener
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	// Scroll handler
	const handleScroll = () => {
		if (window.scrollY <= window.innerHeight) {
			const opacityValue = window.scrollY / 80;
			setScrollOpacity(opacityValue);
		}
		console.log(scrollOpacity);
	};

	// initialize vanta background
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				CLOUDS({
					el: vantaRef.current,
					minHeight: 300.0,
					minWidth: 300.0,
					speed: 0.5,
					mouseControls: false,
					THREE,
				})
			);
			console.log('Initialize vanta background', { vantaEffect });
		}

		return () => {};
	}, [vantaEffect]);

	return (
		<Element name="hero" className="relative">
			{/* BACKGROUND CLOUDS - Z-1 */}
			<div
				className="fixed flex w-full h-screen overflow-x-hidden z-[-2]"
				ref={vantaRef}
			></div>

			{/* MASK - Z-2 */}
			<section
				style={{ backdropFilter: `blur(${scrollOpacity}px)` }}
				className={`fixed w-full h-screen z-[-1] overlay`}
			></section>

			{/* HERO - Z-3 */}
			<Hero />
		</Element>
	);
}

export default Background;
