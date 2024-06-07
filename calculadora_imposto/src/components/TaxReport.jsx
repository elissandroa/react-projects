import React from 'react'
import { Container, Typography } from '@mui/material'

export const TaxReport = () => {
  return (
    <Container>
        <Typography variant='h5'>Relatório de impostos</Typography>
        <Typography variant='body1'>Nome:</Typography>
        <Typography variant='body1'>Idade: anos</Typography>
        <Typography variant='body1'>Renda:</Typography>
        <Typography variant='body1'>Imposto a pagar:</Typography>
    </Container>
  )
}
