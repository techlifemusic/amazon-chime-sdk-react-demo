import React from 'react'
import { render } from '@testing-library/react'

import HomeScreen from 'screens/HomeScreen'

jest.mock('components/CreateSessionControl')
jest.mock('components/JoinSessionControl')

// :: ---

it('renders without errors', () => {
  render(<HomeScreen />)
})
