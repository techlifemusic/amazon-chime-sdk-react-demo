import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import MeetingSessionContext from 'contexts/MeetingSessionContext'
import VideoFeeds from 'components/VideoFeeds'
import AudioSpeaker from 'components/AudioSpeaker'

// :: ---

function ErrorState() {
  return (
    <div className='w-full h-full pb-24 flex flex-col content-around justify-center text-center'>
      <h2 className='font-semibold text-xl mb-4'>
        We could not connect to your meeting.
      </h2>
      <p>The meeting might have already completed.</p>
      <p>Please check your details and try again.</p>

      <div className='mt-8'>
        <Link
          to='/'
          className='border-2 border-white rounded-lg px-8 py-4 hover:bg-white hover:text-orange-500 transition duration-200'
        >
          Go back to Home
        </Link>
      </div>
    </div>
  )
}

function MeetingDashboard() {
  const session = useContext(MeetingSessionContext)

  // :: ---

  if (!session) return <></>
  else if (session.error) return <ErrorState />

  return (
    <>
      <VideoFeeds />
      <AudioSpeaker />
    </>
  )
}

export default MeetingDashboard
