import React from 'react';
import samplevideo from "../../assets/amsdrone.mp4";
import "./video.scss"

function Video() {
  return (
    <div className='video-wrapper' style={{marginLeft:"7%"}}>
      <video className="vid" width="1300px" height="700px" autoPlay muted>
        <source src={samplevideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
