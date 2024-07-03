//Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { UserForm } from './components/UserForm'
import { ReviewForm } from './components/ReviewForm'
import { Thanks } from './components/Thanks'

//Hooks
import { useForm } from './hooks/useForm'

//CSS
import './App.css'
import { Steps } from './components/Steps'
import { useState } from 'react'

type formFields = {
  name: string,
  email: string,
  review: string,
  comment: string
}


const formTemplate: formFields = {
  name: "",
  email: "",
  review: "",
  comment: ""
}

function App() {

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => {
      return {...prev, [key]:value}
    })
  }

  const formComponents = [
    <UserForm data={data}  updateFieldHandler={updateFieldHandler}/>,
    <ReviewForm />,
    <Thanks />,
  ]

  const { currentStep, currentComponent, changeStep } = useForm(formComponents);




  return (
    <div className='app'>
      <div className="header">
        <h2>Deixe sua avaliação:</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            <button type='button' onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type='submit'>
              <span>Avancar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
