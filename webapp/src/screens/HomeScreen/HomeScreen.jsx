import React from 'react'

import CreateSessionControl from 'components/CreateSessionControl'
import JoinSessionControl from 'components/JoinSessionControl'
import SignOutButton from 'components/SignOutButton'

// :: ---

const HomeScreen = () => {
  return (
    <>
      <div className='min-h-screen p-4 md:p-8 lg:p-16 pt-16 text-white bg-gradient-to-bl from-teal-400 to-purple-700 flex flex-col items-center justify-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>welcome.</h1>
        <p className='w-full md:w-1/2 lg:w-1/4 text-md lg:text-lg text-center'>
          This is a demonstration of how to establish a simple A/V
          teleconferencing session using the Amazon Chime SDK.
        </p>

        <div className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 my-6 text-center'>
          <CreateSessionControl />
          <span>--- or ---</span>
          <JoinSessionControl />
        </div>
      </div>
      <SignOutButton />
    </>
  )
}

export default HomeScreen
