import React from 'react'
import "./NursingBanner.scss"
import banner from "../../../../src/assets/Nursing-clg/nursing_banner.jpg";

function NursingBanner() {
  return (
    <div  id="nursingbanner"className='banner_wrap'>
    <img src={banner} alt="" />
  {/* <h3>BANNER</h3> */}
</div>
  )
}

export default NursingBanner
