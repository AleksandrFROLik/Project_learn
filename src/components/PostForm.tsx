import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { postType } from '../pages/Posts';


type postFormType = {
    create: (newPost: postType) => void
}

const PostForm = ({create}: postFormType) => {
    const [post, setPost] = useState({title: '', body: ''})
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }
    return (
        <form>
            <MyInput value={post.title}
                     placeholder='Name post'
                     onChange={e => setPost({...post, title: e.currentTarget.value})}
            />
            <MyInput value={post.body}
                     placeholder='Description post'
                     onChange={e => setPost({...post, body: e.currentTarget.value})}

            />
            <MyButton onClick={addNewPost}>
                Add Post
            </MyButton>
        </form>
    );
};

export default PostForm;