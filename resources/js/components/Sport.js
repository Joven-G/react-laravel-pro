import React from "react";
import Grid from '@mui/material/Grid';
import { useCurrentSport, useGetSport } from "./Hook/Sports";
import SportList from "./SportList/SportList";

function Sport() {
    const { isLoading } = useGetSport();
    const sport = useCurrentSport();
    if (isLoading) return "ロード中....!";

    return (
        <div>
            <Grid container spacing={2}>
                {sport.map((sports) => (
                    <Grid item key={sports.id} xs={6}>
                        <SportList list={sports} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )


}


export default Sport;
