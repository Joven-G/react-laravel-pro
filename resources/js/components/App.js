import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {

    const test = ['test1', 'test2', 'test3'];

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">ToDo App</div>

                        <div className="card-body">
                            <TodoForm />
                            <TodoList items={test} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));
