import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import ActionBox from 'components/ActionBox'
import ActionButton from 'components/ActionButton'
import Textbox from 'components/Textbox'

import { getMeeting } from 'services/confcall'

// :: ---

function JoinSessionControl() {
  const navigate = useNavigate()

  const [sessionName, setSessionName] = useState('')
  const [joinCode, setJoinCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSessionNameChange = useCallback(
    ({ target }) => setSessionName(target.value),
    [setSessionName]
  )

  const handleJoinCodeChange = useCallback(
    ({ target }) => setJoinCode(target.value.toUpperCase()),
    [setJoinCode]
  )

  const handleJoinSession = useCallback(async () => {
    setIsLoading(true)
    const meeting = await getMeeting(sessionName, joinCode)
    console.debug('Meeting details:', meeting)

    if (meeting) {
      navigate(`/meeting`, {
        state: { meeting, sessionName, joinCode },
      })
    } else {
      // :: TODO an error occurred
      setIsLoading(false)
    }
  }, [sessionName, joinCode, navigate])

  return (
    <ActionBox title='Join a Session'>
      <Textbox
        value={sessionName}
        placeholder='Session Name'
        disabled={isLoading}
        onChange={handleSessionNameChange}
      />
      <Textbox
        value={joinCode}
        placeholder='Join Code'
        disabled={isLoading}
        onChange={handleJoinCodeChange}
      />
      <ActionButton
        label='Join Session'
        disabled={isLoading || !sessionName || !joinCode}
        onClick={handleJoinSession}
      />
    </ActionBox>
  )
}

export default JoinSessionControl
