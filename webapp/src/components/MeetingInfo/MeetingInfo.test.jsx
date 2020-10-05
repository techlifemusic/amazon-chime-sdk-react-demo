import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'

import MeetingInfo from 'components/MeetingInfo'

// :: ---

it('renders without errors', () => {
  render(
    <Router>
      <MeetingInfo />
    </Router>
  )
})
