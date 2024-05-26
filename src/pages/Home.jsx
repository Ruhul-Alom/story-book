import React, { useContext, useEffect, useState } from 'react'
import Hero from '../components/ui/home/Hero'
import Blogs from '../components/ui/home/Blogs'
import Trending from '../components/ui/home/Trending'
import { axiosInstance } from '../axios/axiosInstence'
import { Context } from '../provider/Context'


const Home = () => { 
  const {blogs}=useContext(Context)
  console.log(blogs)
  return (
    <div>
        {/* <Hero blogs={blogs} ></Hero> */}
        <Blogs blogs={blogs}></Blogs>
        {/* <Trending ></Trending> */}
    </div>
  )
}

export default Home