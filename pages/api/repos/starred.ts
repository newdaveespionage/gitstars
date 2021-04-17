import { NextApiRequest, NextApiResponse } from 'next'
import { init } from '../../../utils/sentry'
import { request } from '@octokit/request'

init()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const repositories = await request('GET /search/repositories', {
    headers: {
      authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
    q: 'stars:>=90000',
    sort: 'stars',
    order: 'desc',
  })

  res.status(200).json(repositories)
}

export default handler
