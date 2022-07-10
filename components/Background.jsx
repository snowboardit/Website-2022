import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import Hero from "../components/Hero";
import Mask from "../components/Mask";
import axios from "axios";

// Container host takes precedence, then env file host, then default
const HOST = process.env.HOST || process.env.NEXT_PUBLIC_CHOSEN_HOST;
console.log("HOST: ", HOST);

function Background() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [currentSkyColor, setCurrentSkyColor] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    async function updateSkyColor() {
      const skyColor = await getCurrentSkyColor();
      setCurrentSkyColor(skyColor);
      console.log("CURRENT SKY COLOR UPDATED STATE: ", skyColor);
    }

    updateSkyColor();
  }, []);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          minHeight: 300.0,
          minWidth: 300.0,
          speed: 0.5,
          ...currentSkyColor,
          THREE,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section className="relative">
      <div
        className="absolute flex w-full h-screen drop-shadow-md z-[1]"
        ref={vantaRef}
      ></div>

      <Mask />

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
