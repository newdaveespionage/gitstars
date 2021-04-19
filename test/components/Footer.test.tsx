import React from 'react'
import { render } from '../testUtils'
import Footer from '../../components/Footer'

describe('CommitItem', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Footer />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
