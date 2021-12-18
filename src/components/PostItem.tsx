import React from 'react';


type postType = {
    id:number,
    title:string,
    body: string,
}
type postItemType = {
    post:postType
}

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