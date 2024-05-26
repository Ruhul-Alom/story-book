import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import BlogDetails from "../pages/BlogDetails";
import AdminDashBoardLayout from "../components/layout/AdminDashBoardLayout";
import ManageAllPosts from "../components/ui/admin/ManageAllPosts";
import AddBlogs from "../components/ui/admin/AddBlogs";
import EditPost from "../components/ui/admin/EditPost";

export const routes=createBrowserRouter([
{
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
           path:"/blog/:id",
            element:<BlogDetails></BlogDetails>
        },
    ]
},
{
    path:"admin",
    element:<AdminDashBoardLayout></AdminDashBoardLayout>,
    children:[
        {
        index:true,
            element:<AddBlogs></AddBlogs>
        },
{
    path:"manage-posts",
    element:<ManageAllPosts></ManageAllPosts>
},
{
    path: "/admin/edit-post/:id",
    element: <EditPost />,
  },

    ]
}

])