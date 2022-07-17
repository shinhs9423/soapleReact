import ReactDOM from "react-dom";
import React from "react";
import Time from "./Time";

function Clock () {

    setInterval(()=>{
        ReactDOM.render(
            <div className="clock">
                <h1>시계</h1>
                <Time />
            </div>
            , document.getElementById('root')
        );
    },1000);
}

export default Clock;