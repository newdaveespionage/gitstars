import React from 'react'
import { render } from '../testUtils'
import RepositoryCard from '../../components/RepositoryCard'
import { Repository } from '../../utils/repositories/types'

export const repositoryCardTestProps: Repository = {
  owner: 'Test Owner',
  name: 'Test Name',
  url: 'https://www.github.com/testowner/testrepo',
  stars: 10000000000,
  description: 'ten billion stars repo',
}

describe('CommitItem', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <RepositoryCard {...repositoryCardTestProps} />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
