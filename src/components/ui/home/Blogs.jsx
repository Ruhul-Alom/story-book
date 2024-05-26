import React from 'react'
import BlogCard from '../BlogCard'

const Blogs = ({blogs}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
      {
        blogs?.map(blog=> <BlogCard key={blog.id} blog={blog}></BlogCard>)
      }
       
    </div>
  )
}

export default Blogs