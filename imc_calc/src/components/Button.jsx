import './Button.css'

export const Button = ({action, text, id}) => {
  return (
    <button onClick={action} id={id}>{text}</button>
  )
}
