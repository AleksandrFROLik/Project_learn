import React, {useState} from 'react';
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title:'JavaScript', body:'Description'},
        {id: 2, title:'HTML', body:'Description_One'},
        {id: 3, title:'CSS', body:'Description_Two'},
    ])
    return (
        <div className="App">
           <PostItem post={{id: 1, title:'JavaScript', body:'Description'}}/>
           {/*<PostItem/>*/}

            {/*<Counter/>*/}
        </div>
    );
}

export default App;
