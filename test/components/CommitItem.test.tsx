import React from 'react'
import { render } from '../testUtils'
import CommitItem from '../../components/CommitItem'

export const testCommitItemProps = {
  id: 'testid',
  name: 'Test Repo Name',
  date: '2021-04-19T03:57:00.279Z',
  message: 'refactor: creating snapshots',
}

describe('CommitItem', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<CommitItem {...testCommitItemProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
