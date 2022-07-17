import React from "react";
import Book from "./Book";

function Library (props) {
    return (
        <div>
            <Book name="1권" numOfPage="100" />
            <Book name="2권" numOfPage="200" />
            <Book name="3권" numOfPage="300" />
        </div>
    )
}

export default Library;