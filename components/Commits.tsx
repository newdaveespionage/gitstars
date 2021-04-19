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
        <button
          onClick={loadCommits}
          className="load-cta"
          title="use this button to load commits from the past 24 hours"
        >
          Tap to load commits
        </button>
      )}
      {showCommits && (
        <div className="commits-container">
          <h4 className="commits-title">Commits from the last 24 hours</h4>
          <CommitItems {...props} />
        </div>
      )}
      <style jsx>{`
        .load-cta {
          cursor: pointer;
          font-size: 1em;
          color: ${colors.white};
          background-color: ${colors.blue600};
        }

        .commits-container {
          border-top: 1px solid ${colors.blue500};
        }

        .commits-title {
          font-size: 1.2em;
        }
      `}</style>
    </div>
  )
}

export default RepoDetail
