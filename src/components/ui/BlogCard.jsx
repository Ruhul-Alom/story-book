import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({blog}) => {
    const {id,title,author,authorImage,blogImage,content,date,category}=blog
  return (
    <Link to={`/blog/${id}`} className="card  rounded-none p-3 bg-base-100 shadow-xl">
    <figure><img className=' h-52 rounded-md' src={blogImage} alt="Shoes" /></figure>
    <div className="card-body pl-0">
    <p className="font-semibold pr-3">{category} <span>{date}</span></p>
        <h1 className="text-lg font-bold">{title} </h1>
        <p className="py-2">{content}.</p>
        <div className="flex gap-4  avatar ">
    <div className=" w-12 h-12 rounded-full">
      <img src={authorImage} />
    </div>
    <div>
        <h2 className='font-semibold pr-3'>{author}</h2>
    </div>
  </div>
      </div>
    </Link>
  
  )
}

export default BlogCard