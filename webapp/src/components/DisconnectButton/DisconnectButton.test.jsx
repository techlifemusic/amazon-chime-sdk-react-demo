import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'

import DisconnectButton from 'components/DisconnectButton'

// :: ---

it('renders without errors', () => {
  render(
    <Router>
      <DisconnectButton />
    </Router>
  )
})
