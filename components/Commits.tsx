import { colors } from '../theme'
import CommitItems, { CommitItemsProps } from './CommitItems'

const RepoDetail = (props: CommitItemsProps): JSX.Element => {
  return (
    <div>
      <div>
        <h4 className="commits-title">Commits from the last 24 hours</h4>
        <CommitItems {...props} />
      </div>
      <style jsx>{`
        .commits-title {
          font-size: 1.2em;
          padding: 0.5rem 0.5rem 0.5rem 0;
          margin-bottom: 0.5rem;
          border: 1px dashed ${colors.blue500};
          border-top: none;
          border-left: none;
        }
      `}</style>
    </div>
  )
}

export default RepoDetail
