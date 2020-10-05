import { v4 as uuid } from 'uuid'

import { chimeClient } from '../helpers/chime'
import { saveMeeting } from '../helpers/ddb'
import { withCors } from '../helpers/cors'

// :: ---

export const handler = async (event) => {
  const { meetingToken, meetingRegion } = JSON.parse(event.body || {})
  const ClientRequestToken = uuid()

  const request = {
    ClientRequestToken,
    MediaRegion: meetingRegion || process.env.CHIME_MEETING_REGION,
    NotificationsConfiguration: {},
  }

  console.log('Creating new Chime meeting', JSON.stringify(request))
  const { Meeting } = await chimeClient.createMeeting(request).promise()
  const hash = ClientRequestToken.slice(0, 6).toUpperCase()

  await saveMeeting(Meeting, meetingToken, hash)

  return withCors({
    statusCode: 200,
    body: JSON.stringify({ meeting: Meeting, meetingToken, joinCode: hash }),
  })
}
