import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import MeetingSessionManager from 'components/MeetingSessionManager'
import MeetingInfo from 'components/MeetingInfo'
import MeetingDashboard from 'components/MeetingDashboard'

import { MeetingSessionContextProvider } from 'contexts/MeetingSessionContext'

// :: ---

function MeetingScreen() {
  const { state } = useLocation()
  const [sessionInfo] = useState(state)

  useEffect(() => {
    console.log(sessionInfo)
  }, [sessionInfo])

  return sessionInfo ? (
    <MeetingSessionContextProvider meeting={sessionInfo.meeting}>
      <MeetingSessionManager />

      <div className='h-screen flex flex-col text-white bg-gradient-to-bl from-orange-400 to-pink-700'>
        <MeetingInfo sessionInfo={sessionInfo} />
        <MeetingDashboard />
      </div>
    </MeetingSessionContextProvider>
  ) : (
    <></>
  )
}

export default MeetingScreen
