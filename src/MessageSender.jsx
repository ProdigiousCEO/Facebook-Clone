import { Avatar } from '@material-ui/core'
import React, {useState} from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from './StateProvider'
import db from './firebase';
// import 'firebase/compat/firestore';
// import firebase from 'firebase/compat/app';
import { doc, addDoc } from "firebase/firestore";
import {collection, serverTimestamp} from 'firebase/firestore'



function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()

         await addDoc(collection(db, "posts"), {
            message: input,
            timestamp: serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput('')
        setImageUrl('')
    }

 
  return (
    <div className='messageSender'>
        <div className="messageSender_top">
            <Avatar src='https://i.imgur.com/73188BVl.jpg'/>
            <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='messageSender_input'
                placeholder={`What's On Your Mind?`}
                />
                <input 
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder='image URL (Optional)'/>

                <button onClick={handleSubmit} type='submit'>
                    Hidden Submit
                </button>
            </form>
        </div>

        <div className="messageSender_bottom">
            <div className="messageSender_option">
                <VideocamIcon style={{color: 'red'}} />
                <h3>Live Video</h3>
            </div>
            <div className="messageSender_option">
                <PhotoLibraryIcon style={{color: 'green'}} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender_option">
                <InsertEmotionIcon style={{color: 'yellow'}} />
                <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
  )
}

export default MessageSender