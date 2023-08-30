import Button from '../Button';
import './Projects.css';
import Esquerda from './images/TV CELULAR ESQUERDA.svg';
import Direita from './images/TV CELULAR DIREITA.svg'

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
                        <h2 className='projects-text-title'>Titulo do Projeto</h2>
                        <p className='projects-text-p'>Descrição do projeto</p>
                        <p className='projects-text-p'>Tecnologias Usadas:</p>
                        <div className='resume-button'>
                            <a href='/'><Button className='projects-button'></Button></a>
                        </div>
                    </div>

                </div>
                <div className='projects-container'>

                    <div className='projects-text'>
                        <h2 className='projects-text-title'>Titulo do Projeto</h2>
                        <p className='projects-text-p'>Descrição do projeto</p>
                        <p className='projects-text-p'>Tecnologias Usadas:</p>
                        <div className='resume-button'>
                        <a href='/'><Button className='projects-button'></Button></a>
                        </div>
                    </div>
                    <div className='projects-image'>
                        <img src={Direita} className='' alt='' />
                    </div>

                </div>
                <div className='projects-container'>

                    <div className='projects-image'>
                        <img src={Esquerda} className='' alt='' />
                    </div>
                    <div className='projects-text'>
                        <h2 className='projects-text-title'>Titulo do Projeto</h2>
                        <p className='projects-text-p'>Descrição do projeto</p>
                        <p className='projects-text-p'>Tecnologias Usadas:</p>
                        <div className='resume-button'>
                        <a href='/'><Button className='projects-button'></Button></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects;