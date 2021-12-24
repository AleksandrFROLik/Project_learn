import React, {useEffect, useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModules from "./components/UI/MyModules/MyModules";
import MyButton from "./components/UI/button/MyButton";
import PostService from "./components/API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./components/hooks/useFetching";
import {usePosts} from "./components/hooks/usePosts";

export type postType = {
    id: number,
    title: string,
    body: string,
}

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [module, setModule] = useState(false)
    const sortAndSearchPost= usePosts(posts, filter.sort, filter.query)
    const [fetchPost, isPostLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll()
        setPosts(posts)
    })

    const addPost = (newPost: postType) => {
        setPosts([...posts, newPost])
        setModule(false)
    }

    useEffect(() => {
        //@ts-ignore
        fetchPost()
    }, [])

    const removePost = (post: postType) => {
        setPosts(posts.filter(posts => posts.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: "15px"}}
                      onClick={() => setModule(true)}>
                Create Post
            </MyButton>
            <MyModules visible={module} setVisible={setModule}>
                <PostForm create={addPost}/>
            </MyModules>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError &&
            <h1>Error... ${postError}</h1>
            }
            {isPostLoading
                ? <div className='loader'><Loader/></div>
                : <PostList posts={sortAndSearchPost} title={'Post List'} remove={removePost}/>
            }

        </div>
    );
}

export default App;
