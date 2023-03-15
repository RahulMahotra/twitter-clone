import React from 'react'
import {Avatar} from '@mui/material';
import './Post.css'

import VerifiedIcon from '@mui/icons-material/Verified'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IosShareIcon from '@mui/icons-material/IosShare';
import AutorenewIcon from '@mui/icons-material/Autorenew';

function Post({name, username, verified, text, avatar, image}) {
  return (
    <div className='post'>
      <div className="post__avatar">
        <Avatar src = {avatar}/> 
       </div> 
       <div className="post__body">
        <div className='post__header'>
            <div className='post__headerText'>
                <h3>{name}{" "}
                <span className='post__headerSpecial'> {verified && <VerifiedIcon className="post__badge"/>}
                {"  "}@{username}</span>
                </h3>
            </div>
            <div className='post__headerDescription'>
                <p>
                 {text}
                </p>
            </div>
        </div>
        <img alt=''src = {image} />
        <div className='post__footer'>
            <FavoriteBorderIcon className="post--icons"/>
            <ChatBubbleOutlineIcon className="post--icons"/>
            <AutorenewIcon className="post--icons"/>
            <IosShareIcon className="post--icons"/>
        </div>
       </div>    
    </div>
  )
}

export default Post
