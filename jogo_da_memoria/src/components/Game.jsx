import React, { useState } from 'react'
import { Board } from './Board'

export const Game = () => {
    const shufleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const generateCards = () => {

        const values = ["A", "B", "C", "D", "E", "F", "G", "H"];

        const cards = values.map((value) => ({
            value,
            isFlipped: false,
        }));
        const duplicateCards = cards.concat([...cards]).map((card, index) => ({ ...card, index }));
        console.log(shufleArray(duplicateCards));

    }

    generateCards();
    const [cards, setCards] = useState(generateCards());
    const [flippedCards, setFlippedCards] = useState([]);
    const [chances, setChances] = useState(6);

    return (
        <div className='game'>
            <h3>Game</h3>
            <Board />
        </div>
    )
}
