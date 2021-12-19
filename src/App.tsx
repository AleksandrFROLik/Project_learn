import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


 export type postType = {
    id:number,
    title:string,
    body: string,
}
export type postItemType = {
    post:postType
}

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'HTML', body: 'Description_One'},
        {id: 3, title: 'CSS', body: 'Description_Two'},
    ])
    return (
        <div className="App">
            <form>
                <MyInput/>
                <MyInput/>
               <MyButton name= 'Add post'/>
            </form>
         <PostList
             posts={posts}
             title={'Post List'}
         />
        </div>
    );
}

export default App;
