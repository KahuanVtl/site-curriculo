import './Header.css';
import logoIcone from '../../images/icone.svg';

function Header(){
    return(
        <div className="header-container">
            <img src={logoIcone} alt='' className='header-img' />
            <ul className="header-lista">
            <li className='header-li'><a className="header-link" href='/'>Home</a></li>
            <li className='header-li'><a className="header-link" href='/Projects'>Projetos</a></li>
            <li className='header-li'><a className="header-link" href='/About-Me'>Sobre Mim</a></li>
            </ul>
        </div>
    )
}
  
  
export default Header;