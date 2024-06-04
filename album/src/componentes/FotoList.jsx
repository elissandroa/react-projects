import Foto from './Foto';
const FotoList = ({ fotos }) => {
    if(!fotos){
        <p>Carregando...</p>
    }
    return (
        <div className='album'>
            {fotos.map((foto) => (
                <Foto key={foto.id} dados={foto} />
            ))}
        </div>
    )
}

export default FotoList