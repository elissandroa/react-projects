const categorias = [
  "Natureza",
  "Pessoas",
  "Tecnologia",
  "Animais",
  "Esportes"
]

const Searchbar = () => {
  return (
    <div className='search-bar'>
      <input type="text"  placeholder='Pesquisar fotos...' />
      <button>Pesquisar</button>
      <select>
        {categorias.map((categoria, index) => (
          <option value={categoria} key={index}>{categoria}</option>
        ))}
      </select>
    </div>
  )
}

export default Searchbar