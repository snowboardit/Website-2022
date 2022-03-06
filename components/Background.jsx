import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import Hero from '../components/Hero'
import Mask from '../components/Mask'


function Background() {

    const [vantaEffect, setVantaEffect] = useState(0)
    const vantaRef = useRef(null)

    useEffect(() => {

        if (!vantaEffect) {

            setVantaEffect(CLOUDS({
                el: vantaRef.current,
                minHeight: 300.00,
                minWidth: 300.00,
                speed: 0.50,
                THREE
            }))

        }

        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }

    }, [vantaEffect])

    return (

        <section className='snap-center flex w-full h-screen drop-shadow-md' ref={vantaRef}>

            <Mask />

            <Hero />

        </section>

    )

}

export default Background;