import { useState, useEffect } from 'react'
import Background from '../components/Background'
import About from '../components/About'
import Loader from '../components/Loader'

export default function Home() {

  const [loading, setLoading] = useState(true)
  const [time, setTime] = useState()

  useEffect(() => { setLoading(false) });

  if (!loading) {

    return (

      <main className="flex flex-col overflow-x-clip w-full h-auto">

        <Background />

        <About />

      </main>

    )
  }

  return <Loader loading={loading} />

}
