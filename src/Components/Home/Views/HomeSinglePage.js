import React from 'react'
import "./HomeSinglePage.css"

const HomeSinglePage = () => {
    return (
      <div className="flex-container">
        <div id="home" className="type-words-container">
            <h1>Hello !!</h1>
            <h2>I'm Muhammed Atheeque.</h2>
            <h3>An unexpted Philomath !</h3>
        </div>
        <div className="svg-container">
          <object data="/Home_svg-01.svg" type="image/svg+xml" alt-text="svg">SVG</object>
        </div>
      </div>
    );
};

export default HomeSinglePage;