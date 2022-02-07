import PostIdPage from "../../pages/PostIdPage";
import {Posts} from "../../pages/Posts";
import {About} from "../../pages/About";


export  const privatRoutes = [
    {path: '/about', element: About},
    {path: '/posts',  element: Posts},
    {path: '/posts/:id', element: PostIdPage}
]
