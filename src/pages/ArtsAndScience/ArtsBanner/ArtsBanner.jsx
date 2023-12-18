import React from 'react'
import banner from "../../../assets/ArtsandScience1.jpg";
import "./ArtsBanner.scss"
function ArtsBanner() {
  return (
    <div id= "artsbanner" className='banner_wrap'> 
        <img src={banner} alt="" />
      
    </div>
  )
}

export default ArtsBanner
