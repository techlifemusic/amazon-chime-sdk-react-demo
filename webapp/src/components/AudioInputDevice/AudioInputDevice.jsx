import { useContext, useEffect } from 'react'

import MeetingSessionContext from 'contexts/MeetingSessionContext'

// :: ---

function AudioInputDevice() {
  const session = useContext(MeetingSessionContext)

  useEffect(() => {
    if (!session || session.error) return

    // :: TODO implement audio device selection
    session.audioVideo
      .listAudioInputDevices()
      .then((devices) => {
        if (devices.length === 0) {
          console.warn('No audio input devices detected.')
          return
        }

        console.log('Registering audio input device:', devices[0])
        const { deviceId } = devices[0]
        return session.audioVideo.chooseAudioInputDevice(deviceId)
      })
      .catch((err) => {
        console.error(
          'Error occurred attempting to list audio/video devices.',
          err
        )
      })
  }, [session])

  return null
}

export default AudioInputDevice
