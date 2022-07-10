import { useState, useEffect } from 'react'
import Background from '../components/Background'
import About from '../components/About/About'
import Portfolio from '../components/Portfolio/Portfolio'
import Loader from '../components/Loader'

export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => { setLoading(false) });

  return loading
    ? (<Loader loading={loading} />)
    : (
      <main className="flex flex-col overflow-x-hidden w-full h-auto">

        <Background />

        <About />

        {/* <Portfolio /> */}

      </main>
    )
}
