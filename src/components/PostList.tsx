import React from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group"
import {postType} from "../pages/Posts";

type PostListType = {
    posts: postType[],
    title: string,
    remove: (post: postType) => void
}

const PostList = ({posts, title, remove}: PostListType) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: "center"}}>Posts not find</h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            <TransitionGroup>
                {
                    posts.map((posts, index) =>
                        <CSSTransition key={posts.id}
                                       timeout={500}
                                       classNames="post"
                        >
                            <PostItem post={posts} number={index + 1} remove={remove}/>
                        </CSSTransition>
                    )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;