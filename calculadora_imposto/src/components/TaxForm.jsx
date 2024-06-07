import React from 'react'
import { TextField, Button, Container } from '@mui/material'

export const TaxForm = () => {
    return (
        <Container>
            <form>
                <TextField
                    fullWidth
                    label="Nome"
                    name='nome'
                    style={{ marginBottom: "16px" }}
                />
                <TextField
                    fullWidth
                    label="Idade"
                    name='age'
                    type='number'
                    style={{ marginBottom: "16px" }}
                />
                <TextField
                    fullWidth
                    label="Renda"
                    name='income'
                    type='number'
                    style={{ marginBottom: "16px" }}
                />
                <Button type='submit' color='primary' variant='contained'>Calcular</Button>
            </form>
        </Container>
    )
}
