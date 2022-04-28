// import React from 'react';
// import ReactDom from "react-dom";
// import { Navigate, Outlet } from 'react-router-dom';

// function PrivateRoute() {
//     const auth = null; // determine if authorized, from context or however you're doing it

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return auth ? <Outlet /> : <Navigate to="/login" />;
// }

// export default PrivateRoute;

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
