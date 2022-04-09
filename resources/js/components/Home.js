import React from "react";
import ReactDom from "react-dom";
import { Grid } from "@mui/material";
import Todo from "./Todo/Todo";
import { useCurrentTodoList, useGetTodoList } from "./Hook/TodoList";

function Home() {
    const {isLoading} = useGetTodoList();
    const toDoList = useCurrentTodoList();
    if (isLoading) return "Loading";
    return (
        <Grid container spacing={2}>
            {toDoList.map((toDo) => (
            <Grid item key={toDo.id} xs={6}>
                <Todo toDo={toDo} />
            </Grid>
            ))}
        </Grid>
    )
}

export default Home;
