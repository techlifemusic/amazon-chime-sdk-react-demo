import React, { useCallback, useContext } from 'react'
import { Auth } from 'aws-amplify'

import ActionButton from 'components/ActionButton'
import AuthenticatedUserContext from 'contexts/AuthenticatedUserContext'

// :: ---

function SignOutButton() {
  const user = useContext(AuthenticatedUserContext)

  const handleLogout = useCallback(() => {
    Auth.signOut()
  }, [])

  return user ? (
    <ActionButton
      className='fixed top-0 right-0 mt-2 mr-2 md:mt-4 md:mr-4 text-white transform scale-75 md:scale-90'
      label='Logout'
      onClick={handleLogout}
    />
  ) : null
}

export default SignOutButton
