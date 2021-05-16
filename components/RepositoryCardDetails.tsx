import { Repository } from '../utils/repositories/types'
import Image from 'next/image'
import { link } from '../theme'

const RespositoryCardDetails = ({
  url,
  stars,
  owner,
}: Partial<Repository>): JSX.Element => (
  <div className="details">
    <p>Owned by {owner}</p>
    <a href={url} target="_blank" rel="noopener noreferrer">
      {url}
    </a>
    <div className="star-container">
      <Image
        src="/icons/star.svg"
        height={14}
        width={20}
        alt="star icon"
        className="star-icon"
      />
      <span className="star-count" title="total stars">
        {stars}
      </span>
    </div>
    <style jsx>{`
      .details {
        margin-top: 1.5rem;
      }

      .star-container {
        margin: 1rem 0;
      }

      .star-icon {
        vertical-align: baseline;
      }

      .star-count {
        font-size: 1.2rem;
      }
    `}</style>
    <style jsx>{link}</style>
  </div>
)

export default RespositoryCardDetails
