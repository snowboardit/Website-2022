import { useState, useEffect } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import Background from '../components/Background'
import About from '../components/About/About'
import TransitionSection from '../components/TransitionSection/TransitionSection'
import Portfolio from '../components/Portfolio/Portfolio'
import Loader from '../components/Loader'
import QUERY_PROJECTS from '../graphql/queryProjects'

const SERVER_URL = process.env.NEXT_PUBLIC_CHOSEN_SERVER || "";

console.log("next public chosen server: ", SERVER_URL);

const client = new ApolloClient({
  uri: `${SERVER_URL}/api/graphql`,
  cache: new InMemoryCache(),
});

export default function Home({ projects }) {

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

        <Portfolio projects={projects} />

      </main>
    </>

  )
}

export async function getStaticProps() {

  const { data } = await client.query({
    query: gql`
      query {
        projects {
            status
            title
            description
            thumbnail {
                url
            }
            thumbnailAlt
            tags {
                name
            }
        }
      }`
  });


  return {
    props: {
      projects: data.projects,
    },
  };
}
