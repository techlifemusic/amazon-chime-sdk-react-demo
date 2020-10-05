import React from 'react'

// :: ---

const ActionBox = ({ title, children }) => {
  return (
    <div className='px-6 py-8 pt-2 my-2 flex flex-col items-center justify-center border-2 rounded'>
      <h2 className='mb-6 text-sm uppercase opacity-75'>{title}</h2>
      <div className='w-full mx-8 flex flex-col items-center justify-center'>
        {children}
      </div>
    </div>
  )
}

export default ActionBox
