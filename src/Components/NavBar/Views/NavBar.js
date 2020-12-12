import React from 'react'
import "../../NavBar/Views/NavBar.css"

export default function NavBar() {
    return (
        <header className="NavBar" >
            <img src="" alt="Logo" className="Logo" />
            <nav className="Nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skiils">Skills</a>
                <a href="#works">Works</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}
