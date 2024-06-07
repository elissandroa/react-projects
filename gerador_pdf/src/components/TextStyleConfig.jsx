import React from 'react'

export const TextStyleConfig = ({
    fontSize,
    setFontSize,
    fontColor,
    setFontColor,
    isBold,
    setIsBold
}) => {
    return (
        <div className='textStyleConfig'>
            <label className='configLabel'>
                Font Size:
                <input type="text" className='input' value={fontSize} onChange={(e) => setFontSize(e.target.value)}/>
            </label>
            <label className='configLabel'>
                Font color:
                <input type="color" className='colorPicker'  value={fontColor} onChange={(e) => setFontColor(e.target.value)}/>
            </label>
            <label className='configLabel'>
                Bold:
                <input type="checkbox" value={isBold} onChange={(e) => setIsBold(e.target.value)}/>
            </label>
        </div>

    )
}
