import React from 'react'
import './card.css'

const Card = ({title, icon, details}) => {
  return (
    <div className="card">
        <figure className="card-box">
            <div className="card-header">
                <h4>{title}</h4>
                <p>{icon}</p>
            </div>
            <div className="card-details">
                <p>{details}</p>
            </div>
        </figure>
    </div>
  )
}

export default Card