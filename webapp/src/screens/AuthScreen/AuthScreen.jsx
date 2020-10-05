import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { withAuthenticator } from '@aws-amplify/ui-react'

// :: ---

function AuthScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    // :: navigate to home screen when this component renders,
    //    i.e. when the user is authenticated
    navigate('/')
  }, [navigate])

  return <></>
}

export default withAuthenticator(AuthScreen)
