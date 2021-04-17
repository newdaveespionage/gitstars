import { init } from '../../utils/sentry'
import { NextApiRequest, NextApiResponse } from 'next'
import { graphql } from '@octokit/graphql'

init()

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: process.env.GITHUB_ACCESS_TOKEN,
  },
})

const repoQuery = `
{
  search(type: REPOSITORY, first: 100, query: "stars:>=90000") {
    nodes {
      ... on Repository {
        id
        name
        url
        stargazerCount
      }
    }
  }
}
`

/**
 * response looks like
 */
/**
{
  "data": {
    "search": {
      "nodes": [
        {
          "id": "MDEwOlJlcG9zaXRvcnkyODQ1NzgyMw==",
          "name": "freeCodeCamp",
          "stargazerCount": 322867
        },
      ],
    },
  }
}
*/

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { repositories } = await graphqlWithAuth(repoQuery)
  res.status(200).json(repositories.data.search.nodes)
}

export default handler
