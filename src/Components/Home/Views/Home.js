import React from 'react'
import "./Home.css";

export default function Home() {
    return (
        <div className="home">
            <div className="container">
                <img src={"/MyBrandLogo.svg"} alt="Logo"/>
            </div> 
            <div className="Typewrite">
                <p>Welcome !</p>
            </div> 
            <div className="button-parent">
                <div className="button-child ">
                    <button  style={{width:"20vw"}}>Portfolio</button> 
                </div>
            </div> 
                <ul className="socialMedia-button-list">
                    <li className="list-container"><a href="www.instagram.com"><img src="./behance.svg" alt="behance" /></a></li>
                    <li className="list-container"><a href="www.instagram.com"><img src="./instagram.svg" alt="Instagram" /></a></li>
                    <li className="list-container"><a href="www.instagram.com"><img src="./linkedin.svg" alt="linkedin" /></a></li>
                    <li className="list-container"><a href="www.instagram.com"><img src="./dribble.svg" alt="dribble" /></a></li>
                </ul>

        </div>
    )
}
