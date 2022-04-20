import { Accordion, AccordionDetails, AccordionSummary, Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";
import PlayerList from "./PlayerList";



function sportList(props) {
    let sportLists = {
        title: props.list.title,
    };
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>{sportLists.title}</TableCell>
                        <TableCell align="right">name</TableCell>
                        <TableCell align="right">num</TableCell>
                        <TableCell align="right">position</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                {
                    props.list.players.map((player) => {
                        return <PlayerList key={player.id} player={player} />;
                    })
                }
            </Table>
        </TableContainer>
    );
}

export default sportList;
