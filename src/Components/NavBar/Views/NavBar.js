import React from 'react'
import "../../NavBar/Views/NavBar.css"
import Button from "../../Buttons/Views/Button"

export default function NavBar() {

    return (
      <React.Fragment>
        {/*Appear and disappear of mob menu when checked and unchecked*/}
        <input type="checkbox" id="menu" />
        <label htmlFor="menu" className="icon">
          <div className="menu"></div>
        </label>

        {/*Flex Container for Nav*/}
        <nav className="navbar-flex-container" id="mobMenu">
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
        </nav>
      </React.Fragment>
    );
}
