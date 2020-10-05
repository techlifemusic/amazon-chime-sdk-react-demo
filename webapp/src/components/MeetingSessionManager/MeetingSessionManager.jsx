import React, { useContext, useEffect } from 'react'

import MeetingSessionContext from 'contexts/MeetingSessionContext'
import RedirectOnSessionEnd from './components/RedirectOnSessionEnd'

// :: ---

function MeetingSessionManager() {
  const session = useContext(MeetingSessionContext)

  useEffect(() => {
    if (!session || session.error) return
    // :: ---

    console.debug('Starting audio/video conference.', session.audioVideo)
    session.audioVideo.start()

    return () => {
      session.audioVideo.stop()
    }
  }, [session])

  return (
    <>
      <RedirectOnSessionEnd session={session} />
    </>
  )
}

export default MeetingSessionManager
