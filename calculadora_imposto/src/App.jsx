import { useState } from "react";
import { TaxForm } from "./components/TaxForm"
import { TaxReport } from "./components/TaxReport"
import { Container, Typography } from '@mui/material';

function App() {

  const [taxData, setTaxData] = useState(null);

  return (
    <div>
      <Container>
        <Typography
          variant="h3"
          align="center"
          style={{ marginBottom: "16px" }}>
          Calculadora de Impostos
        </Typography>
        <TaxForm style={{ width: "800px", margin: "0 auto" }} />
        {taxData && <TaxReport />}
      </Container>

    </div>
  )
}

export default App
