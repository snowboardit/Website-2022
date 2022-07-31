import { useState, useEffect } from 'react'
import Background from '../components/Background'
import About from '../components/About/About'
import TransitionSection from '../components/TransitionSection/TransitionSection'
// import Portfolio from '../components/Portfolio/Portfolio'
import Loader from '../components/Loader'

export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  });

  return (
    <>
      <Loader loading={loading} />

      <main className={`flex flex-col w-full ${loading && "pointer-events-none overflow-hidden h-screen"}`}>

        <Background />

        <About />

        <TransitionSection />

        {/* <Portfolio /> */}

      </main>
    </>

  )
}
