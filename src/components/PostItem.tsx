import React from 'react';
import {postItemType} from "../App";

const PostItem = ({post,...props}:postItemType) => {
    return (
        <div>
            <div className='post'>
                <div className='post__content'>
                    <strong>{post.id}.{post.title}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
                <button className="post_btn">Delete post</button>
            </div>
        </div>
    );
};

export default PostItem;