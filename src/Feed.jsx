import React, {useState, useEffect} from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import db from './firebase'
import {collection, getDocs} from 'firebase/firestore';

function Feed() {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, 'posts')

  useEffect(() => {
    getDocs(postsCollectionRef).then((snapshot) => 
      setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data() })))
      );
    }, []);

  return (
    <div className='feed'>
        <StoryReel/>
        <MessageSender/>
        
        {posts.map((post) => (
          <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image} />
        ))}
    </div>
  )
}

export default Feed