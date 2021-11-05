import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <h1 className="navbar-brand" href="#">Full Stack Web Developer</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page" href="#">About</Link>
                </li>
                <li className="nav-item">
                <Link to="/projects" className="nav-link" href="#">Projects</Link>
                </li>
                <li className="nav-item">
                <Link to="/resume" className="nav-link" href="#">R&eacute;sum&eacute;</Link>
                </li>
                <li className="nav-item">
                <Link to="/contact" className="nav-link" href="#">Contact</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Nav