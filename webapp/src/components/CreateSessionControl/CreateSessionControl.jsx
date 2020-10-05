import React, { useState, useCallback, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import AuthenticatedUserContext from 'contexts/AuthenticatedUserContext'

import ActionBox from 'components/ActionBox'
import ActionButton from 'components/ActionButton'
import Textbox from 'components/Textbox'

import { createMeeting } from 'services/confcall'

// :: ---

function CreateSessionControl() {
  const navigate = useNavigate()
  const user = useContext(AuthenticatedUserContext)

  const [sessionName, setSessionName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSessionNameChange = useCallback(
    ({ target }) => setSessionName(target.value),
    [setSessionName]
  )

  const handleCreateSession = useCallback(async () => {
    setIsLoading(true)
    const meetingDetails = await createMeeting(sessionName)

    if (meetingDetails) {
      console.log(meetingDetails)
      const { meeting, meetingToken, joinCode } = meetingDetails
      navigate('/meeting', {
        state: {
          meeting,
          joinCode,
          sessionName: meetingToken,
        },
      })
    } else {
      // :: TODO an error occurred
      setIsLoading(false)
    }
  }, [sessionName, navigate])

  // :: ---

  return user ? (
    <ActionBox title='Host a Session'>
      <Textbox
        placeholder='Session Name (no spaces please)'
        value={sessionName}
        disabled={isLoading}
        onChange={handleSessionNameChange}
      />
      <ActionButton
        label='Create Session'
        disabled={isLoading || sessionName.length === 0}
        onClick={handleCreateSession}
      />
    </ActionBox>
  ) : (
    <ActionBox title='Host a Session'>
      <div className='mb-4'>You will need to login to create a session.</div>
      <Link to='/auth'>
        <ActionButton label='Login / Register' />
      </Link>
    </ActionBox>
  )
}

export default CreateSessionControl
