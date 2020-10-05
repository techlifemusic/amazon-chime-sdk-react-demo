import React from 'react'
import { render } from '@testing-library/react'

import { AuthenticatedUserContextProvider } from 'contexts/AuthenticatedUserContext'

// :: ---

it('renders without errors', () => {
  render(<AuthenticatedUserContextProvider />)
})
