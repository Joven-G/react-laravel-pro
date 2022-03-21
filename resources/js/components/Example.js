import React from 'react';

function Example() {
    const title = 'react入門';
    let text = 'reactはじめてみたよ！'
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">{title}</div>

                        <div className="card-body">{text}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

