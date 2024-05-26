import React, { useContext } from 'react'
import { axiosInstance } from '../../../axios/axiosInstence';
import { Context } from '../../../provider/Context';

const AddBlogs = () => {
    const {blogs,deletePost}=useContext(Context)
       const categories=["Business","Travel","Sports","Tech","Personal Devolopment","Food"]
      
        const handleCreatePost = async (e) => {
          e.preventDefault();
      
          const form = e.target;
      
          const id = blogs.length+1;
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
          await axiosInstance.post("blogs", postData);
          form.reset()
        };

        return (
          <div className="w-full lg:w-2/3 px-16">
            <h1 className="text-3xl font-semibold text-center mb-4">Add Post</h1>
            <form onSubmit={handleCreatePost} className="w-full">
              <div className="mb-4">
                <label htmlFor="" className='font-semibold lg:pl-5'>Title </label>
                <input type="text" name="title" className="w-full py-3 px-5 border rounded-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="" className='font-semibold lg:pl-5'>Author </label>
                <input
                  type="text"
                  name="author"
                  className="w-full py-3 px-5 border rounded-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className='font-semibold lg:pl-5'>Author Image </label>
                <input
                  type="text"
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
                <textarea name="content" className="w-full py-3 px-5 border rounded-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="" className='font-semibold lg:pl-5'>Blog Image </label>
                <input
                  type="text"
                  name="blogImage"
                  className="w-full py-3 px-5 border rounded-full"
                />
              </div>
              <div className="mb-4">
                <input
                  type="submit"
                  value={"Add Post"}
                  className="w-full btn py-3 px-5 border btn-neutral rounded-full"
                />
              </div>
            </form>
          </div>
    
  )
}

export default AddBlogs