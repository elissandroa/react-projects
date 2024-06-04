import { useState } from 'react'
import FotoAmpliada from './componentes/FotoAmpliada'
import FotoList from './componentes/FotoList'
import Searchbar from './componentes/Searchbar'
import { useEffect } from 'react'
import axios from 'axios';

function App() {

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [fotos, setFotos] = useState([]);
  const [fotoAmpliada, setFotoAmpliada] = useState(null);

  const fetchData = async (query, category) => {

    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKey,
        count: 10,
      },
    });
    setFotos(response.data);
    console.log(response.data);
    console.log(fotos);
  }

  useEffect(() => {
    fetchData(query, category);
  }, [])

  return (
    <div className='container'>
      <Searchbar />
      {fotos && <FotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada} />}
      {fotoAmpliada && <FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada} />}
    </div>
  )
}

export default App
