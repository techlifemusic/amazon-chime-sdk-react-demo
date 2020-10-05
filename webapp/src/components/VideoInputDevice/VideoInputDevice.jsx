import { useEffect, useContext } from 'react'

import MeetingSessionContext from 'contexts/MeetingSessionContext'

// :: ---

function VideoInputDevice() {
  const session = useContext(MeetingSessionContext)

  useEffect(() => {
    if (!session || session.error) return
    // :: ---
    console.debug('Session:', session)

    // :: TODO implement video device selection
    session.audioVideo
      .listVideoInputDevices()
      .then((devices) => {
        console.debug('Video devices:', devices)
        if (devices.length === 0) {
          console.warn('No video input devices detected.')
          return
        }

        console.log(
          'Registering video input device:',
          devices[devices.length - 1]
        )
        const { deviceId } = devices[devices.length - 1]
        return session.audioVideo.chooseVideoInputDevice(deviceId)
      })
      .then(() => session.audioVideo.startLocalVideoTile())

    return () => {
      session.audioVideo.stopLocalVideoTile()
    }
  }, [session])

  return null
}

export default VideoInputDevice
