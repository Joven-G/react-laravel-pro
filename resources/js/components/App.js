import { Box } from "@mui/system";
import React, { Component } from "react";

import ReactDom from "react-dom";
import Navigation from "./Nav/Navigation";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";


function App() {
    return (
        <Box>
            <Navigation></Navigation>
            <Router>
                <div className="m-5">
                    <Routes>
                        <Route path="/" exact component={Home} />
                    </Routes>
                </div>
            </Router>
        </Box>
    )
}

export default App;

if (document.getElementById('react')) {
    ReactDom.render(<App />, document.getElementById('react'));
}
