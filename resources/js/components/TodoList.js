import React from 'react';

function TodoList(props) {

    const todo_list = props.items;

    return (
        <div className="todo-list mt-3">
            <h2>タスク一覧</h2>

            <ul>
                {
                    todo_list.map((todo, index) => {
                        return <li className="todo-item" key={index}>
                            <input type="checkbox" />
                            <span>{todo}</span>
                        </li>
                    })
                }
            </ul>

        </div>
    );
}

export default TodoList;
