import { DynamoDB } from 'aws-sdk'

const ddbClient = new DynamoDB.DocumentClient({
  region: process.env.APP_REGION,
})

// :: ---

export const getMeeting = (token, hash) => {
  const params = {
    TableName: process.env.DDB_CHIMEMEETINGS,
    KeyConditionExpression:
      'meetingid = :meetingid AND meetinghash = :meetinghash',
    ExpressionAttributeValues: {
      ':meetingid': token,
      ':meetinghash': hash,
    },
  }

  return ddbClient.query(params).promise()
}

export const saveMeeting = (meeting, token, hash) => {
  const ttl = ~~(+Date.now() / 1000) + 60 * 60 * 24 // :: 24h
  const params = {
    TableName: process.env.DDB_CHIMEMEETINGS,
    Item: {
      meetingid: token,
      meetinghash: hash,
      meeting,
      TTL: `${ttl}`,
    },
  }

  console.log(
    'Saving Chime meeting details',
    JSON.stringify({ meeting, token })
  )
  return ddbClient.put(params).promise()
}
