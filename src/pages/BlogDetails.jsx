import React, { useContext } from 'react'
import BlogCard from '../components/ui/BlogCard'
import { useParams } from 'react-router-dom'
import { Context } from '../provider/Context'

const BlogDetails = () => {
  const {blogs}=useContext(Context)
  const id=useParams()
console.log(id)
  const blog=blogs.find(blog=>blog.id==id.id)
  console.log(blog)

  return (
    <div className='max-w-3xl mx-auto my-9'>
      <BlogCard blog={blog}></BlogCard>
    </div>
  )
}

export default BlogDetails