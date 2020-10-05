import { withCors } from '../helpers/cors'

// :: ---

export const handler = async () => {
  const statusCode = 200
  const body = JSON.stringify({
    message: process.env.API_PING_RESPONSE,
  })

  const response = withCors({ statusCode, body })
  return response
}
