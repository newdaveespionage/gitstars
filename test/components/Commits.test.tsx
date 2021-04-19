import React from 'react'
import { fireEvent, render } from '../testUtils'
import Commits from '../../components/Commits'
import { commitsFetcher } from '../../utils/fetchers'

jest.mock('../../utils/fetchers', () => ({
  commitsFetcher: jest.fn(),
}))

export const commitsTestProps = {
  owner: 'TestOwner',
  name: 'TestName',
}

describe('CommitItem', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Commits {...commitsTestProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    const { getByText } = render(<Commits {...commitsTestProps} />, {})
    fireEvent.click(getByText('Tap to load commits'))
    expect(commitsFetcher).toHaveBeenCalledWith('TestOwner', 'TestName')
  })
})
