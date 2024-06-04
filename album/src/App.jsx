import { useState } from 'react'
import FotoAmpliada from './componentes/FotoAmpliada'
import FotoList from './componentes/FotoList'
import Searchbar from './componentes/Searchbar'
import { useEffect } from 'react'

function App() {

  
  return (
    <div className='container'>
    <Searchbar />
    <FotoList />
    <FotoAmpliada />
    </div>
  )
}

export default App
