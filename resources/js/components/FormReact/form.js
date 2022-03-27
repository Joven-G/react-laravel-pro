import React from "react";
import ReactDOM from "react-dom";

function Form() {
    return (
        <div className="form">
            <div className="form-heder">
                <div className="col-md-8">
                    <div className="card-header">入力フォーム</div>
                </div>
            </div>
        </div>
    )
}

export default Form;
ReactDOM.render(<Form />, document.getElementById('form'));
