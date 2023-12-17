import React from 'react'

const Button = ({text, styles}) => {
  return (
    <button type='button' className={`bg-red text-white py-4 px-8 font-medium cursor-pointer rounded-[5px]  ${styles}`}>{text}</button>
  )
}

export default Button
