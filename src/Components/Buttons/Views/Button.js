import React from 'react'
import "./Button.css"

const Button = ({BName="Button Name",BLink="",Btype=""}) => {
    return(
        <div>
        {Btype === "navbutton" ? (
            <a className="button-nav" href={BLink}>{BName}</a>
        ) : (
        <a className="button" href={BLink}>{BName}</a>   
        )}
        </div>
    );
};

export default Button;