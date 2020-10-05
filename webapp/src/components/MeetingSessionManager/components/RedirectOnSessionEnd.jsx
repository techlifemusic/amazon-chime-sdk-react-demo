import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MeetingSessionStatusCode } from 'amazon-chime-sdk-js'

// :: ---

function RedirectOnSessionEnd({ session }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!session || session.error) return
    // :: ---

    console.debug('Configuring session redirect on end observer.')

    session.audioVideo.addObserver({
      audioVideoDidStop: (status) => {
        const statusCode = status.statusCode()

        if (statusCode === MeetingSessionStatusCode.MeetingEnded) {
          console.info('The session has ended.')
          navigate('/')
        }
      },
    })
  }, [session, navigate])

  return null
}

export default RedirectOnSessionEnd
