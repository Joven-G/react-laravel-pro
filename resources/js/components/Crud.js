
import Navigation from "./Nav/Navigation";
import { Box } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sport from "./Sport";


const client = new QueryClient();

function Crud() {
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

