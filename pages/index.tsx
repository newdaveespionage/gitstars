import Head from 'next/head'
import Link from 'next/link'

import useSWR from 'swr'

const fetcher = () =>
  fetch('/api/repos/starred', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((json) => json.data)

export const Home = (): JSX.Element => {
  const { data, error } = useSWR('starred_repos', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const { items } = data

  return (
    <div className="container">
      <Head>
        <title>Gitstars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <a href="">Gitstars</a>
        </h1>

        <div className="grid">
          {items.map((repo) => (
            <Link key={repo.id} href={`/repos/${repo.full_name}`}>
              <div className="card">
                <div>Name: {repo.name}</div>
                <div>Owner: {repo.owner.login}</div>
                <div>URL: {repo.html_url}</div>
                <div>Description: {repo.description}</div>
                <div>Stars: {repo.stargazers_count}</div>
              </div>
            </Link>
          ))}
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          ></a>
        </div>
      </main>

      <footer>
        <a
          href="https://www.daveespionage.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Dave Espionage
        </a>
      </footer>

      <style jsx>{``}</style>
    </div>
  )
}

export default Home
