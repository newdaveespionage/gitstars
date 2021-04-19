import React from 'react'
import { colors } from '../theme'
import { Repository } from '../utils/repositories/types'
import Commits from './Commits'
import Image from 'next/image'

const RespositoryCard = ({
  name,
  owner,
  url,
  stars,
  description,
}: Repository): JSX.Element => (
  <div className="card" title={`${name}: ${description}`}>
    <h3 className="title">{name}</h3>
    <p className="description">{description}</p>
    <div className="details">
      <p>Owned by {owner}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
      <div className="star-container">
        <Image
          src="/icons/star.svg"
          height={18}
          width={20}
          alt="star icon"
          className="star-icon"
        />
        <span className="star-count" title="total stars">
          {stars}
        </span>
      </div>
    </div>
    <Commits owner={owner} name={name} />
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
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: ${colors.default};
        border-color: ${colors.blue100};
      }

      .details {
        margin-top: 1.5rem;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card a {
        color: ${colors.blue600};
        text-decoration: none;
      }

      .card a:hover,
      .card a:focus,
      .card a:active {
        text-decoration: underline;
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

      .star-container {
        margin: 1rem 0;
      }

      .star-icon {
        vertical-align: middle;
      }

      .star-count {
        font-size: 1.2rem;
      }
    `}</style>
  </div>
)

export default RespositoryCard
