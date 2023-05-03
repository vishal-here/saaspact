import React from 'react'
const Button = (props) => {
  return (
    <button
    type="button"
    className= {
        `w-fit flex flex-row justify-center align-middle  p-3 sm:py-5 sm:px-9 ${props.color}  text-white uppercase rounded-lg font-bold`
    }
    onClick={props.afterClick}
  >
    {props.text}
  </button>
  )
}

export default Button