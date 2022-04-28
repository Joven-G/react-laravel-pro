import React from "react"
import { Link } from "react-router-dom";

function Links() {
    return (

        <div>
            <hi>Sample Sport</hi>
            <nav>
                <ul>
                    <li><Link to="index">sportへ</Link></li>
                    <li><Link to="page2">anozer</Link></li>
                </ul>
            </nav>
        </div>


    )
}

export default Links;
