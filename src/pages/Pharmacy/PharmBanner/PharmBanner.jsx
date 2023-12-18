import React from 'react'
import banner from "../../../../src/assets/pharmacy banner.jpg";
import "./PharmBanner.scss"
function PharmBanner() {
  return (
    <div  id="pharmbanner"className='banner_wrap'>
        <img src={banner} alt="" />
      {/* <h3>BANNER</h3> */}
    </div>
  )
}

export default PharmBanner
