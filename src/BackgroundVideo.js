import React from 'react'
import video from './Design/Smoke - 58503.mp4'

function BackgroundVideo() {
    return (
      <div>
           <video autoPlay="autoPlay" muted loop="loop" id="myVideo">
  <source src={video} type="video/mp4"/>
</video> 
        </div>
    )
}

export default BackgroundVideo
