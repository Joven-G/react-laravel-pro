import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";



function sportList(props) {
    console.log(props.list.id);
    let sportLists = {
        id: props.list.id,
        name: props.list.name,
        text: props.list.text,
    };

    return (
        <List>
            {
                sportLists.map((sports) => {
                    console.log(sports);
                    return (
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Checkbox />
                                </ListItemIcon>
                                <ListItemText>
                                    <li>{this.sports.id}</li>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    );
                })
            }
        </List>
    );
}

export default sportList;
