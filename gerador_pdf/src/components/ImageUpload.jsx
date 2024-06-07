import React from 'react'

export const ImageUpload = ({ setImage, image }) => {

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImage(reader.result);
        }
    }

    return (
        <div className="imagePuload">
            <label className='configLabel'>
                Upload Image:
                <input
                    onChange={handleImageUpload}
                    type="file"
                    accept='image/*'
                    className='fileInput'
                />
            </label>
        </div>
    )
}
