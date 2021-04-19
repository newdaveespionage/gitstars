import { NextApiRequest, NextApiResponse } from 'next'
import { request } from '@octokit/request'
import { DateTime } from 'luxon'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { params } = req.query
  const isArray = Array.isArray(params)

  if (!isArray) return res.status(400).end('missing parameters')

  const commitsResponse = await request('GET /repos/{owner}/{name}/commits', {
    headers: {
      authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
    owner: params[0],
    name: params[1],
    since: DateTime.now().minus({ hours: 24 }).toISO(),
  })

  res.status(200).json(commitsResponse)
}

export default handler
