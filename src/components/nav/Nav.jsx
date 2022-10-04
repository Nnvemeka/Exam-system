import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav-item'>
        <ion-icon class="nav-icon" name="home-outline"></ion-icon>
        <div className="nav-title">Dashboard</div>
      </div>

      <div className='nav-item'>
        <ion-icon name="newspaper-outline" class="nav-icon"></ion-icon>
        <div className="nav-title">Questions</div>
      </div>

      <div className='nav-item'>
        <ion-icon name="list-outline" class="nav-icon"></ion-icon>
        <div className="nav-title">Assessments </div>
      </div>

      <div className='nav-item'>
        <ion-icon name="people-outline" class="nav-icon"></ion-icon>
        <div className="nav-title">Candidates</div>
      </div>

      <div className='nav-item'>
        <ion-icon name="settings-outline" class="nav-icon"></ion-icon>
        <div className="nav-title">Settings</div>
      </div>
    </div>
  )
}

export default Nav