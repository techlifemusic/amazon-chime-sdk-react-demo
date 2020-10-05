import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render, act } from '@testing-library/react'

import CreateSessionControl from 'components/CreateSessionControl'

// :: ---

it('renders without errors', async () => {
  await act(async () => {
    render(
      <Router>
        <CreateSessionControl />
      </Router>
    )
  })
})
