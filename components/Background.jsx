import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import Hero from "../components/Hero";
import axios from "axios";

// Container host takes precedence, then env file host, then default
const HOST = process.env.HOST || process.env.NEXT_PUBLIC_CHOSEN_HOST;
console.log("HOST: ", HOST);

function Background() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [currentSkyColor, setCurrentSkyColor] = useState({});
  const vantaRef = useRef(null);

  // fetch sky colors
  useEffect(() => {
    async function updateSkyColor() {
      const skyColor = await getCurrentSkyColor();
      setCurrentSkyColor({ ...skyColor });
      // console.log("CURRENT SKY COLOR UPDATED STATE: ", skyColor);
    }

    // updateSkyColor();
    console.log(currentSkyColor);
  });

  // initialize and update vanta background
  useEffect(() => {
    if (vantaEffect && currentSkyColor) {
      vantaEffect.setOptions({ ...currentSkyColor });
      console.log("vanta effect colors updated");
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

    // return () => {
    //   if (vantaEffect) vantaEffect.destroy();
    // };
  }, [vantaEffect, currentSkyColor]);

  return (
    <section className="relative">
      {/* BACKGROUND CLOUDS - Z-1 */}
      <div
        className="absolute flex w-full h-screen overflow-x-hidden z-[1]"
        ref={vantaRef}
      ></div>

      {/* MASK - Z-2 */}
      <section className="absolute w-full h-screen overlay z-[2]"></section>

      {/* HERO - Z-3 */}
      <Hero />
    </section>
  );
}

export default Background;

/**
 * getCurrentSkyColor - gets current sky color for current date/time
 * @returns currentSkyColor: Object - sky colors for Vanta graphics config
 */
async function getCurrentSkyColor() {
  return (await axios.get(`${HOST}/api/clouds`)).data.currentSkyColors;
}
