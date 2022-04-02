import React from "react";
import ReactDOM from "react-dom";





class FormClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'ばばちゃん',
        };
    }

    // handleSubmit(event) {
    //     // デフォルトの挙動をキャンセル
    //     event.preventDefault();

    //     this.setState({
    //         name: '',
    //         names: this.state.names.concat([this.state.name]),
    //     });
    // }

    render() {
        const name = this.state.name;
        return (
            <form>
                <input type='text' name='name' defaultValue='' />
                <button type="submit">入力</button>

                <div>
                    <h1>現在のカウントは{name}です</h1>
                    <h1>どうですか！</h1>
                </div>
            </form>
        );
    }
}

export default FormClass;
if (document.getElementById('react_test')) {
    ReactDOM.render(<FormClass />, document.getElementById('react_test'));
}

