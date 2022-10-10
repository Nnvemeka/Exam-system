import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>Exam system</div>
        <div className='headerItems'>
            <div className='avatar'>
              <img src='./avatar.jpg' alt='avatar' className='header-img'/>
            </div>
            <div className='header-title'>Admin</div>
        </div>
    </div>
  )
}

export default Header