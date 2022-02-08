import { About } from "../../pages/About";
import PostIdPage from "../../pages/PostIdPage";
import {Posts} from "../../pages/Posts";



export  const privatRoutes = [
    {path: '/about', element: About},
    {path: '/posts',  element: Posts},
    {path: '/posts/:id', element: PostIdPage}
]
