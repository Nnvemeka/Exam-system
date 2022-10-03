import React from 'react'
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import './layout.css'

const layout = () => {
    return (
        <div className='layout'>
            <div className='header-container'>
                <Header />
            </div>
            <div className='nav-container'>
                <Nav />
            </div>
            <div className='main-container'>Main</div>
            <div className='footer-container'>footer</div>
        </div>
    )
}

export default layout