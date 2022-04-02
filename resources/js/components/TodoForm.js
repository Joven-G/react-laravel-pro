import React from 'react';

function TodoForm(props) {

    // const todo_q = props.item;

    return (
        <form>
            <h2>タスクの追加</h2>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    name="text"
                    autoComplete="off"
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary"
            >追加</button>
        </form>
    );
}

export default TodoForm;
