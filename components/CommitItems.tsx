import useSWR from 'swr'
import { colors } from '../theme'
import { standardizeCommits } from '../utils/commits'
import { commitsFetcher } from '../utils/fetchers'
import CommitItem from './CommitItem'

export type CommitItemsProps = {
  owner: string
  name: string
}

const CommitItems = ({ owner, name }: CommitItemsProps): JSX.Element => {
  const { data, error } = useSWR([owner, name], commitsFetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const commits = standardizeCommits(data)

  return (
    <>
      {commits.length === 0 && <p>No commits found</p>}
      {commits.length > 0 && (
        <ul className="commit-list">
          {commits.map((commit) => (
            <li key={commit.id} className="commit-listitem">
              <CommitItem
                id={commit.id}
                name={commit.name}
                date={commit.date}
                message={commit.message}
              />
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .commit-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .commit-listitem {
          padding: 0.5em 0;
          border-top: 1px dashed ${colors.blue300};
        }
        .commit-listitem:first-child {
          border-top: none;
        }
      `}</style>
    </>
  )
}

export default CommitItems
