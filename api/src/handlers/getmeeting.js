import { withCors } from '../helpers/cors'
import { getMeeting } from '../helpers/ddb'

// :: ---

export const handler = async (event) => {
  const { token, hash } = event.pathParameters

  try {
    const data = await getMeeting(token, hash)
    if (data.Items.length === 0) throw new Error('Meeting not found.')

    return withCors({
      statusCode: 200,
      body: JSON.stringify(data.Items[0].meeting),
    })
  } catch (error) {
    console.error('Error while retrieving meeting.', error)
    return withCors({
      statusCode: 404,
    })
  }
}
