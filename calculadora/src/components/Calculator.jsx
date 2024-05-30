import { useState } from 'react';
import './calculator.css';

const Calculator = () => {
    const keyPadNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const operations = ["+", "-", "*", "/"];

    const [currentValue, setCurrentValue] = useState("0");
    const [pendingOperation, setPendingOperation] = useState(null);
    const [pendingValue, setPendingValue] = useState(null);
    const [completeOperation, setCompleteOperation] = useState("");

    const handleClick = (val) => {
        setCurrentValue(prevValue => {
            if (prevValue === '0') {
                return val;
            } else {
               return prevValue + val;
            }
        });
        setCompleteOperation((prevOperation) => prevOperation + val);
    }

    const handleClear = () => {
        setCurrentValue("0");
        setPendingOperation(null);
        setPendingValue(null);
        setCompleteOperation("");
    }

    return (
        <div className="calculator">
            <div className="complete-operation">{completeOperation}</div>
            <div className="display">{currentValue}</div>
            <div className="buttons">
                <button onClick={() => handleClear()}>AC</button>
                {keyPadNumbers.map((num) => (
                    <button key={num} onClick={() => handleClick(num)}>{num}</button>
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