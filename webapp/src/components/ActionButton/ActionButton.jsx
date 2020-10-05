import React from 'react'
import clsx from 'clsx'

// :: ---

const ActionButton = ({ label, className, ...props }) => {
  const clazz = clsx([
    'px-4 py-2 text-lg border-2 rounded opacity-75 hover:opacity-100 hover:bg-white hover:text-blue-500 transition duration-200 disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-25 disabled:text-current hover:text-red',
    className,
  ])

  return (
    <button className={clazz} {...props}>
      {label}
    </button>
  )
}

export default ActionButton
