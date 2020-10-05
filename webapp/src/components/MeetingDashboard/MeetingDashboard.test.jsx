import React from 'react'
import { render } from '@testing-library/react'

import MeetingDashboard from 'components/MeetingDashboard'

// :: ---

it('renders without errors', () => {
  render(<MeetingDashboard />)
})
