import React from 'react'
import "./Home.css";
import Button from "../../Buttons/Views/Button";
import RoundButton from "../../Buttons/Views/RoundButton"

export default function Home() {
    return (
        // Home  - Entire viewport
        <div className="home">
            
            {/* Logo Container */}
            <div className="container">
                <img className="logo-animate" src={"/MyBrandLogo.svg"} alt="Logo"/>
            </div>


            {/*Contents */}
            <div className="Typewrite ">
                <p>Muhammed Atheeque</p>
                <p className="subtext">Designer | Developer</p>

            </div> 

            {/*Portfolio Button*/}
            <div className="button-parent">
                <Button BName="Portfolio" BLink="/port"/>
            </div> 

            {/* Round Buttons */}
            <ul className="socialMedia-button-list">
                <RoundButton BLink="https://www.instagram.com/na_muhammedatheeque/" Balttext="Instagram" Bimglink="./instagram.svg" />
                <RoundButton BLink="https://www.linkedin.com/in/muhammed-atheeque-a92b1398/" Balttext="Linkedin" Bimglink="./linkedin.svg" />
                <RoundButton BLink="https://dribbble.com/mdnama" Balttext="Dribble" Bimglink="./dribble.svg" />
                <RoundButton BLink="https://www.behance.net/mdatheeque" Balttext="Behnace" Bimglink="./behance.svg" />
            </ul>
        </div>
    )
}
