import React, { useEffect, useState } from 'react'
import { Slide } from './Slide'
import { Indicators } from './Indicators'


export const Carousel = ({ imageUrls }) => {
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualChange, setManualChange] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      if(!manualChange){
        goNext();
      }
      setManualChange(false);
    },5000)

    return () => clearInterval(interval);
  },[manualChange, activeIndex.length])

  const  goNext = () => {
    setManualChange(true);
    setActiveIndex((prevIndex) => (prevIndex +1) % imageUrls.length);
  }

  const  goPrev = () => {
    setManualChange(true);
    setActiveIndex((prevIndex) => (prevIndex -1 + imageUrls.length) % imageUrls.length);
  }


  return (
    <div className='carousel'>
      {
        imageUrls.map((url, index) => (
          <Slide key={index} url={url} isActive={activeIndex === index} />
        ))
      }
      <Indicators activeIndex={activeIndex} length={imageUrls.length} />
      <button className='next' onClick={goNext}>Próximo</button>
      <button className='prev' onClick={goPrev}>Anterior</button>
    </div>
  )
}
