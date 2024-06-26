import { useEffect, useState } from "react";
import "./CurrencyConverter.css";
import axios from "axios";

const CurrencyConverter = () => {
  const [rates, setRates] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BRL");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://v6.exchangerate-api.com/v6/8229f5a2359ce40d224e9cd1/latest/USD"
      )
      .then((response) => {
        setRates(response.data.conversion_rates);
      })
      .catch((err) => err);
  }, []);

  useEffect(() => {
    if (rates) {
      const rateFrom = rates[fromCurrency] || 0;
      const ratesTo = rates[toCurrency] || 0;
      setConvertedAmount(parseFloat((amount / rateFrom) * ratesTo).toFixed(2));
    }
  }, [amount, rates, fromCurrency, toCurrency]);

  if (!rates) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="converter">
      <h2>Conversor de Moedas</h2>
      <input
        type="number"
        placeholder="Digite o valor"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <span>Selecione as moedas</span>
      {rates && (
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(rates).map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      )}

      <span>para</span>
      {rates && (
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(rates).map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      )}
      <h3>
        {convertedAmount} {toCurrency}
      </h3>
      <p>
        {amount} {fromCurrency} valem {convertedAmount} {toCurrency}
      </p>
    </div>
  );
};

export default CurrencyConverter;
