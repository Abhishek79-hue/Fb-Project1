import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./PostCart.css"
import Profile from '../Images/Profile.jpeg'
import { useFacebookPost} from '../Context/Index'

function PostCart(props) { 
    const{posts,setPost,setBackground,setEditId}=props
   

 const{deletePost}=useFacebookPost()

 const handledelete=async(posts)=>{
    try {
        await axios.delete(`http://139.59.47.49:4004/api/post/delete/${posts.id}`)
        
        deletePost(posts.id)
    } catch (error) {
        console.log("error")
    }
 }
 const handleEdit=async(id)=>{

try {
 const response=await axios.get(`http://139.59.47.49:4004/api/post/${id}`)
   setPost(response.data.post)
   setBackground(response.data.background)
   setEditId(id)
  } catch (error) {
    console.log("error")
  }
 }
    return (
        <div className='post-wrapper'>
                    <div className='post'>
                        <div className='post-header'>
                            <img src={Profile} className='profile-image' alt="Profile" />
                            <span className='profile-name'>John Doe</span>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                ...
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#"data-toggle="modal" data-target="#myModal" onClick={()=>handleEdit(posts.id)}>Edit</a>
                                    <a className="dropdown-item" href="#" onClick={()=>handledelete(posts)}>Delete</a>
                                </div>
                            </div>
                        </div>
                        <div className='post-body'>
                            <div className='post-image-container'>
                             <div className='post-text'>{posts.post}</div>
                                <img src={`http://139.59.47.49:4004/uploads/${posts.background}`}className='post-image' alt="Post" />
                                
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default PostCart
