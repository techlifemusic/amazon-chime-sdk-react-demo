import React from 'react'
import ReactDOM from 'react-dom'

import AppRoot from 'components/AppRoot'

import { initializeAmplify } from 'helpers/amplify'

import * as serviceWorker from './service-worker'
import './index.scss'

// :: ---

initializeAmplify()

ReactDOM.render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>,
  document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
