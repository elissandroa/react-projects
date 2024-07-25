import React from 'react'
import { Card } from './Card'

export const Board = ({cards}) => {
    return (
        <div className='board'>
            {cards.map((card) => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    )
}
