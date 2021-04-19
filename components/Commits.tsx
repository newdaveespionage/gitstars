import { useState } from 'react'
import { colors } from '../theme'
import CommitItems, { CommitItemsProps } from './CommitItems'

const RepoDetail = (props: CommitItemsProps): JSX.Element => {
  const [showCommits, setShowCommits] = useState<boolean>(false)

  const loadCommits = () => {
    setShowCommits(true)
  }
  return (
    <div>
      {!showCommits && (
        <button onClick={loadCommits} className="loadCTA">
          Tap to load commits for {props.owner}/{props.name}
        </button>
      )}
      {showCommits && (
        <>
          <h4>Commits from the last 24 hours</h4>
          <CommitItems {...props} />
        </>
      )}
      <style jsx>{`
        .loadCTA {
          cursor: pointer;
          font-size: 1em;
          color: ${colors.white};
          background: ${colors.blue600};
        }
      `}</style>
    </div>
  )
}

export default RepoDetail
