import React from 'react';
import PostItem from "./PostItem";
import {postType} from "../App";

type PostListType = {
    posts: postType[] ,
    title: string,
    remove: (post: postType)=>void
}

const PostList = ({posts, title, remove}: PostListType) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {
                posts.map((posts, index) =>
                    <PostItem
                        key={posts.id}
                        post={posts}
                        number={index + 1}
                        remove={remove}
                    />
                )
            }
        </div>
    );
};

export default PostList;