import { API } from 'aws-amplify'
import {
  ConsoleLogger,
  DefaultDeviceController,
  DefaultMeetingSession,
  LogLevel,
  MeetingSessionConfiguration,
} from 'amazon-chime-sdk-js'

// :: ---

const CHIME_LOGGER = new ConsoleLogger('Chime Logs', LogLevel.OFF)
const CHIME_DEVICE_CONTROLLER = new DefaultDeviceController(CHIME_LOGGER)

export async function createMeeting(
  meetingToken,
  meetingRegion = 'ap-southeast-1'
) {
  const body = {
    meetingToken,
    meetingRegion,
  }

  console.debug('Creating new Chime meeting:', body)

  try {
    const response = await API.post('backend-api', '/meetings', { body })
    return response
  } catch (err) {
    console.error('Error encountered while creating a new meeting:', err)
    return null
  }
}

export async function getMeeting(token, hash) {
  console.debug('Retrieving Chime meeting:', { token, hash })

  try {
    const response = await API.get('backend-api', `/meetings/${token}/${hash}`)
    return response
  } catch (error) {
    console.error('Error encountered while retrieving meeting:', error)
    return null
  }
}

export async function getParticipantJoinTicket(meetingid, userid) {
  console.debug('Requesting participant ticket:', { meetingid, userid })

  try {
    const body = { meetingid, userid }
    const ticket = await API.post('backend-api', '/sessions/join', { body })
    console.debug('Ticket received:', ticket)
    return ticket
  } catch (error) {
    console.error(
      'Error encountered while requesting participant ticket:',
      error
    )
    return null
  }
}

export async function connectToSession(meeting, ticket) {
  const meetingConfiguration = new MeetingSessionConfiguration(meeting, ticket)
  const meetingSession = new DefaultMeetingSession(
    meetingConfiguration,
    CHIME_LOGGER,
    CHIME_DEVICE_CONTROLLER
  )

  return meetingSession
}
