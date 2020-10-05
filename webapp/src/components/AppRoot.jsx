import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import { AuthenticatedUserContextProvider } from 'contexts/AuthenticatedUserContext'

const HomeScreen = lazy(() => import('screens/HomeScreen'))
const AuthScreen = lazy(() => import('screens/AuthScreen'))
const MeetingScreen = lazy(() => import('screens/MeetingScreen'))

// :: ---

const AppRoot = () => {
  return (
    <>
      <Helmet>
        <title>Amazon Chime SDK Demo</title>
      </Helmet>
      <AuthenticatedUserContextProvider>
        <Router>
          <Suspense fallback={<></>}>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/auth' element={<AuthScreen />} />
              <Route path='/meeting' element={<MeetingScreen />} />
            </Routes>
          </Suspense>
        </Router>
      </AuthenticatedUserContextProvider>
    </>
  )
}

export default AppRoot
