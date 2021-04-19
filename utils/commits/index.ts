import { RawCommit } from './internalTypes'
import { Commit } from './types'

export const standardizeCommits = (rawCommits: RawCommit[]): Commit[] => {
  const commits = rawCommits.map(
    (rawData): Commit => ({
      id: rawData.node_id,
      name: rawData.commit.committer.name,
      date: rawData.commit.committer.date,
      message: rawData.commit.message,
    })
  )

  return commits
}
