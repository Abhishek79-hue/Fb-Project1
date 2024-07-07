import { useState,useEffect } from 'react'
import ProfileHeader from './Components/ProfileHeader'
import AddPost from './Components/AddPost'
import FiterSection from './Components/FiterSection'
import PostCart from './Components/PostCart'
import { FacebookpostProvider } from './Context/FacekbookContext'
import axios from 'axios'

function App() {
  const[posts,setPost]=useState([])

  useEffect(() => {
    let data= axios.get("http://139.59.47.49:4004/api/posts?limit=10&start=1&orderby=1").then((res) => {
         console.log(res.data)
         setPost(res.data)
     })
 }, [])
  const addPost=(post)=>{
    setPost((prev)=>[{id:Date.now(),...post},...prev])
  }
  const deletePost=(id)=>{
    setPost((prev)=>prev.filter((post)=>post.id!==id))
  }

  return (
    <>
 
<ProfileHeader/>
  
    
      <FacebookpostProvider value={{posts,addPost,deletePost}}>
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
