import Amplify, { Auth as AmplifyAuth } from 'aws-amplify'

import backend from 'chimesdk-api/stack-outputs.json'

// :: ---

const Auth = {
  region: backend.AwsRegion,
  userPoolId: backend.CognitoUserpoolId,
  userPoolWebClientId: backend.CognitoUserpoolClientId,
  identityPoolId: backend.CognitoIdentitypoolId,
}

const API = {
  endpoints: [
    {
      name: 'backend-api',
      endpoint: backend.ServiceEndpoint,
      custom_header: async () => {
        try {
          const session = await AmplifyAuth.currentSession()
          return {
            Authorization: session.getIdToken().getJwtToken(),
          }
        } catch (_) {
          return {}
        }
      },
    },
  ],
}

export const initializeAmplify = () => {
  Amplify.configure({ Auth, API })
}
