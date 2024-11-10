import './Banner.css';
import Medium from '../../images/medium.svg';
import Linkedin from '../../images/linkedin.svg';
import Github from '../../images/github.svg';

function Banner() {
    return (
        <div className="banner">
            <div className='banner-container'>
                <h1 className='banner-nome'>KAHUAN</h1>
                <div className='banner-sobrenome-imagens'>
                    <h2 className='banner-sobrenome'>VITELLI</h2>
                    <a href='https://github.com/KahuanVtl'><img src={Github} alt='Icone do Github' className='banner-imagem'></img></a>
                    <a href='https://www.linkedin.com/in/kahuan-vitelli/'><img src={Linkedin} alt='Icone do Linkedin' className='banner-imagem'></img></a>
                    <a href='https://medium.com/@kahuanvitelli'><img src={Medium} alt='Icone do Medium' className='banner-imagem'></img></a>
                </div>
            </div>
        </div>
    )
}

export default Banner;