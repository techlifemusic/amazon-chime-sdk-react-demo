import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'

import JoinSessionControl from 'components/JoinSessionControl'

// :: ---

it('renders without errors', () => {
  render(
    <Router>
      <JoinSessionControl />
    </Router>
  )
})
