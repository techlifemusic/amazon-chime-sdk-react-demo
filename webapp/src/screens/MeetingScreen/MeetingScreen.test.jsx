import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'

import MeetingScreen from 'screens/MeetingScreen'

// :: ---

it('renders without errors', () => {
  render(
    <Router>
      <MeetingScreen />
    </Router>
  )
})
