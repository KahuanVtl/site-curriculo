import Banner from '../Banner';
import Perfil from '../../images/Imagem.svg';

function HomeInitial(){
    return (
        <div className="HomeInitial-div">
            <div className='resume-image'>
                <img src={Perfil} alt='Autor Foto Perfil'></img>
            </div>
            <Banner />
        </div>
    );
}

export default HomeInitial;