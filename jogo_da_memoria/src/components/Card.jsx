import React from 'react'

export const Card = ({card}) => {
  return (
    <div className={`card ${card.isFlipped ? "flipped" : ""}`}>
        {card.isFlipped ? card.value : "?"}
    </div>
  )
}
