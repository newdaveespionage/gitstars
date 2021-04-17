import { useRouter } from 'next/router'

const RepoDetail = (): JSX.Element => {
  const router = useRouter()
  const { repoid } = router.query

  return <p>Repo id: {repoid}</p>
}

export default RepoDetail
