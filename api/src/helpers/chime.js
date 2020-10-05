import { Chime } from 'aws-sdk'

export const chimeClient = new Chime({ region: 'us-east-1' }) // :: required to be us-east-1
chimeClient.endpoint = process.env.CHIME_ENDPOINT_URL
