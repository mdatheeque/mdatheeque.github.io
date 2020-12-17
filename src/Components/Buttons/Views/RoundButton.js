import React from 'react';
import "./RoundButton.css"

const RoundButton = ({Bimglink="",Balttext="",BLink=""}) => {
    return(
        <li className="list-container container-trans"><a href={BLink} target="_blank" rel="noopener noreferrer"><img src={Bimglink} alt={Balttext} /></a></li>
    );
};

export default RoundButton;