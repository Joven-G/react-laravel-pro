import { Delete } from "@mui/icons-material";
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

function TodoDetail(props) {
    return (
        <ListItem
            key={props.id}
            secondaryAction={
                <IconButton edge="end" aria-label="comments">
                    <Delete />
                </IconButton>
            }
            disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <Checkbox edge="start" />
                </ListItemIcon>
                <ListItemText primary={`Test TodoDetil ${props.id}`} />
            </ListItemButton>
        </ListItem>
    );
}

export default TodoDetail;
