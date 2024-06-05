const categorias = [
  "Natureza",
  "Pessoas",
  "Tecnologia",
  "Animais",
  "Esportes"
]

const Searchbar = ({ setQuery, setCategory, setActiveteSearch }) => {
  return (
    <div className='search-bar'>
      <input type="text" placeholder='Pesquisar fotos...' onChange={(e) => setQuery(e.target.value)} />
      <button onClick={() => setActiveteSearch(true)}>Pesquisar</button>
      <select onChange={(e) => {
        setCategory(e.target.value);
        setActiveteSearch(true);
      }}>
        <option value="">Todas as Categorias...</option>
        {categorias.map((categoria) => (
          <option value={categoria} key={categoria}>{categoria}</option>
        ))}
      </select>
    </div>
  )
}

export default Searchbar