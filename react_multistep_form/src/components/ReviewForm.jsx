import React from 'react'
import './ReviewForm.css'

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

export const ReviewForm = () => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" name="review" value="unsatisfied" required />
          <BsFillEmojiFrownFill />
          <p>Instatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" name="review" value="neutral" required />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input type="radio" name="review" value="satisfied" required />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" name="review" value="very-satisfied" required />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" placeholder='Conte como foi sua experiência com o produto...' required></textarea>
      </div>
    </div>
  )
}
