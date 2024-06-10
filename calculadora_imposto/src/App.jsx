import { useState } from "react";
import { TaxForm } from "./components/TaxForm"
import { TaxReport } from "./components/TaxReport"
import { Container, Typography } from '@mui/material';
import { validateYupSchema } from "formik";

function App() {

  const [taxData, setTaxData] = useState(null);

  const calculateTax = (value) => {
    let tax = 0;

    const income = parseFloat(value.income);

    if(income <= 10000){
      tax = income * 0.05;
    } else if (income <= 20000){
      tax = income * 0.1;
    }else {
      tax = income * 0.15;
    }
    const taxData = {
      ...value,
      tax,
    };

    setTaxData(taxData);
  };

  return (
    <div>
      <Container style={{ width: "800px", margin: "0 auto" }}>
        <Typography
          variant="h3"
          align="center"
          style={{ marginBottom: "16px" }}>
          Calculadora de Impostos
        </Typography>
        <TaxForm onSubmit={calculateTax} />
        {taxData && <TaxReport taxData={taxData} />}
      </Container>

    </div>
  )
}

export default App
