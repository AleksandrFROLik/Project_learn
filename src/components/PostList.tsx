import React from 'react';
import PostItem from "./PostItem";
import {postType} from "../App";

type PostListType = {
    posts: postType[],
    title: string
}

const PostList = ({posts, title}: PostListType) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {
                posts.map((posts, index) =>
                    <PostItem
                        key={posts.id}
                        post={posts}
                        number={index + 1}
                    />
                )
            }
        </div>
    );
};

export default PostList;