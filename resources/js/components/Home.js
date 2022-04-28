import React from "react";
import ReactDom from "react-dom";
import { Box, Fab, Grid } from "@mui/material";
import Todo from "./Todo/Todo";
import { useCurrentTodoList, useGetTodoList } from "./Hook/TodoList";
import { useStoreToDoMutateTask } from "./Hook/Todo";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Navigation from "./Nav/Navigation";


/**スタイル */
const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
};

function Home() {

    /**
     * ToDo追加
     */
    const { storeToDoMutation } = useStoreToDoMutateTask();
    const eventStoreTodo = (event) => {
        storeToDoMutation.mutate();
    };

    const { isLoading } = useGetTodoList();
    const toDoList = useCurrentTodoList();
    if (isLoading) return "Loading";
    return (
        <Box>
            <Grid container spacing={2}>
                {toDoList.map((toDo) => (
                    <Grid item key={toDo.id} xs={6}>
                        <Todo toDo={toDo} />
                    </Grid>
                ))}
            </Grid>
            <Fab
                color='primary'
                aria-label="add"
                sx={fabStyle}
                onClick={eventStoreTodo}
            >
                <Add />
            </Fab>

        </Box>

    )
}

export default Home;
