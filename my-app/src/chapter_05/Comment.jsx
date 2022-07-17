import React from 'react';
import commentStyle from './comment.css';

function Comment (props) {
    return (
        <div className="comment_wrap">
            <div className="name_wrap">
                <div className="name_box">{props.name}</div>
            </div>
            <div className="text_wrap">
                <div className="text_box">{props.text}</div>
            </div>
        </div>
    )

}

export default Comment;