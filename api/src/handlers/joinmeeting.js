import { withCors } from '../helpers/cors'
import { chimeClient } from '../helpers/chime'

// :: ---

export const handler = async (event) => {
  const { meetingid, userid } = JSON.parse(event.body || {})
  if (!meetingid || !userid) return withCors({ statusCode: 400 })
  // :: ---

  const params = {
    MeetingId: meetingid,
    ExternalUserId: userid,
  }

  console.log('Creating participant ticket:', meetingid, userid)
  const ticket = await chimeClient.createAttendee(params).promise()

  return withCors({
    statusCode: 200,
    body: JSON.stringify(ticket),
  })
}
