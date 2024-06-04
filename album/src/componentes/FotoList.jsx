import Foto from './Foto';
import FotoAmpliada from './FotoAmpliada';
const FotoList = ({ fotos, setFotoAmpliada }) => {
    if(!fotos){
        <p>Carregando...</p>
    }
    return (
        <div className='album'>
            {fotos.map((foto) => (
                <Foto key={foto.id} dados={foto}  setFotoAmpliada={setFotoAmpliada} />
            ))}
        </div>
    )
}

export default FotoList