import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'

import AuthScreen from 'screens/AuthScreen'

// :: ---

it('renders without errors', () => {
  render(
    <Router>
      <AuthScreen />
    </Router>
  )
})
