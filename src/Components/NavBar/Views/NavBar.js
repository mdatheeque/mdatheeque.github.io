import React from 'react'
import "../../NavBar/Views/NavBar.css"
import Button from "../../Buttons/Views/Button"

export default function NavBar() {
    return (
        <React.Fragment>            
      {/*Flex Container for Nav*/} 
      <header className="navbar-flex-container">
        {/*Extra div to give margin when minimized*/} 
        <div className="navbar-flex-item">
          <Button BName="Home" BLink="#home" Btype="navbutton" />
        </div>
        <div className="navbar-flex-item">
          <Button BName="About" BLink="#home" Btype="navbutton" />
        </div>
        <div className="navbar-flex-item">
          <Button BName="Skill" BLink="#home" Btype="navbutton" />
        </div>
        <div className="navbar-flex-item">
          <Button BName="Works" BLink="#home" Btype="navbutton" />
        </div>
        <div className="navbar-flex-item">
          <Button BName="Contact" BLink="#home" Btype="navbutton" />
        </div>
      </header>
      </React.Fragment>
    );
}
