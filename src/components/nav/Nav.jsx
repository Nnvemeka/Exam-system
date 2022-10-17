import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  let activeStyle = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    padding: '1.4rem 0 2rem 3rem',
    backgroundColor: '#ebfbee'
  };

  return (
    <nav className='nav'>
      <div className='nav-item'>
        <NavLink
          to={'/'}
          end
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          className="link"
        >
          <ion-icon class="nav-icon" name="home-outline"></ion-icon>
          <span className="nav-title">Dashboard</span>
        </NavLink>
      </div>

      <div className='nav-item'>
        <NavLink
          to={'/questions'}
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          className="link"
        >
          <ion-icon name="newspaper-outline" class="nav-icon"></ion-icon>
          <span className="nav-title">Questions</span>
        </NavLink>
      </div>

      <div className='nav-item'>
        <NavLink
          to={'/assessments'}
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          className="link"
        >
          <ion-icon name="list-outline" class="nav-icon"></ion-icon>
          <span className="nav-title">Assessments </span>
        </NavLink>
      </div>

      <div className='nav-item'>
        <NavLink
          to={'/candidates'}
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          className="link"
        >
          <ion-icon name="people-outline" class="nav-icon"></ion-icon>
          <span className="nav-title">Candidates</span>
        </NavLink>
      </div>

      <div className='nav-item'>
        <NavLink
          to={'/settings'}
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          className="link"
        >
          <ion-icon name="settings-outline" class="nav-icon"></ion-icon>
          <span className="nav-title">Settings</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav