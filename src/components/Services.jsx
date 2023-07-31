import React from 'react'
import {Carousel} from "react-responsive-carousel"
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function Services() {
  return (
    <div className='services'>
    <Carousel
    infiniteLoop
    autoPlay
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    interval ={3000}>


<div>
    <img src={img1} alt="item2"/>
    <p className='legend'>FULLSTACK</p>
</div>

<div>
    <img src={img2} alt="item2"/>
    <p className='legend'>Peer-to-Peer Support</p>
</div>


    </Carousel>
    </div>
  )
}

export default Services