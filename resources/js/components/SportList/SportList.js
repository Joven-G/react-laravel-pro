import { Accordion, AccordionDetails, AccordionSummary, Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";



function sportList(props) {
    console.log(props.list.id);
    let sportLists = {
        id: props.list.id,
        name: props.list.name,
        text: props.list.text,
    };

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{sportLists.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {sportLists.text}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default sportList;
