import React from 'react'
import { render, act } from '@testing-library/react'

import AppRoot from 'components/AppRoot'

// :: ---

it('renders without errors', async () => {
  await act(async () => {
    render(<AppRoot />)
  })
})
