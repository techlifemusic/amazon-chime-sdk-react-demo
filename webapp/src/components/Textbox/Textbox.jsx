import React from 'react'

// :: ---

const Textbox = (props) => {
  return (
    <input
      className='w-full mb-4 px-4 py-2 text-center border rounded text-lg text-white-400 bg-white bg-opacity-25 placeholder-teal-100 focus:bg-transparent transition duration-200'
      {...props}
    />
  )
}

export default Textbox
