import { useState } from 'react'
import CommitItems, { CommitItemsProps } from './CommitItems'

const RepoDetail = (props: CommitItemsProps): JSX.Element => {
  const [showCommits, setShowCommits] = useState<boolean>(false)

  const loadCommits = () => {
    setShowCommits(true)
  }
  return (
    <div>
      {!showCommits && (
        <div onClick={loadCommits} className="">
          Tap to load commits for {props.owner}/{props.name}
        </div>
      )}
      {showCommits && (
        <>
          <h4>Commits from the last 24 hours</h4>
          <CommitItems {...props} />
        </>
      )}
      <style jsx>{``}</style>
    </div>
  )
}

export default RepoDetail
