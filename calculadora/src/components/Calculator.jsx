import { useState } from 'react';
import './calculator.css';

const Calculator = () => {
    const keyPadNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const operations = ["+", "-", "*", "/"];

    return (
        <div className="calculator">
            <div className="complete-operation"></div>
            <div className="display"></div>
            <div className="buttons">
                <button>AC</button>
                {keyPadNumbers.map((num) => (
                    <button key={num}>{num}</button>
                ))}
                {
                    operations.map((operation) => (
                        <button key={operation}>{operation}</button>
                    ))
                }
                <button>=</button>
            </div>

        </div>
    )
}

export default Calculator