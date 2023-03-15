import React, {useState} from 'react'
import { Avatar, Button } from '@mui/material';
import './TweetBox.css'

import db from "./firebase"
 
function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("")
  const[tweetImage, setTweetImage] = useState("")

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name : "LUFFY",
      username : "Pirate King",
      verified : true,
      text : tweetMessage,
      image : tweetImage,
      avatar : "https://staticg.sportskeeda.com/editor/2023/01/107fa-16729479671931-1920.jpg",
    })

    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__input">
            <Avatar src="
              https://staticg.sportskeeda.com/editor/2023/01/107fa-16729479671931-1920.jpg            
              " /> 
            <input 
              onChange={(e) => setTweetMessage(e.target.value)}
              value={tweetMessage}
              placeholder="what's on your mind ..." 
              type="text" />       
        </div>
        
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}  
          className = "tweetBox__imageInput"  
          placeholder='Enter image URL' 
          type="text" />   
        
        <Button 
          onClick={sendTweet}
          type="submit"
          className='tweetBox__tweetButton'> 
        TWEET 
        </Button>
      
      </form>
    </div>
  )
}

export default TweetBox


