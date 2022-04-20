import { IconButton, TableBody, TableCell, TableRow, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from "react";
import usePlayerUpdate from "../Hook/SportsPlayer/PlayerUpdate";

function PlayerList(props) {
    const [timer, setTimer] = useState(null);

    let playerLists = {
        id: props.player.id,
        name: props.player.name,
        num: props.player.num,
        position: props.player.position
    }

    const { updatePlayer } = usePlayerUpdate();

    const eventUpdatePlayer = (event) => {
        clearTimeout(timer);

        const newTimer = setTimeout(() => {
            let data = {
                ...playerLists,
                name: event.target.value
            }
            updatePlayer.mutate(data);
        }, 500);

        setTimer(newTimer);

    }
    return (
        <TableBody>
            <TableRow
                key={playerLists.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {playerLists.id}
                </TableCell>
                <TableCell align="right">
                    <TextField
                        variant="standard"
                        margin="dense"
                        defaultValue={playerLists.name}
                        fullWidth
                        onChange={eventUpdatePlayer}
                    />
                </TableCell>
                <TableCell align="right">{playerLists.num}</TableCell>
                <TableCell align="right">{playerLists.position}</TableCell>
                <TableCell align="right">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        </TableBody>
    );
}

export default PlayerList;
