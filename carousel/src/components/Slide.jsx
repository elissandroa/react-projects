import React from 'react'

export const Slide = ({url, isActive}) => {
  return (
    <div className={isActive ? 'slide active' : 'slide'}>
        <img src={url} />
    </div>
  )
}
