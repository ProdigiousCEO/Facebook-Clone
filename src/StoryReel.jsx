import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
  return (
    <div className='storyreel'>
      <Story
        img='https://i.imgur.com/JIFnT0h.png'
        profileSrc='https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4147a842e57e427ad44&v=4'
        title='Sonny Sangha'
      />
      <Story
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU'
        profileSrc='https://pbs.twimg.com/profile_images/806970003941527552/sF8UtACd_400x400.jpg'
        title='Rafeh Qazi'
      />
      <Story
        img='https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        profileSrc='https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630'
        title='Frankie'
      />
      <Story
        img='https://i.imgur.com/tqPMww3.jpg'
        profileSrc='https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635'
        title='Aaron Bernam'
      />
      <Story
        img='https://i.imgur.com/FePUmz9.png'
        profileSrc='http://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg'
        title='Naz'
      />
    </div>
  )
}

export default StoryReel