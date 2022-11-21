import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import Hero from "../components/Hero";

// Container host takes precedence, then env file host, then default
const HOST = process.env.HOST || process.env.NEXT_PUBLIC_CHOSEN_HOST;
console.log("HOST: ", HOST);

function Background() {
    const [vantaEffect, setVantaEffect] = useState(0);
    const [currentSkyColor, setCurrentSkyColor] = useState({});
    const [scrollOpacity, setScrollOpacity] = useState(0);
    const vantaRef = useRef(null);

    // Scroll listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    // Scroll handler 
    const handleScroll = () => {
        if (window.scrollY <= window.innerHeight) {
            const opacityValue = window.scrollY / 80
            setScrollOpacity(opacityValue);
        }
        console.log(scrollOpacity);
    }

    // fetch sky colors and time of day
    // useEffect(() => {
    //     async function updateSkyState() {
    //         const {currentSkyColor, timeOfDay} = await getCurrentSkyState();
    //         setCurrentSkyColor({ ...currentSkyColor });
    //         setTimeOfDay(timeOfDay);
    //         console.log("CURRENT SKY STATE UPDATED: ", currentSkyColor, timeOfDay);
    //     }

    //     updateSkyState();
    // }, []);

    // initialize and update vanta background
    useEffect(() => {
        if (vantaEffect && currentSkyColor) {
            // vantaEffect.setOptions({ ...currentSkyColor });
            // console.log("vanta effect colors updated");
        } else {
            setVantaEffect(
                CLOUDS({
                    el: vantaRef.current,
                    minHeight: 300.0,
                    minWidth: 300.0,
                    speed: 0.5,
                    THREE,
                })
            );
            console.log("init vanta effect");
        }
    }, [vantaEffect, currentSkyColor]);

    return (
        <section className="relative">
            {/* BACKGROUND CLOUDS - Z-1 */}
            <div
                className="fixed flex w-full h-screen overflow-x-hidden z-[-2]"
                ref={vantaRef}
            ></div>

            {/* MASK - Z-2 */}
            <section style={{ backdropFilter: `blur(${scrollOpacity}px)` }} className={`fixed w-full h-screen z-[-1] overlay`}></section>

            {/* HERO - Z-3 */}
            <Hero />
        </section>
    );
}

export default Background;

/**
 * getCurrentSkyState - gets current sky color for current date/time
 * @returns currentSkyColor: Object - sky colors for Vanta graphics config
 */
// async function getCurrentSkyState() {
//     const { data: { currentSkyColor, timeOfDay } } = await axios.get(`${HOST}/api/clouds`);
//     return { currentSkyColor, timeOfDay };
// }
