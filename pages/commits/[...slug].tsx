import Link from 'next/link'
import { useRouter } from 'next/router'
import CommitItems from '../../components/CommitItems'

const CommitsPage = (): JSX.Element => {
  const { query } = useRouter()
  const { slug } = query

  return (
    <>
      <Link href="/">Home</Link>
      {!slug && <div>no values</div>}
      {slug && slug.length === 2 && (
        <CommitItems owner={slug[0]} name={slug[1]} />
      )}
    </>
  )
}

export default CommitsPage
