import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero'
import Mask from '../components/Mask'
import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'

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
        <>
            <section className='w-screen h-screen absolute' ref={vantaRef}>
                <section className='w-screen h-screen absolute bg-slate-200/30 z-1'></section>
                <Hero />
            </section>
        </>
    )
}

export default Background;