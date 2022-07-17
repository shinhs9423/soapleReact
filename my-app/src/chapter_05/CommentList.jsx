import React from "react";
import Comment from "./Comment";

function CommentList (props) {
    return (
        <>
            <Comment name="일호" text="안녕하세요" />
            <Comment name="이호" text="반갑습니다" />
        </>
    )
}

export default CommentList;