import Button from '../Button';
import './Projects.css';

import Esquerda from './images/IMAGEM TV CELULAR.svg';
import Esquerda2 from './images/IMAGEM TV CELULAR 3.svg'
import Direita from './images/IMAGEM TV CELULAR 2.svg'

import reactIcon from '../../images/react.svg';
import htmlIcon from '../../images/html.svg';
import cssIcon from '../../images/css.svg';
import javascriptIcon from '../../images/javascript.svg';
import sassIcon from '../../images/sass.png';

function Projects() {
    return (
        <div className='projects-body'>
            <h2 className='projects-title'>Alguns de meus projetos</h2>
            <div>
                <div className='projects-container'>

                    <div className='projects-image'>
                        <img src={Esquerda} className='' alt='' />
                    </div>
                    <div className='projects-text'>
                        <h2 className='projects-text-title'>Organo</h2>
                        <p className='projects-text-p'>Uma poderosa ferramenta de organização de equipes, ideal tanto para ambientes de trabalho colaborativos quanto para intensas maratonas de programação. Desenvolva projetos com eficiência e promova noites de código memoráveis com facilidade!</p>
                        <div className='projects-text-icons'>
                            <img src={reactIcon} alt='Icone do React' className='projects-text-icons-img' /> <img src={htmlIcon} alt='Icone do HTML' className='projects-text-icons-img' /> <img src={cssIcon} alt='Icone do CSS' className='projects-text-icons-img' /> <img src={javascriptIcon} alt='Icone do JAVASCRIPT' className='projects-text-icons-img' />
                        </div>
                        <div className='projects-button-padding'>
                            <a href='/' className='projects-button'><Button></Button></a>
                        </div>
                    </div>

                </div>
                <div className='projects-container'>

                    <div className='projects-text'>
                        <h2 className='projects-text-title'>Alura Space</h2>
                        <p className='projects-text-p'>Alura Space é uma plataforma dedicada à exibição e compartilhamento de fotografias extraordinárias do espaço sideral. Explore imagens deslumbrantes de galáxias, nebulosas e fenômenos astronômicos, proporcionando uma visão única e cativante do universo.</p>
                        <div className='projects-text-icons'>
                            <img src={reactIcon} alt='Icone do React' className='projects-text-icons-img' /> <img src={htmlIcon} alt='Icone do HTML' className='projects-text-icons-img' /> <img src={sassIcon} alt='Icone do SASS' className='projects-text-icons-img' /> <img src={javascriptIcon} alt='Icone do JAVASCRIPT' className='projects-text-icons-img' />
                        </div>
                        <div className='projects-button-padding'>
                            <a href='/' className='projects-button'><Button></Button></a>
                        </div>
                    </div>
                    <div className='projects-image'>
                        <img src={Direita} className='' alt='' />
                    </div>

                </div>
                <div className='projects-container'>

                    <div className='projects-image'>
                        <img src={Esquerda2} className='' alt='' />
                    </div>
                    <div className='projects-text'>
                        <h2 className='projects-text-title'>Olá Mundo!</h2>
                        <p className='projects-text-p'>Meu inaugural site portfólio, construído com React e enriquecido por diversas bibliotecas, concebido principalmente para compartilhamento de blogs e experiências.</p>
                        <div className='projects-text-icons'>
                            <img src={reactIcon} alt='Icone do React' className='projects-text-icons-img' /> <img src={htmlIcon} alt='Icone do HTML' className='projects-text-icons-img' /> <img src={cssIcon} alt='Icone do CSS' className='projects-text-icons-img' /> <img src={javascriptIcon} alt='Icone do JAVASCRIPT' className='projects-text-icons-img' />
                        </div>
                        <div className='projects-button-padding'>
                            <a href='/' className='projects-button'><Button></Button></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects;