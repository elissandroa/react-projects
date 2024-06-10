import React from 'react'
import { Slide } from './Slide'
import { Indicators } from './Indicators'


export const Carousel = () => {
  return (
    <div className='carousel'>
      <Slide />
      <Indicators />
    </div>
  )
}
