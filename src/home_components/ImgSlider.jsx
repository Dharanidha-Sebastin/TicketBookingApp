import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import '../css/home_components_css/ImgSlider.css'

const images = [
    { url: "https://www.tnstc.in/images/slider/tn_slider01.jpg" },
    { url: "https://www.tnstc.in/images/slider/tn_slider02.jpg" },
    { url: "https://www.tnstc.in/images/slider/tn_slider03.jpg" },
   
  ];
  
const ImgSlider = () => {
    return (
      <div className='ImgSlider-component'>
        <SimpleImageSlider
          width={600}
          height={350}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={3.0}
        />
      </div>
    );
  }
  



export default ImgSlider
