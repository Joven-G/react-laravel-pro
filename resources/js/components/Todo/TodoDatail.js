import { Delete } from "@mui/icons-material";
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDeleteToDoDetailMutateTask, useUpdateToDoDetailMutateTask } from "../Hook/ToDoDetail";

function TodoDetail(props) {
    const [timer, setTimer] = useState(null);

    let toDoDetail = {
        id: props.detail.id,
        name: props.detail.name,
        completed_flag: props.detail.completed_flag,
        to_do_id: props.detail.to_do_id,
    };

    const { updateToDoDetailMutation } = useUpdateToDoDetailMutateTask();

    const eventUpdateTodoDetail = (event) => {
        clearTimeout(timer);

        const newTimer = setTimeout(() => {
            let data = {
                ...toDoDetail,
                name: event.target.value
            }
            updateToDoDetailMutation.mutate(data);
        }, 500);

        setTimer(newTimer);
    };

    const eventCheckTodoDetail = (event) => {
        let data = {
            ...toDoDetail,
            completed_flag: event.target.checked
        }
        updateToDoDetailMutation.mutate(data);
    };

    /**
     * 削除ボタンイベント
     */
    const { deleteToDoDetailMutation } = useDeleteToDoDetailMutateTask();
    const eventDeleteTodoDetail = (event) => {
        let data = {
            ...toDoDetail,
        }
        deleteToDoDetailMutation.mutate(data);
    };



    return (
        <ListItem
            key={props.detail.id}
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={eventDeleteTodoDetail}
                >
                    <Delete />
                </IconButton>
            }
            disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={props.detail.completed_flag}
                        onChange={eventCheckTodoDetail}
                    />
                </ListItemIcon>
                <TextField
                    variant="standard"
                    margin="dense"
                    defaultValue={props.detail.name}
                    fullWidth
                    onChange={eventUpdateTodoDetail}
                />
            </ListItemButton>
        </ListItem>
    );
}

export default TodoDetail;
