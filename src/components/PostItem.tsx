import React from 'react';
import {postItemType} from "../App";



const PostItem = ({post, number, ...props}:postItemType) => {
    return (
        <div>
            <div className='post'>
                <div className='post__content'>
                    <strong>{number}.{post.title}</strong>
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