//Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { UserForm } from './components/UserForm'
import { ReviewForm } from './components/ReviewForm'
import { Thanks } from './components/Thanks'

//Hooks



//CSS
import './App.css'

function App() {

  return (
    <div className='app'>
      <div className="header">
        <h2>Deixe sua avaliação:</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <p>Passos</p>
        <form>
          <div className="inputs-container">
            <UserForm />
          </div>
          <div className="actions">
            <button>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button>
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
