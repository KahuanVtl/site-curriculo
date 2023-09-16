import './Header.css';

function Header(){
    return(
        <div className="header-container">
            <ul className="header-lista">
            <li><a className="header-link" href='/'>Home</a></li>
            <li><a className="header-link" href='/'>Projetos</a></li>
            <li><a className="header-link" href='/About-Me'>Sobre Mim</a></li>
            </ul>
        </div>
    )
}
  
  
export default Header;