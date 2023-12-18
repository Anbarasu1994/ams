import React from 'react'
import banner from "../../../../src/assets/ArtsandScience1.jpg";
import "./VellamalBanner.scss"
function VellamalBanner() {
  return (
    <div  id="vellamalbanner"className='banner_wrap'>
        <img src={banner} alt="" />
      {/* <h3>BANNER</h3> */}
    </div>
  )
}

export default VellamalBanner
