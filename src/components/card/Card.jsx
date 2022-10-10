import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

const Card = ({ path, title, icon, details }) => {
    return (
        <div className="card">
            <Link to={path} className="card-link">
                <figure className="card-box">
                    <div className="card-header">
                        <h4>{title}</h4>
                        <p>{icon}</p>
                    </div>
                    <div className="card-details">
                        <p>{details}</p>
                    </div>
                </figure>
            </Link>
        </div>
    )
}

export default Card