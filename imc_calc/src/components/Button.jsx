import './Button.css'

export const Button = ({clearForm, text, id}) => {
  return (
    <button onClick={clearForm} id={id}>{text}</button>
  )
}
