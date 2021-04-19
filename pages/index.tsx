import Head from 'next/head'

import useSWR from 'swr'
import RespositoryCard from '../components/RepositoryCard'
import Footer from '../components/Footer'
import { repoFetcher } from '../utils/fetchers'
import { standardizeRepositories } from '../utils/repositories'

export const Home = (): JSX.Element => {
  const { data, error } = useSWR('starred_repos', repoFetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const repos = standardizeRepositories(data.items)

  return (
    <div className="container">
      <Head>
        <title>Gitstars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          <a href="">Gitstars</a>
        </h1>

        <div className="grid">
          {repos.map((repo) => (
            <RespositoryCard key={repo.id} {...repo} />
          ))}
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 90%;
          margin-top: 3rem;
        }
      `}</style>
    </div>
  )
}

export default Home
