import React, { useRef, useContext, useEffect } from 'react'

import MeetingSessionContext from 'contexts/MeetingSessionContext'

// :: ---

function VideoTile({ id }) {
  const session = useContext(MeetingSessionContext)
  const videoElementRef = useRef(null)

  useEffect(() => {
    if (!session || session.error) return
    // :: ---

    console.debug(session.audioVideo)
    const videoElement = videoElementRef.current
    console.debug(`Attaching video playback for tile ${id}:`, videoElement)
    session.audioVideo.bindVideoElement(id, videoElement)

    return () => {
      session.audioVideo.unbindVideoElement(id)
    }
  }, [session, id])

  return (
    <div className='w-full'>
      <div className='relative w-full pb-10/16 bg-gray-900'>
        <video
          ref={videoElementRef}
          className='w-full h-full absolute object-cover'
        ></video>
      </div>
    </div>
  )
}

export default VideoTile
