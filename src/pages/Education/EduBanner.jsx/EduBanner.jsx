import React from 'react'
import banner from "../../../../src/assets/ArtsandScience1.jpg";
import "./EduBanner.scss"
function EduBanner() {
  return (
    <div  id="edubanner"className='banner_wrap'>
        <img src={banner} alt="" />
      {/* <h3>BANNER</h3> */}
    </div>
  )
}

export default EduBanner
