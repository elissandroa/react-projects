import { useState } from 'react'
import { Button } from './Button'
import './ImcCalc.css'

export const ImcCalc = ({ calcImc }) => {
    const [heigth, setHeigth] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (e) => {
        e.preventDefault();
        setWeight("");
        setHeigth("");
    }

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "");
    }

    const handleHeigthChange = (e) => {
        const updatedValues = validDigits(e.target.value);
        setHeigth(updatedValues);

    }

    const handleWeightChange = (e) => {
        const updatedValues = validDigits(e.target.value);
        setWeight(updatedValues);

    }
    return (
        <div id="calc-container">
            <h2>Calculadora de IMC</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="heigth">Altura:</label>
                        <input
                            type="text"
                            name='heigth'
                            id='heigth'
                            placeholder='Exemplo 1,75'
                            value={heigth}
                            onChange={(e) => handleHeigthChange(e)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="weight">Peso:</label>
                        <input
                            type="text"
                            name='weight'
                            id='weight'
                            placeholder='Exemplo 70,5'
                            value={weight}
                            onChange={(e) => handleWeightChange(e)}
                        />
                    </div>
                </div>
                <div className="action-controls">
                    <Button action={(e) => calcImc(e, weight, heigth)} id='calc-btn' text='Calcular' />
                    <Button action={clearForm} id='clear-btn' text='Limpar' />
                </div>
            </form>
        </div>
    )
}
