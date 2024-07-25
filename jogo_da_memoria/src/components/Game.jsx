import React, { useState } from 'react'
import { Board } from './Board'
import { Card } from './Card';

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
        return shufleArray(duplicateCards);

    }

    generateCards();
    const [cards, setCards] = useState(generateCards());
    const [flippedCards, setFlippedCards] = useState([]);
    const [chances, setChances] = useState(6);

    const result = cards.filter((card) => card.isFlipped).length;

    return (
        <div className='game'>
            <h3>Game</h3>
            <Board cards={cards} />
            {chances === 0 ? (<p>Suas tentativas acabaram</p>) : (result === cards.length) ? (<h2>Parabéns você ganhou!</h2>) : (<p>você possui {chances} tentativa(s)</p>)}
            <button className='btn'>Reiniciar</button>
        </div>
    )
}
