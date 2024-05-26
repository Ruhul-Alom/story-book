import React, { useContext } from 'react'
import { Context } from '../../../provider/Context'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
const ManageAllPosts = () => {
    const navigate=useNavigate()
    const {blogs,deletePost}=useContext(Context)
    const handeleEditPost=(id)=>{
        swal({
            title: "Are you sure?",
            text: "You want to edit!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willEdit) => {
            if (willEdit) {
                navigate(`/admin/edit-post/${id}`)
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }
    const handeleDeletePost=(id)=>{
        swal({
            title: "Are you sure?",
            text: "You want to edit!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                deletePost(id)
              swal(" file has been Deleted!", {
                icon: "success",
              });
            } else {
              swal("Your  file is safe!");
            }
          });
        }
  return (
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>
           Id
          </th>
          <th>Tittle</th>
          <th>Writer</th>
          <th>Action</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        {
            blogs?.map(blog=><tr>
                <th>
                {blog.id}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={blog.blogImage} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{blog.title}</div>
                      <div className="text-sm opacity-50">{blog.content.slice(0,25)}</div>
                    </div>
                  </div>
                </td>
                <td className="text-xs" >
        {blog.author}
                 
                </td>
                <th>
                <button onClick={()=>handeleEditPost(blog.id)}  className="btn btn-ghost btn-xs">Edit</button>
                  <button onClick={()=>handeleDeletePost(blog.id)} className="btn btn-ghost btn-xs">delete</button>
                </th>
              </tr>)
        }
        
      </tbody>
     
      
    </table>
  </div>
  )
}

export default ManageAllPosts