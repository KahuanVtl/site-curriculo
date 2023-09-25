import './Footer.css';
import linkedin from '../../images/linkedin.svg';
import facebook from '../../images/Facebook.svg';
import github from '../../images/github.svg';
import medium from '../../images/medium.svg';
import youtube from '../../images/Youtube.svg';
import whatsapp from '../../images/whatsapp.svg';
import email from '../../images/email.png'
import telefone from '../../images/telefone.png'

function Footer() {

    return (
        <div className='footer-container'>
            <div className='footer-container-blocs'>
                <div className='coluna'>
                    <h2 className='footer-container-h2'>Me contate por aqui!</h2>
                    <ul className='footer-container-ul-p1'>
                        <div className='footer-container-info'>
                            <img alt="" src={email} className='footer-container-images-p1' />
                            <li className='footer-container-li-p1'>kahuanvitelli@gmail.com</li>
                        </div>
                        <div className='footer-container-info'>
                            <img alt="" src={whatsapp} className='footer-container-images-p1' />
                            <li className='footer-container-li-p1'>(51) 9 9874-7003</li>
                            <img alt="" src={telefone} className='footer-container-images-p1' />
                        </div>
                        
                    </ul>
                </div>

                <div className='coluna'>
                    <h2 className='footer-container-h2'>Navegar</h2>
                    <ul className='footer-container-ul-p2'>
                        <a href='/' className='footer-container-li-p2'><li>Home</li></a>
                        <a href='/Projects' className='footer-container-li-p2'><li>Projetos</li></a>
                        <a href='/About-Me' className='footer-container-li-p2'><li>Sobre Mim</li></a>
                    </ul>
                </div>
                <div className='coluna'>
                    <h2 className='footer-container-h2'>Redes sociais</h2>
                    <ul className='footer-container-ul-p3'>
                        <a href='https://www.facebook.com/profile.php?id=100006714610546&locale=pt_BR'><img src={facebook} alt='Logo do Facebook' className='footer-container-images' /></a>
                        <a href='https://github.com/KahuanVtl'><img src={github} alt='Logo do Github' className='footer-container-images' /></a>
                        <a href='https://www.linkedin.com/in/kahuan-vitelli/'><img src={linkedin} alt='Logo do Linkedin' className='footer-container-images' /></a>
                        <a href='https://medium.com/@kahuanvitelli'><img src={medium} alt='Logo do Medium' className='footer-container-images' /></a>
                        <a href='https://www.youtube.com/@kahuanvitelli'><img src={youtube} alt='Logo do Youtube' className='footer-container-images' /></a>
                    </ul>
                </div>
            </div>
            <div className="footer-container-copyright">
                <h2 className='footer-title'>℗Todos os direitos do site reservados a Kahuan Vitelli</h2>
            </div>
        </div>
    )
}

export default Footer;