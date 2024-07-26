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
        const duplicateCards = cards.concat([...cards]).map((card, index) => ({ ...card, id: index }));
        return shufleArray(duplicateCards);

    }

    generateCards();
    const [cards, setCards] = useState(generateCards());
    const [flippedCards, setFlippedCards] = useState([]);
    const [chances, setChances] = useState(6);

    const result = cards.filter((card) => card.isFlipped).length;

    const handleCardClick = (clickedCard) => {

        if (chances === 0) return;
        if (clickedCard === 2) return;

        const newCards = cards.map((card) => {
            return card.id === clickedCard.id ? { ...card, isFlipped: true } : card;
        });

        setCards(newCards);
        setFlippedCards([...flippedCards, clickedCard]);

        if (flippedCards.length === 1) {
            setTimeout(() => {
                const [firstCard] = flippedCards;
                if (firstCard.value !== clickedCard) {
                    const resetCards = cards.map((card) => {
                      return card.id === firstCard.id || card.id === clickedCard.id
                            ? { ...card, isFlipped: false }
                            : card;
                    })
                    setCards(resetCards);
                    setChances((prev) => prev - 1);

                }

                setFlippedCards([]);
            }, 600);
        }
    }

    return (
        <div className='game'>
            <h3>Game</h3>
            <Board cards={cards} onCardClick={handleCardClick} />
            {chances === 0 ? (<p>Suas tentativas acabaram</p>) : (result === cards.length) ? (<h2>Parabéns você ganhou!</h2>) : (<p>você possui {chances} tentativa(s)</p>)}
            <button className='btn'>Reiniciar</button>
        </div>
    )
}
