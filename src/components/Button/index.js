import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <Link to={props.url} className='py-2 px-5 md:px-3 bg-green-500 text-white rounded-lg hover:bg-green-400'>{props.text}</Link>
  )
}

export default Button