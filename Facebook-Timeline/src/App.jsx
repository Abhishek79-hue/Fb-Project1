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
    let data= axios.get("http://139.59.47.49:4004/api/posts?limit=10&start=1&orderby=0").then((res) => {
         setPosts(res.data)
     })
 }, [])
    const addPost=(post)=>{
    setPosts((prev)=>[{id:Date.now(),...post},...prev])
  }
  const UpdatePost = ({ id, post, background }) => {
    setPosts((prev) =>
      prev.map((PrevPost) =>
        PrevPost.id === id ? { ...PrevPost, post, background } : PrevPost
      )
    );
  };
  const deletePost=(id)=>{
    setPosts((prev)=>prev.filter((post)=>post.id!==id))
  }

  const [post,setPost] = useState("");
  const [background,setBackground] = useState(""); 
  const[editId,setEditId]=useState("")

  return (
    <>
 
<ProfileHeader/>
  <FacebookpostProvider value={{posts,UpdatePost,addPost,deletePost}}>
        <div>
    <AddPost post={post} background={background} setBackground={setBackground} setPost={setPost} editId={editId} setEditId={setEditId} />
    <FiterSection/>
    {posts.map((post)=>(
      <div key={post.id}>
        <PostCart posts={post} post={post} background={background} setBackground={setBackground} setPost={setPost} editId={editId} setEditId={setEditId}/>
        </div>
    ))}
    </div>
    </FacebookpostProvider>
  
    </>
  )
}

export default App
