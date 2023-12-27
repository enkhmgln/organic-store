import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = (props) => {
  return (
    <Link className='px-1 hover:text-green-500 font-bold hover:cursor-pointer' to={props.link}>
      {props.text}
    </Link>
    )
}

export default MenuItem