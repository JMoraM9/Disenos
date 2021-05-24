import React from 'react'
import './Loading.scss'

export const Loading = () => {
    return (
        <div className="load-bg">
            <img src="./logos/Logo-White.svg" alt="aaa" />
            <div className="dots-container">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}
