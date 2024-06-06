import React from 'react'

export const TextStyleConfig = () => {
    return (
        <div className='textStyleConfig'>
            <label className='configLabel'>
                Font Size:
                <input type="text" className='input' />
            </label>
            <label className='configLabel'>
                Font color:
                <input type="color" className='colorPicker' />
            </label>
            <label className='configLabel'>
                Bold:
                <input type="checkbox" />
            </label>
        </div>

    )
}
