import {useMemo} from "react";
import {postType} from "../../App";

type UseSortedPostsType = {
    posts: postType[],
    sort: string,
    query: string
}

export const useSortedPosts = ({posts, sort}: UseSortedPostsType) => {
    const sortedPost = useMemo( () => {
        if (sort) {
            [...posts].sort((a, b) => (a[sort]).localeCompare(b[sort]))
        }
        return posts
    }, [posts, sort])
    return sortedPost
}


export const usePosts = ({posts, sort, query}:UseSortedPostsType) => {
    //@ts-ignore
    const sortedPost = useSortedPosts(posts, sort)
    const sortAndSearchPost = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(query.toLowerCase())) // includes  это функция которая проверяет содержит ли строка записанную подстроку
    }, [query, sortedPost])
    return sortAndSearchPost
}