import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

export const Navbar = () => {
    return (
    <div className="nav-container">
        <button className="hamburguer" id="hamburguer">
            &#9776;
        </button>
        <Link to="/inicio" className="logo-container">
            <img className="logo" src="./logos/Logo.svg" alt="Logo"/>
        </Link>
        <nav className="navbar">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li className="fact"><a href="/#">Facturación</a></li>
            </ul>
            <div className="separator"></div>
            <div className="user-info">
                <img className="notf" src="./logos/Union.svg" alt="bell" />
                <div className="profile-picture"></div>
                <a href="/#">Usuario</a>
                <img className="down-arrow" src="./logos/down_arrow.svg" alt="" />
            </div>
        </nav>
    </div>
    )
}
