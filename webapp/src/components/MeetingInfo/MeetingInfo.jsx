import React, { useContext } from 'react'

import AudioInputDevice from 'components/AudioInputDevice'
import VideoInputDevice from 'components/VideoInputDevice'
import DisconnectButton from 'components/DisconnectButton'
import MeetingSessionContext from 'contexts/MeetingSessionContext'

// :: ---

function InfoTag({ label, children }) {
  return (
    <label className='flex mr-8'>
      <span className='font-light opacity-75'>{label}</span>
      <span className='ml-4 font-medium'>{children}</span>
    </label>
  )
}

function MeetingInfo({ sessionInfo }) {
  const session = useContext(MeetingSessionContext)

  return (
    <div className='w-full p-4 flex text-lg'>
      {!sessionInfo || !session ? (
        <div>Connecting ...</div>
      ) : session && session.error ? null : (
        <>
          <div className='flex py-2'>
            <InfoTag label='Session Name'>{sessionInfo.sessionName}</InfoTag>
            <InfoTag label='Join Code'>{sessionInfo.joinCode}</InfoTag>
          </div>
          <div className='flex flex-grow'>
            <AudioInputDevice />
            <VideoInputDevice />
          </div>
          <div>
            <DisconnectButton />
          </div>
        </>
      )}
    </div>
  )
}

export default MeetingInfo
