import { useState, useEffect } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import Background from '../components/Background'
import About from '../components/About/About'
import TransitionSection from '../components/TransitionSection/TransitionSection'
import Portfolio from '../components/Portfolio/Portfolio'
import Loader from '../components/Loader'

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
    }, 25)
    // }, 2500)
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

  // const { data } = await client.query({
  //   query: gql`
  //     query {
  //       projects {
  //           status
  //           title
  //           description
  //           thumbnail {
  //               url
  //           }
  //           thumbnailAlt
  //           githubLink
  //           projectLink
  //           tags {
  //               name
  //           }
  //       }
  //     }`
  // });

  // console.log("data\n", data);


  const fakeProjects = [
    {
      "status": "published",
      "title": "Spark IBC Website",
      "description": "Carried the site from design to production. Decentralized donation platform, used to promote decentralization and education throughout blockchains built with the Cosmos SDK.",
      "thumbnail": {
        "url": "/images/Spark-IBC-Website.png"
      },
      "thumbnailAlt": "spark IBC website thumbnail",
      "githubLink": "https://github.com/sparkibc",
      "projectLink": "https://sparkibc.zone",
      "tags": [
        {
          "name": "TailwindCSS"
        },
        {
          "name": "ReactJS"
        },
        {
          "name": "NextJS"
        },
        {
          "name": "TypeScript"
        },
        {
          "name": "CosmJS"
        }
      ]
    },
    {
      "status": "published",
      "title": "Personal Website/Portfolio",
      "description": "My refreshed website for 2022.",
      "thumbnail": {
        "url": "/images/max-website.png"
      },
      "thumbnailAlt": "maxlareau.com website thumbnail",
      "githubLink": "https://github.com/snowboardit/",
      "projectLink": "https://maxlareau.com/",
      "tags": [
        {
          "name": "TailwindCSS"
        },
        {
          "name": "ReactJS"
        },
        {
          "name": "NextJS"
        },
        {
          "name": "ThreeJS"
        },
        {
          "name": "VantaJS"
        },
        {
          "name": "Postgres"
        },
        {
          "name": "ThreeJS"
        },
        {
          "name": "VantaJS"
        },
        {
          "name": "Postgres"
        },

      ]
    },
  ]


  return {
    props: {
      // projects: data.projects,
      projects: fakeProjects,
    },
  };
}
