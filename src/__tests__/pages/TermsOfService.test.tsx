import React from 'react'
import { render } from '@testing-library/react'
import { TermsOfService } from 'src/pages'

test('renders TermsOfService', () => {
  const { getByText } = render(<TermsOfService />)
  const title = getByText(/Terms of Service/i)
  expect(title).toBeInTheDocument()
})
