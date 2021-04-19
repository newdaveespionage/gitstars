import useSWR from 'swr'
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
        <ul>
          {commits.map((commit) => (
            <li key={commit.id}>
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
    </>
  )
}

export default CommitItems
