import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../components/API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {

    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        await PostService.getById(params.id)
            .then((res) => {
                setPost(res.data)
            })
    })

    const [fetchComments, isCommentsLoading, errorComments] = useFetching(async () => {
        await PostService.getCommentsByPostId(params.id)
            .then((res) => {
                setComments(res.data)
            })
    })

    useEffect(() => {
        //@ts-ignore
        fetchPostById(params.id)
        //@ts-ignore
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>you opened page with ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                //@ts-ignore
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Comments</h1>
            {isCommentsLoading
                ? <Loader/>
                //@ts-ignore
                : <div>
                    {
                        comments.map(com =>
                            <div key={com.id} style={{marginTop: '15px'}}>
                                <h5>{com.email}</h5>
                                <div>{com.body}</div>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    );
};

export default PostIdPage;