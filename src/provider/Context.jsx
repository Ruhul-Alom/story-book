import React, { createContext, useEffect, useState } from 'react'
import { axiosInstance } from '../axios/axiosInstence'
export const Context=createContext()
const ContextProvider = ({children}) => {
    const [blogs,setBlogs]=useState()
    useEffect(()=>{
        async function getPosts() {
            const response = await axiosInstance.get("/blogs");
           const data=await response.data
           setBlogs(data)
          }
          getPosts()
    },[blogs])
    async function deletePost(id) {
        const response = await axiosInstance.delete(`blogs/${id}`);
       const data=await response.data
      console.log("data deleted")
      }
    
const contextData={
blogs,
deletePost
}
  return (
    <Context.Provider value={contextData}>{children}</Context.Provider>
  )
}

export default ContextProvider