import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav-item'>
        <Link to={'/'} className="link">
          <ion-icon class="nav-icon" name="home-outline"></ion-icon>
          <span className="nav-title">Dashboard</span>
        </Link>
      </div>

      <div className='nav-item'>
        <Link to={'/questions'} className="link">
          <ion-icon name="newspaper-outline" class="nav-icon"></ion-icon>
          <span className="nav-title">Questions</span>
        </Link>
      </div>

      <div className='nav-item'>
        <Link to={'/assessments'} className="link">
          <ion-icon name="list-outline" class="nav-icon"></ion-icon>
          <span className="nav-title">Assessments </span>
        </Link>
      </div>

      <div className='nav-item'>
        <Link to={'/candidates'} className="link">
          <ion-icon name="people-outline" class="nav-icon"></ion-icon>
          <span className="nav-title">Candidates</span>
        </Link>
      </div>

      <div className='nav-item'>
        <Link to={'/settings'} className="link">
          <ion-icon name="settings-outline" class="nav-icon"></ion-icon>
          <span className="nav-title">Settings</span>
        </Link>
      </div>
    </div>
  )
}

export default Nav