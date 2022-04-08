import React, { Component } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Example from "../pages/Example";

function Main() {
    return (
        <Router>
            <main className={"m-5"}>
                <Switch>
                    <Route path="/" exact component={Example} />
                </Switch>
            </main>
        </Router>
    );
}

export default Main;
// for <div id="main-employee"></div>
ReactDOM.render(<Main />, document.getElementById("app"));
