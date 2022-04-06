import { Card, CardContent, CardHeader, List } from "@mui/material";
import React from "react";
import TodoDetail from "./TodoDatail";

function Todo() {
    return (
        <Card>
            <CardHeader title="Test todo" />
            <CardContent>
                <List>
                    {[0, 1, 2, 3].map((value) => {
                        return <TodoDetail id={value} />;
                    })}
                </List>
            </CardContent>
        </Card>
    )
}

export default Todo;
