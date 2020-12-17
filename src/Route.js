import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App"
import SinglePage from "./Components/SinglePage/Views/SinglePage"

function Routes() {
  return (    
    <BrowserRouter>
        <Switch>
        <React.Fragment>
            <Route exact path="/" component={App} />
            <Route exact path="/port" component={SinglePage} />
        </React.Fragment>                 
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;
