import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Count() {
    const count = <h1>値の受け渡しだよ！</h1>;
    return count;
}

export default Count;

if (document.getElementById('count')) {
    ReactDOM.render(<Count />, document.getElementById('count'));
}

