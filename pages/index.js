import { useState, useEffect } from 'react'
import Background from '../components/Background'
import About from '../components/About/About'
import Portfolio from '../components/Portfolio/Portfolio'
import Loader from '../components/Loader'

export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => { setLoading(false) });

  if (!loading) {

    return (

      <main className="snap-mandatory snap-y flex flex-col overflow-x-clip w-full h-auto">

        <Background />

        <About />

        <Portfolio />

      </main>

    )
  }

  return <Loader loading={loading} />

}
