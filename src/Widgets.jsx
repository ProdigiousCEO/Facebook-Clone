import React from 'react'
import './Widgets.css'
function Widgets() {
  return (
    <div className='widgets'>
        <iframe
        title='Widget'
        src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&width=340&show_text=true&height=1500&appId'
        width='340'
        height='100%'
        style={{border: 'none', overflow: 'hidden'}}
        scrolling='no'
        frameBorder='0'
        allowtransparency='true'
        allow='encrypted-media'
        ></iframe>
    </div>
  )
}

export default Widgets;