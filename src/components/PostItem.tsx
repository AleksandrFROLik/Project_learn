import React from 'react';
import {postType} from "../pages/Posts";
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

export type postItemType = {
    post: postType,
    number: number,
    remove: (post: postType) => void
}

const PostItem = ({post, number, remove, ...props}: postItemType) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className='post'>
                <div className='post__content'>
                    <strong>{post.id}.{post.title}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
                <div className='post__btns'>
                    <MyButton onClick={() => navigate(`/posts/${post.id}`)}>
                    Open
                </MyButton>
                    <MyButton onClick={() => remove(post)}>
                        Delete
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;