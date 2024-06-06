import React, { useEffect, useState } from 'react'
import { Square } from './Square'

export const Board = () => {
    const [square, setSquare] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(true);
    const winner = calculateWinner(square);
    const [aiIsThink, setAiIsThink] = useState(false);

    const handleClick = (i) => {
        if (square[i] || winner || aiIsThink) return;

        const newSquares = square.slice();
        newSquares[i] = isNext ? "X" : "O";
        setSquare(newSquares);
        setIsNext(!isNext);
    }

    const resetGame = () => {
        setSquare(Array(9).fill(null));
        setIsNext(true);
    }

    useEffect(() => {
        if (!isNext && !winner) {
            setAiIsThink(true);

            setTimeout(() => {
                aiMove(square, setSquare, setIsNext);
                setAiIsThink(false);
            }, 1000)
        }
    }, [isNext, square, winner]);

    return (


        <div>
            <div className="status">
                Status:{" "}
                {winner ? (<p className='winner'>O vencedor é {winner}</p>
                ) : (`Próximo a jogar: ${isNext ? "X" : "O"}`)}
            </div>
            <div className="board-row">
                <Square value={square[0]} onClick={() => handleClick(0)} />
                <Square value={square[1]} onClick={() => handleClick(1)} />
                <Square value={square[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={square[3]} onClick={() => handleClick(3)} />
                <Square value={square[4]} onClick={() => handleClick(4)} />
                <Square value={square[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={square[6]} onClick={() => handleClick(6)} />
                <Square value={square[7]} onClick={() => handleClick(7)} />
                <Square value={square[8]} onClick={() => handleClick(8)} />
            </div>
            <button className='reset-button' onClick={resetGame}>Reiniciar jogo</button>
        </div>
    )
};


const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];

        }
    }
    return null;
}

const aiMove = (square, setSquare, setIsNext) => {
    let move = null;
    let indice = null;

    while (!move) {
        indice = Math.floor(Math.random() * square.length);
        if (!square[indice]) {
            move = indice;
            const newSquares = square.slice();
            newSquares[move] = "O";
            setSquare(newSquares);
            setIsNext(true);
        }
    }
}
