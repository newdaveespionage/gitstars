import { NextApiRequest, NextApiResponse } from 'next'
import { init } from '../../../utils/sentry'
import { request } from '@octokit/request'

init()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { repopath } = req.query

  const repositoryDetail = await request('GET /repos/{repopath}/commits', {
    headers: {
      authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
    repopath: repopath,
  })
  res.status(200).json(repositoryDetail)
}

export default handler
