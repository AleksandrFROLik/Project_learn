import React, {useEffect, useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModules from "./components/UI/MyModules/MyModules";
import MyButton from "./components/UI/button/MyButton";
import axios from "axios";
import PostService from "./components/API/PostService";
import Loader from "./components/UI/Loader/Loader";

export type postType = {
    id: number,
    title: string,
    body: string,
}

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'HTML', body: 'Description_One'},
        {id: 3, title: 'CSS', body: 'Description_Two'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [module, setModule] = useState(false)
    const [isPostLoading, setIsPostLoading] = useState(false)

    const sortedPost = useMemo(() => {
        if (filter.sort) {
            [...posts].sort((a, b) => (a[filter.sort]).localeCompare(b[filter.sort]))
        }
        return posts
    }, [posts, filter.sort])

    const sortAndSearchPost = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase())) // includes  это функция которая проверяет содержит ли строка записанную подстроку
    }, [filter.query, sortedPost])

    const addPost = (newPost: postType) => {
        setPosts([...posts, newPost])
        setModule(false)
    }

    useEffect(() => {
        fetchPost()
    },[])

    async function fetchPost() {
        setIsPostLoading(true)
        setTimeout(async ()=>{
            const posts = await PostService.getAll()
            setPosts(posts)
            setIsPostLoading(false)
        }, 3333)

    }

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
            {isPostLoading
                ? <div className='loader'><Loader/></div>
                :<PostList posts={sortAndSearchPost} title={'Post List'} remove={removePost}/>
            }

        </div>
    );
}

export default App;
