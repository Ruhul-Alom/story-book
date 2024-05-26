import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../../../provider/Context'
import { axiosInstance } from '../../../axios/axiosInstence'
import swal from 'sweetalert'

const EditPost = () => {
 
    const {blogs,deletePost}=useContext(Context)
    const navigate=useNavigate()
    const categories=["Business","Travel","Sports","Tech","Personal Devolopment","Food"]
    const id=useParams()
    const blog=blogs.find(blog=>blog.id==id.id)
     const handleEditPost = async (e) => {
       e.preventDefault();
   
       const form = e.target;
       const title = form.title.value;
       const author = form.author.value;
       const authorImage=form.authorImage.value;
       const category = form.category.value;
       const content = form.content.value;
       const blogImage=form.blogImage.value;
       const postData = {
         id,
         title,
         author,
         authorImage,
         category,
         content,
         blogImage
       };
   console.log(postData)
  
       await axiosInstance.patch(`/blogs/${id.id}`, postData);
       swal("Post Has Been Edited!");
       navigate(`/admin/manage-posts`)

       form.reset()
     };

     return (
       <div className="w-full lg:w-2/3 px-16">
         <h1 className="text-3xl font-semibold text-center mb-4">Edit Post</h1>
         <form onSubmit={handleEditPost} className="w-full">
           <div className="mb-4">
             <label htmlFor="" className='font-semibold lg:pl-5'>Title </label>
             <input type="text" defaultValue={blog?.title} name="title" className="w-full py-3 px-5 border rounded-full" />
           </div>
           <div className="mb-4">
             <label htmlFor="" className='font-semibold lg:pl-5'>Author </label>
             <input
               type="text"
               defaultValue={blog?.author}
               name="author"
               className="w-full py-3 px-5 border rounded-full"
             />
           </div>
           <div className="mb-4">
             <label htmlFor="" className='font-semibold lg:pl-5'>Author Image </label>
             <input
               type="text"
               defaultValue={blog?.authorImage}
               name="authorImage"
               className="w-full py-3 px-5 border rounded-full"
             />
           </div>
           <div className="mb-4">
             <label htmlFor="" className='font-semibold lg:pl-5'>Cateogry </label>
             <select name="category" id="" className="w-full py-3 px-5 border rounded-full">
               {categories?.map((category) => (
                 <option  value={category}>
                   {category}
                 </option>
               ))}
             </select>
           </div>
   
           <div className="mb-4">
             <label htmlFor="" className='font-semibold lg:pl-5'>Description </label>
             <textarea name="content"  defaultValue={blog?.content} className="w-full py-3 px-5 border rounded-full" />
           </div>
           <div className="mb-4">
             <label htmlFor="" className='font-semibold lg:pl-5'>Blog Image </label>
             <input
               type="text"
               defaultValue={blog?.blogImage}
               name="blogImage"
               className="w-full py-3 px-5 border rounded-full"
             />
           </div>
           <div className="mb-4">
             <input
               type="submit"
               value={"Edit Post"}
               className="w-full btn py-3 px-5 border btn-neutral rounded-full"
             />
           </div>
         </form>
       </div>
     )
}

export default EditPost