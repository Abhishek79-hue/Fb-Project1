import { useState,useEffect } from 'react'
import ProfileHeader from './Components/ProfileHeader'
import AddPost from './Components/AddPost'
import FiterSection from './Components/FiterSection'
import PostCart from './Components/PostCart'
import { FacebookpostProvider } from './Context/FacekbookContext'
import axios from 'axios'

function App() {
  const[posts,setPosts]=useState([])

  useEffect(() => {
    let data= axios.get("http://139.59.47.49:4004/api/posts?limit=10&start=1&orderby=1").then((res) => {
         setPosts(res.data)
     })
 }, [])
    const addPost=(post)=>{
    setPosts((prev)=>[{id:Date.now(),...post},...prev])
  }
  const UpdatePost=(id,post)=>{
    setPosts((prev)=>posts.filter((PrevPost)=>PrevPost.id===id))
  }
  const deletePost=(id)=>{
    setPosts((prev)=>prev.filter((post)=>post.id!==id))
  }

  return (
    <>
 
<ProfileHeader/>
  <FacebookpostProvider value={{posts,UpdatePost,addPost,deletePost}}>
        <div>
    <AddPost/>
    <FiterSection/>
    {posts.map((post)=>(
      <div key={post.id}>
        <PostCart post={post}/>
        </div>
    ))}
    </div>
    </FacebookpostProvider>
  
    </>
  )
}

export default App
