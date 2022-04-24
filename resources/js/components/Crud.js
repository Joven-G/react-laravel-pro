
import Navigation from "./Nav/Navigation";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sport from "./Sport";
import axios from "axios";


const client = new QueryClient();

function Crud() {
    useEffect(() => {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/login', {
                email: 'rakuzan@exsample.com',
                password: '12345678',
            }).then(response => {
                console.log(response)
            })
        });
    }, [])

    return (
        <Box>
            <Navigation />
            <BrowserRouter>
                <QueryClientProvider client={client}>
                    <main className="m-5">
                        <Routes>
                            <Route path="/index" exact element={<Sport />} />
                        </Routes>
                    </main>
                    <ReactQueryDevtools></ReactQueryDevtools>
                </QueryClientProvider>
            </BrowserRouter>
        </Box>
    )
}

if (document.getElementById('crud')) {
    ReactDOM.render(<Crud />, document.getElementById('crud'));
}

