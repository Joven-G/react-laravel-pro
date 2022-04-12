import { AddCircle, Delete } from "@mui/icons-material";
import { Card, CardActions, CardContent, CardHeader, IconButton, List, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDeleteToDoMutateTask, useUpdateToDoMutateTask } from "../Hook/Todo";
import { useStoreToDoDetailMutateTask } from "../Hook/ToDoDetail";
import TodoDetail from "./TodoDatail";

function Todo(props) {
    const [timer, setTimer] = useState(null);

    let toDo = {
        id: props.toDo.id,
        title: props.toDo.title,
    };

    const { updateToDoMutation } = useUpdateToDoMutateTask();
    const eventUpdateTodo = (event) => {
        clearTimeout(timer);


        const newTimer = setTimeout(() => {
            let data = {
                ...toDo,
                title: event.target.value
            };
            updateToDoMutation.mutate(data);
        }, 500);

        setTimer(newTimer);
    }
    /**
     * 削除処理
     */
    const { deleteToDoMutation } = useDeleteToDoMutateTask();
    const eventDeleteTodo = (event) => {
        deleteToDoMutation.mutate(toDo);
    }

    /**
     * 追加処理
     */
    const { storeToDoDetailMutation } = useStoreToDoDetailMutateTask();
    const eventStoreTodoDetail = (event) => {
        storeToDoDetailMutation.mutate(toDo);
    }

    return (
        <Card>
            <TextField
                variant="standard"
                margin="dense"
                defaultValue={props.toDo.title}
                fullWidth
                onChange={eventUpdateTodo} />
            <CardContent>
                <List>
                    {props.toDo.to_do_details.map((detail) => {
                        return <TodoDetail key={detail.id} detail={detail} />;
                    })}
                </List>
            </CardContent>
            <CardActions>
                <IconButton
                    edge='start'
                    aria-label="add"
                    color="primary"
                    onClick={eventStoreTodoDetail}
                >
                    <AddCircle />
                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={eventDeleteTodo}
                >
                    <Delete />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Todo;
