import React from 'react'

export const Indicators = ({ activeIndex, length }) => {
  return (
    <div className="indicators">
      {
        Array.from({ length }, (_, index) => (
          <div
            key={index}
            className={index === activeIndex ? "indicator active" : "indicator"}
          >
          </div>
        ))}
    </div>
  )
}
