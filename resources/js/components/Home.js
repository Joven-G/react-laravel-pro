import React from "react";
import ReactDom from "react-dom";
import { Grid } from "@mui/material";
import Todo from "./Todo/Todo";

function Home() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Todo />
            </Grid>

        </Grid>
    )
}

export default Home;
