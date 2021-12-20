import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModules from "./components/UI/MyModules/MyModules";
import MyButton from "./components/UI/button/MyButton";


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

    const sortedPost = useMemo(() => {
        if (filter.sort) {
            [...posts].sort((a, b) => (a[filter.sort]).localeCompare(b[filter.sort]))
        }
        return posts
    }, [posts, filter.sort])

    const sortAndSearchPost = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query)) // includes  это функция которая проверяет содержит ли строка записанную подстроку
    }, [filter.query, sortedPost])

    const addPost = (newPost: postType) => {
        setPosts([...posts, newPost])
        setModule(false)
    }

    const removePost = (post: postType) => {
        setPosts(posts.filter(posts => posts.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton  name='Create Post' callBack={()=>setModule(true)}/>
            <MyModules visible={module} setVisible={setModule}>
                <PostForm create={addPost}/>
            </MyModules>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList posts={sortAndSearchPost} title={'Post List'} remove={removePost}/>
        </div>
    );
}

export default App;
