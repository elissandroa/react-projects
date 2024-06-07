import { useState } from 'react'
import FotoAmpliada from './componentes/FotoAmpliada'
import FotoList from './componentes/FotoList'
import Searchbar from './componentes/Searchbar'
import { useEffect } from 'react'
import axios from 'axios';

const App = () => {

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [fotos, setFotos] = useState([]);
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  const [activateSearch, setActivateSearch] = useState(false);
  const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

  const fetchData = async (query, category) => {

    if (query || category) {
      let searchQuery = query || category;
      if (query && category) {
        searchQuery = `${query} ${category}`
      } else if (category) {
        searchQuery = category;
      }

      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          client_id: apiKey,
          query: searchQuery,
        },
      });
      setFotos(response.data.results);
      return;
    }
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKey,
        count: 12,
      },
    });
    setFotos(response.data);
    
  }

  useEffect(() => {
    fetchData(query, category);
  }, [])


  useEffect(() => {
    if (activateSearch) {
      fetchData(query, category);
      setActivateSearch(false);
    }
  }, [activateSearch])


  return (
    <div className='container'>
      <Searchbar
        setQuery={setQuery}
        setCategory={setCategory}
        setActiveteSearch={setActivateSearch}
      />
      {fotos &&
        <FotoList
          fotos={fotos}
          setFotoAmpliada={setFotoAmpliada}
        />}
      {fotoAmpliada &&
        <FotoAmpliada
          foto={fotoAmpliada}
          setFotoAmpliada={setFotoAmpliada}
        />}
    </div>
  )
}

export default App
