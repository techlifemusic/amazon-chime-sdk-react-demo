import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'

import MeetingSessionManager from 'components/MeetingSessionManager'

// :: ---

it('renders without errors', () => {
  render(
    <Router>
      <MeetingSessionManager />
    </Router>
  )
})
