import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'

import SignOutButton from 'components/SignOutButton'

// :: ---

it('renders without errors', () => {
  render(
    <Router>
      <SignOutButton />
    </Router>
  )
})
