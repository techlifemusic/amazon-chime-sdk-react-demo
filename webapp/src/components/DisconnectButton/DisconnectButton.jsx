import React, { useContext, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import MeetingSessionContext from 'contexts/MeetingSessionContext'
import ActionButton from 'components/ActionButton'

// :: ---

function DisconnectButton() {
  const navigate = useNavigate()
  const session = useContext(MeetingSessionContext)

  const handleDisconnect = useCallback(() => {
    session.audioVideo.stop()
    navigate('/')
  }, [session, navigate])

  return session ? (
    <ActionButton label='Disconnect' onClick={handleDisconnect} />
  ) : (
    <ActionButton label='Connecting ...' disabled />
  )
}

export default DisconnectButton
