import React from "react";

function Time () {
    return(

        <h2>현재시간 : {new Date().toLocaleTimeString()}</h2>

    )
}

export default Time;