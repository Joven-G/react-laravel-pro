import { Box } from "@mui/system";
import React from "react";
import ReactDom from "react-dom";
import Navigation from "./Nav/Navigation";

function App() {
    return (
        <Box>
            <Navigation></Navigation>

        </Box>
    )
}

export default App;

if (document.getElementById('react')) {
    ReactDom.render(<App />, document.getElementById('react'));
}
