import Link from 'next/link'
import { useRouter } from 'next/router'
import CommitItems from '../../components/CommitItems'
import { global, link } from '../../theme'

const CommitsPage = (): JSX.Element => {
  const { query } = useRouter()
  const { slug } = query

  return (
    <div className="commits">
      <Link href="/">
        <a>&lt; Home</a>
      </Link>
      {!slug && <div>no values</div>}
      {slug && slug.length === 2 && (
        <CommitItems owner={slug[0]} name={slug[1]} />
      )}
      <style jsx global>
        {global}
      </style>
      <style jsx>{link}</style>
      <style jsx>{`
        .commits {
          margin: 1em;
        }
      `}</style>
    </div>
  )
}

export default CommitsPage
