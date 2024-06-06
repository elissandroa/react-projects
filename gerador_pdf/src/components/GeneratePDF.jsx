import React from 'react'
import { TextStyleConfig } from './TextStyleConfig'
import { ImageUpload } from './ImageUpload'

export const GeneratePDF = () => {
    return (
        <div className='container'>
            <label className='label'>
                Título:
                <input type="text" className='input' />
            </label>
            <label className='label'>
                Descrição:
                <input type="text" className='input' />
            </label>
            <TextStyleConfig />
            <ImageUpload />
            <button className='button'>Gerar PDF</button>
        </div>
    )
}
