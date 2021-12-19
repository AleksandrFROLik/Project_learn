import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


export type postType = {
    id: number,
    title: string,
    body: string,
}
export type postItemType = {
    post: postType,
    number: number
}

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'HTML', body: 'Description_One'},
        {id: 3, title: 'CSS', body: 'Description_Two'},
    ])

    // const [title, setTitle] = useState('')
    // const [body , setBody] = useState('')
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = () => {
        const newPost = {
            id: Date.now(),
            title: post.title,
            body: post.body,
        }
        setPosts([...posts, newPost])
        setPost({title: '', body: ''})
    }


    return (
        <div className="App">
            <form>
                <MyInput value={post.title}
                          placeholder='Name post'
                          onChange={e => setPost({...post, title: e.currentTarget.value})}
                />
                <MyInput value={post.body}
                          placeholder='Description post'
                          onChange={e => setPost({...post, body: e.currentTarget.value})}

                />
                <MyButton name='Add post'
                          callBack={addNewPost}

                />
            </form>
            <PostList
                posts={posts}
                title={'Post List'}
            />
        </div>
    );
}

export default App;
