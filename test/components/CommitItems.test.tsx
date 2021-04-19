import React from 'react'
import { render } from '../testUtils'
import CommitItems from '../../components/CommitItems'
import { commitsTestProps } from './Commits.test'

jest.mock('../../utils/fetchers', () => ({
  commitsFetcher: jest.fn(),
}))

describe('CommitItems', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<CommitItems {...commitsTestProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
