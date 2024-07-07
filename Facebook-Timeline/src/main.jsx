import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddPost from './Components/AddPost.jsx'
import ProfileHeader from './Components/ProfileHeader.jsx'
import PostCart from './Components/PostCart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
