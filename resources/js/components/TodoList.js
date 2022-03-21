import React from "react";

function TodoList() {
    return (
        <div className="todo-list mt-3">
            <h2>タスク一覧</h2>
            <ul>
                <li><input type="checkbox" /> あいうえお</li>
                <li><input type="checkbox" checked /> かきくけこ</li>
            </ul>
        </div>
    );
}

export default TodoList;
