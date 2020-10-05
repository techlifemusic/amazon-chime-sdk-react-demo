import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'

import RedirectOnSessionEnd from './RedirectOnSessionEnd'

// :: ---

it('renders without errors', () => {
  render(
    <Router>
      <RedirectOnSessionEnd />
    </Router>
  )
})
