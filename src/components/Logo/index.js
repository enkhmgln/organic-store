import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'


const Logo = () => {
  return (
    <Link className='text-2xl w-40' to='/'> 
    <img src={logo} alt='Лого' />
    </Link>
  )
}

export default Logo