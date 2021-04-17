import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = (repoid) =>
  fetch(`/api/repos/${repoid}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((json) => json.data)

const RepoDetail = (): JSX.Element => {
  const router = useRouter()
  const { repopath } = router.query
  const { data, error } = useSWR(repopath, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const { items } = data

  return (
    <>
      <p>Repo id: {repopath}</p>
      <div className="grid">
        {items.map((commit) => (
          <div key={commit.id} className="card">
            <div>{commit.author.name}</div>
            <div>{commit.committedDate}</div>
            <div>{commit.message}</div>
          </div>
        ))}
        <style jsx>{``}</style>
      </div>
    </>
  )
}

export default RepoDetail
