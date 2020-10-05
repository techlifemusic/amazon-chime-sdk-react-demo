import React, { createContext, useState, useEffect, useContext } from 'react'
import { v4 as uuid } from 'uuid'

import AuthenticatedUserContext from 'contexts/AuthenticatedUserContext'
import { getParticipantJoinTicket, connectToSession } from 'services/confcall'

// :: ---

const MeetingSessionContext = createContext(null)

export function MeetingSessionContextProvider({ meeting, children }) {
  const user = useContext(AuthenticatedUserContext)

  const [userid, setUserId] = useState(null)
  const [session, setSession] = useState(null)

  useEffect(() => {
    console.log('User:', user)
    if (user) {
      console.info('User is logged in.')
      setUserId(user.username)
    } else {
      console.info('User is anonymous.')
      setUserId(uuid())
    }
  }, [user])

  useEffect(() => {
    if (!meeting) return
    if (!userid) return
    // :: ---

    getParticipantJoinTicket(meeting.MeetingId, userid)
      .then((ticket) => connectToSession(meeting, ticket))
      .then((session) => {
        setSession(session)
        session.audioVideo.addObserver({
          audioVideoDidStop: (status) => {
            console.debug('Session stopped with status:', status)
            setSession(null)
          },
        })
      })
      .catch(() => {
        setSession({ error: 'Error connecting to meeting.' })
      })
  }, [meeting, userid])

  return (
    <MeetingSessionContext.Provider value={session}>
      {children}
    </MeetingSessionContext.Provider>
  )
}

export default MeetingSessionContext
