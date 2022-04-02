import React from "react";
import ReactDOM from "react-dom";
import Text from "./formText";

function Form() {
    return (
        <div className="form">
            <div className="form-heder">
                <div className="col-md-8">
                    <div className="card-header">入力フォーム</div>
                    <div className="card-body">
                        <Text />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;
if (document.getElementById('form')) {
    ReactDOM.render(<Form />, document.getElementById('form'));
}

