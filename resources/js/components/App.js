import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from "./TodoForm";
import TodoList from "./Todolist";
import Example from "./Example";

function App() {

    return (
        <div className="container">
            <Example />
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Todo App</div>

                    <div className="card-body">
                        <TodoForm />
                        <TodoList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
