import React from 'react';
import { postType} from "../App";
import MyButton from "./UI/button/MyButton";

export type postItemType = {
    post: postType,
    number: number,
    remove:( post: postType)=>void

}

const PostItem = ({post, number,remove, ...props}:postItemType) => {

    return (
        <div>
            <div className='post'>
                <div className='post__content'>
                    <strong>{number}.{post.title}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
                <MyButton  onClick={()=>remove(post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;