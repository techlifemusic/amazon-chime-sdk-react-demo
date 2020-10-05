# Sample Amazon Chime SDK React App

![aws: amplify](https://img.shields.io/badge/AWS_Amplify-3.3-%23ff9900?style=flat-square&logo=amazon%20aws&labelColor=232f3e)
![react: 16.13](https://img.shields.io/badge/react-16.13-%234CDAFB?style=flat-square&logo=react)
![language: javascript](https://img.shields.io/badge/language-javascript-%2378B35F?style=flat-square)
![codestyle: prettier](https://img.shields.io/badge/codestyle-prettier-%23C596C7?style=flat-square)

---

This is a webapp (with the backing API endpoints) that demonstrates creating audio/video
conference calls using the [Amazon Chime SDK][chime-sdk].

This is meant to be a more tangible example of the process described
[in this blog post][blogpost].

## Deploying into your own AWS account

You will need to have the [AWS CLI][aws-cli] configured on your machine.

This project uses [Yarn workspaces][yarn-workspaces] to segregate codefiles:

- `chimesdk-api`: a [Serverless Framework][sls] backend to deploy your API endpoints
- `chimesdk-webapp`: a frontend client using [React][react]

```bash
# :: from the project root
yarn workspace chimesdk-api deploy    # :: deploys the API stack
yarn workspace chimesdk-webapp start  # :: runs the webapp locally
```

As part of the API deployment, a file `stack-outputs.json` is generated
in `/api` --- this file is imported by the webapp in
`/webapp/src/helpers/amplify.js`.

## Find a problem / optimization to make?

Please tell me about it.
Or better yet, throw in a PR.

---

[@techlifemusic][twitter] &middot; [website][site]

[chime-sdk]: https://github.com/aws/amazon-chime-sdk-js
[aws-cli]: https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html
[sls]: https://serverless.com
[react]: https://reactjs.org
[twitter]: https://twitter.com/techlifemusic
[site]: https://richardneililagan.com
[yarn-workspaces]: https://yarnpkg.com/features/workspaces
[blogpost]: https://www.richardneililagan.com/posts/working-with-amazon-chime-sdk
