import React from 'react'

export const ImageUpload = () => {
    return (
        <div className="imagePuload">
            <label className='configLabel'>
                Upload Image:
                <input type="file" accept='image/*' className='fileInput' />
            </label>
        </div>
    )
}
