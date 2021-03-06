import React, {useEffect, useState} from 'react';
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModules from "../components/UI/MyModules/MyModules";
import MyButton from "../components/UI/button/MyButton";
import PostService from "../components/API/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../components/hooks/useFetching";
import {usePosts} from "../components/hooks/usePosts";
import {GetPageCount, getPagesArray} from "../components/utilse/getPageCount";
import Pagination from "../components/pagination/Pagination";
import MySelect from "../components/UI/mySelect/MySelect";


export type postType = {
    id: number,
    title: string,
    body: string,
}

export const Posts = () => {
    debugger
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [module, setModule] = useState(false)
    const sortAndSearchPost = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPage] = useState(0)
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    const [fetchPost, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = +(response.headers['x-total-count'])
        setTotalPage(GetPageCount(totalCount, limit))
    })


    useEffect(() => {
        //@ts-ignore
        fetchPost(limit, page)
    }, [page, limit])

    let pageArray = getPagesArray(totalPages)

    const addPost = (newPost: postType) => {
        setPosts([...posts, newPost])
        setModule(false)
    }

    const removePost = (post: postType) => {
        setPosts(posts.filter(posts => posts.id !== post.id))
    }

    const changePage = (page: number) => {
        setPage(page)
        //@ts-ignore
        fetchPost()
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
            <MySelect defaultValue='Many elements in page'
                      options={[
                {value:' 5', name: '5'},
                {value: '10', name: '10'},
                {value: '25', name: '25'},
                {value: '-1', name: 'all'},
                      ]}
                      value={(limit).toString()}
                      onChange={(value)=>setLimit(+(value))}/>

            {postError && <h1>Error... ${postError}</h1>}

            <PostList posts={sortAndSearchPost} title={'Post List'} remove={removePost}/>

            {isPostLoading && <div className='loader'><Loader/></div>}
            <Pagination pageArray={pageArray}
                        page={page}
                        changePage={changePage}
            />
        </div>
    );
}




