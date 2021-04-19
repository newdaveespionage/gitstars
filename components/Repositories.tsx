import useSWR from 'swr'
import RespositoryCard from '../components/RepositoryCard'
import { repoFetcher } from '../utils/fetchers'
import { standardizeRepositories } from '../utils/repositories'

const Repositories = (): JSX.Element => {
  const { data, error } = useSWR('starred_repos', repoFetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const repos = standardizeRepositories(data.items)

  return (
    <div className="grid">
      {repos.map((repo) => (
        <RespositoryCard key={repo.id} {...repo} />
      ))}
      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 90%;
          margin-top: 3rem;
        }
      `}</style>
    </div>
  )
}

export default Repositories
