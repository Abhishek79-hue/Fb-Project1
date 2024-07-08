import React, { useState } from 'react';
import image from '../Images/Profile.jpeg';
import './AddPost.css';
import { useFacebookPost } from '../Context/FacekbookContext';
import axios from 'axios';

function AddPost() {
  const [post,setPost] = useState("");
  const [background,setBackground] = useState(""); // Changed to null for better initialization

  const { addPost } = useFacebookPost();

  const add = async(e) => {
    e.preventDefault()
    const fd = new FormData();
     fd.append("post",post)
     fd.append("background",background);
     console.log(post,background)

  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  try {
    const response = await axios.post("http://139.59.47.49:4004/api/post", fd, config);
    console.log(response);
    setPost("");
    setBackground(null);
  } catch (error) {
    console.error("Error uploading file:", error.response ? error.response.data : error.message);
  }
}

  return (
    <div className='container'>
      <div className="post-header">
        <img src={image} alt="Profile" className="profile-pic" />
        <button type="button" data-toggle="modal" data-target="#myModal" className="btn btn-default navbar-btn">
          <span>What's on your mind?</span>
        </button>
      </div>
      <div className='modal-container'>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Post</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="post-body">
                  <img src={image} alt="Profile" className="profile-pic" />
                </div>
                <input
                  type="text"
                  className='text-area'
                  onChange={(e) =>setPost(e.target.value)}
              
                  placeholder="What's on your mind?"
                />
                <input type="file" className="file-input" onChange={(e)=>setBackground(e.target.files[0])} />
                <img src={URL.createObjectURL(background)} className='post-image'/>
               
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={add}>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
