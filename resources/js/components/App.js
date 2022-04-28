import { Box } from "@mui/system";
import React, { Component, useEffect } from "react";
import ReactDom from "react-dom";
import Navigation from "./Nav/Navigation";

import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./Home";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Sport from "./Sport";
import Auth from "./Auth";


const client = new QueryClient();


function App() {
    // const Auth = () => {
    //     axios.get('/sanctum/csrf-cookie').then(response => {
    //         axios.post('/login', {
    //             email: 'rakuzan@exsample.com',
    //             password: '12345678',
    //         }).then(response => {
    //             console.log(response)
    //         })
    //     });
    // }
    // useEffect(() => {
    //     axios.get('/sanctum/csrf-cookie').then(response => {
    //         axios.post('/login', {
    //             email: 'rakuzan@exsample.com',
    //             password: '12345678',
    //         }).then(response => {
    //             console.log(response)
    //         })
    //     });
    // }, [])
    const shouldRedirect = true;
    return (
        <Box>
            <Navigation />
            <BrowserRouter>
                <QueryClientProvider client={client}>
                    <main className="m-5">
                        <Routes>
                            <Route path="/" exact element={<Home />} />
                            <Route path="/auth" exact element={<Auth />} />
                            {/* <Route path="/index" exact element={
                                shouldRedirect ? (
                                    <Navigate replace to="/home" />
                                ) : (
                                    <Sport />
                                )
                            } /> */}
                        </Routes>
                    </main>
                    <ReactQueryDevtools></ReactQueryDevtools>
                </QueryClientProvider>
            </BrowserRouter>
        </Box>
    )
}


export default App;

if (document.getElementById('react')) {
    ReactDom.render(<App />, document.getElementById('react'));
}
