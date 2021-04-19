import React from 'react'
import { colors } from '../theme'
import { Repository } from '../utils/repositories/types'
import Commits from './Commits'

const RespositoryCard = ({
  name,
  owner,
  url,
  stars,
  description,
}: Repository): JSX.Element => (
  <div className="card">
    <h3 className="title">{name}</h3>
    <p className="description">{description}</p>
    <div className="details">
      <p>Owner: {owner}</p>
      <p>URL: {url}</p>
      <p>Stars: {stars}</p>
    </div>
    <Commits owner={owner} name={name} />
    <style jsx>{`
      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid ${colors.border};
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
        align-self: flex-start;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: ${colors.default};
        border-color: ;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
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
        font-size: 1.5rem;
      }

      .commits {
      }
    `}</style>
  </div>
)

export default RespositoryCard
