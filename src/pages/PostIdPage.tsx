import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../components/API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {

    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching(async (id:string) => {
        const response = await PostService.getById(id)
        setPost(response.data[params.id])
        console.log(response.data[params.id ])
    })

    useEffect(() => {
        //@ts-ignore
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            <h1>you opened page with ID = {params.id }</h1>
            {isLoading
                ? <Loader/>
                //@ts-ignore
                : <div>{post.id}. {post.title}</div>
            }

        </div>
    );
};

export default PostIdPage;