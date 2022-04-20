import React from "react";
import Grid from '@mui/material/Grid';
import { useCurrentSports, useGetSports } from "./Hook/Sports";
import SportList from "./SportList/SportList";

function Sport() {
    const { isLoading } = useGetSports();
    const sport = useCurrentSports();
    if (isLoading) return "ロード中....!";

    return (
        <div>
            <Grid container spacing={4}>
                {sport.map((sports) => (
                    <Grid item key={sports.id} xs={8}>
                        <SportList list={sports} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )


}


export default Sport;
