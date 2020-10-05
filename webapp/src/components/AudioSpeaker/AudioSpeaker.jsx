import React, { useRef, useContext, useEffect } from 'react'

import MeetingSessionContext from 'contexts/MeetingSessionContext'

// :: ---

function AudioSpeaker() {
  const session = useContext(MeetingSessionContext)
  const audioElementRef = useRef(null)

  useEffect(() => {
    console.debug(session)
    if (!session || session.error) return
    // :: ---

    const audioElement = audioElementRef.current
    console.debug('Attaching audio playback control.', audioElement)
    session.audioVideo.bindAudioElement(audioElement)

    return () => {
      session.audioVideo.unbindAudioElement()
    }
  }, [session])

  return <audio ref={audioElementRef}></audio>
}

export default AudioSpeaker
