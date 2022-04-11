import { Box } from "@mui/system";
import React, { Component } from "react";
import ReactDom from "react-dom";
import Navigation from "./Nav/Navigation";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";


const client = new QueryClient();


function App() {
    return (
        <Box>
            <Navigation />
            <BrowserRouter>
                <QueryClientProvider client={client}>
                    <main className="m-5">
                        <Routes>
                            <Route path="/" exact element={<Home />} />
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
