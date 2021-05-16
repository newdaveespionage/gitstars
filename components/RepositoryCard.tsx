import React, { useState } from 'react'
import { colors, button, link } from '../theme'
import { Repository } from '../utils/repositories/types'
import Commits from './Commits'
import Link from 'next/link'
import RespositoryCardDetails from './RepositoryCardDetails'

const RespositoryCard = ({
  name,
  owner,
  url,
  stars,
  description,
}: Repository): JSX.Element => {
  const [showCommits, setShowCommits] = useState<boolean>(false)

  return (
    <div className="card" title={`${name}: ${description}`}>
      <h3 className="title">{name}</h3>
      <p className="description">{description}</p>
      <RespositoryCardDetails owner={owner} url={url} stars={stars} />
      <button
        onClick={() => {
          setShowCommits(!showCommits)
        }}
      >
        {showCommits ? 'Hide' : 'Show'} Commits from the last 24 hours
      </button>
      {showCommits && (
        <>
          <Commits owner={owner} name={name} />
          <br />
          <Link href={`commits/${owner}/${name}`}>
            <a>View in new page</a>
          </Link>
        </>
      )}
      <style jsx>{`
        .card {
          flex-basis: 30%;
          margin: 1rem;
          padding: 1rem;
          text-align: left;
          color: inherit;
          border: 1px solid ${colors.border};
          transition: color 0.15s ease, border-color 0.15s ease;
          align-self: flex-start;
          min-width: 300px;
          max-width: 800px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: ${colors.default};
          border-color: ${colors.blue100};
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.2rem;
          height: 2rem;
          max-width: 400px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 1rem 0;
        }
      `}</style>
      <style jsx>{button}</style>
      <style jsx>{link}</style>
    </div>
  )
}

export default RespositoryCard
