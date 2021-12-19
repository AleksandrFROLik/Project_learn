import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/mySelect/MySelect";
import MyInput from "./components/UI/input/MyInput";


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
    const [selected, setSelected] = useState<string>('')
    const [search, setSearch] = useState('')

    const sortedPost = useMemo(() => {
        if (selected) {
            //@ts-ignore
            [...posts].sort((a, b) => (a[selected]).localeCompare(b[selected]))
        }
        return posts
    }, [posts, selected])

    const sortAndSearchPost = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(search))
    }, [search, sortedPost])

    const addPost = (newPost: postType) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post: postType) => {
        setPosts(posts.filter(posts => posts.id !== post.id))
    }

    const sortPost = (sort: string) => {
        console.log(sort)
        setSelected(sort)
    }

    return (
        <div className="App">
            <PostForm create={addPost}/>
            <hr style={{margin: '15px 0'}}/>
            <MyInput placeholder='Search...'
                     value={search}
                     onChange={event => setSearch(event.currentTarget.value)}
            />

            <MySelect
                value={selected}
                onChange={sortPost}
                defaultValue="Sort for"
                options={[
                    {value: 'title', name: 'Sort for name'},
                    {value: 'body', name: 'Sort for description'}
                ]}
            />
            {sortAndSearchPost.length !== 0
                ? <PostList posts={sortAndSearchPost} title={'Post List'} remove={removePost}/>
                : <h1 style={{textAlign: "center"}}>Posts not find</h1>
            }

        </div>
    );
}

export default App;
