import Head from 'next/head'

import Footer from '../components/Footer'
import Repositories from '../components/Repositories'

const description =
  'See the current top 100 starred repositories on Github.com with commits from the past 24 hours'

export const Home = (): JSX.Element => {
  return (
    <div className="container">
      <Head>
        <title>Gitstars</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={`${description}. Leverages the Github REST apis, next.js, and Vercel`}
        />
      </Head>

      <main>
        <h1>Gitstars</h1>
        <p>{description}</p>
        <Repositories />
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

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home
