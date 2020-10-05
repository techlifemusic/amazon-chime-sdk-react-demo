import React from 'react'
import { render } from '@testing-library/react'

import { MeetingSessionContextProvider } from 'contexts/MeetingSessionContext'

// :: ---

it('renders without errors', () => {
  render(<MeetingSessionContextProvider />)
})
