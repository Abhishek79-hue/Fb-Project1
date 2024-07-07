import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./PostCart.css"
import Profile from '../Images/Profile.jpeg'
import { useFacebookPost} from '../Context/Index'

function PostCart({post}) {

 const{deletePost}=useFacebookPost()
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
                                    <a className="dropdown-item" href="#"data-toggle="modal" data-target="#myModal" >Edit</a>
                                    <a className="dropdown-item" href="#" onClick={()=>deletePost(post.id)}>Delete</a>
                                </div>
                            </div>
                        </div>
                        <div className='post-body'>
                            <div className='post-image-container'>
                             <div className='post-text'>{post.post}</div>
                                <img src={"http://139.59.47.49:4004/1720000491685.jpeg"} className='post-image' alt="Post" />
                                
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default PostCart
