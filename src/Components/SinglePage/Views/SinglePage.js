import React from "react";
import About from "../../../Components/About/Views/About"
import Skills from "../../../Components/Skills/Views/Skills"
import Works from "../../../Components/Works/Views/Works"
import Contact from "../../../Components/Contact/Views/Contact"
import NavBar from "../../../Components/NavBar/Views/NavBar"
import HomeSinglePage from "../../../Components/Home/Views/HomeSinglePage"

const SinglePage = () => {
    return(
        <React.Fragment>
        <NavBar />
        <HomeSinglePage />
        <About />
        </React.Fragment>
    );
};

export default SinglePage;