import './App.css'
import { Form } from './components/Form'

function App() {

  return (
    <div className='bg-zinc-100 min-h-screen w-full flex flex-col items-center gap-6 pt-8'>
      <h1 className='font-bold text-3xl underline'>React Hook Form com Typescript</h1>
      <Form />
    </div>
  )
}

export default App
