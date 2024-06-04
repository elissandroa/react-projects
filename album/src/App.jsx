import { useState } from 'react'
import FotoAmpliada from './componentes/FotoAmpliada'
import FotoList from './componentes/FotoList'
import Searchbar from './componentes/Searchbar'
import { useEffect } from 'react'
import axios from 'axios';

function App() {

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const fetchData = async (query, category) => {
    
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKey
      },
    });
    console.log(response);
  }

  useEffect(() => {
    fetchData(query, category);
  }, [])

  return (
    <div className='container'>
      <Searchbar />
      <FotoList />
      <FotoAmpliada />
    </div>
  )
}

export default App
