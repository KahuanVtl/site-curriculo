import React from 'react';
import Button from '../Button/index';
import './ProjectBlocks.css';

import imagem1 from './images/2.png';
import imagem2 from './images/1.png';
import imagem3 from './images/3.png';

import htmlIcon from '../../images/html.svg';
import cssIcon from '../../images/css.svg';
import javascriptIcon from '../../images/javascript.svg';
import reactIcon from '../../images/react.svg';
import sassIcon from '../../images/sass.png';

function ProjectBlocks() {
    return (
        <div>
            <h2 className='projects-blocks-title'>Melhores Projetos</h2>
            <div className='projects-blocks-container'>
                <div className='projects-blocks-coluna'>
                    <img src={imagem1} alt='' className='project-blocks-images' />
                    <h2 className='project-blocks-name'>Organo</h2>
                    <div className='project-blocks-icons'>
                        <img src={reactIcon} alt='Icone do React' className='projects-text-icons-img' /> <img src={htmlIcon} alt='Icone do HTML' className='projects-text-icons-img' /> <img src={cssIcon} alt='Icone do CSS' className='projects-text-icons-img' /> <img src={javascriptIcon} alt='Icone do JAVASCRIPT' className='projects-text-icons-img' />
                    </div>
                    <a className='project-blocks-button' href='https://organo-site-de-times.vercel.app/'><Button /></a>
                </div>
                <div className='projects-blocks-coluna'>
                    <img src={imagem2} alt='' className='project-blocks-images' />
                    <h2 className='project-blocks-name'>Alura Space</h2>
                    <div className='project-blocks-icons'>
                        <img src={reactIcon} alt='Icone do React' className='projects-text-icons-img' /> <img src={htmlIcon} alt='Icone do HTML' className='projects-text-icons-img' /> <img src={sassIcon} alt='Icone do SASS' className='projects-text-icons-img' /> <img src={javascriptIcon} alt='Icone do JAVASCRIPT' className='projects-text-icons-img' />
                    </div>
                    <a className='project-blocks-button' href='https://alura-space-estudo.vercel.app/'><Button /></a>
                </div>
                <div className='projects-blocks-coluna'>
                    <img src={imagem3} alt='' className='project-blocks-images' />
                    <h2 className='project-blocks-name'>Olá Mundo!</h2>
                    <div className='project-blocks-icons'>
                        <img src={reactIcon} alt='Icone do React' className='projects-text-icons-img' /> <img src={htmlIcon} alt='Icone do HTML' className='projects-text-icons-img' /> <img src={cssIcon} alt='Icone do CSS' className='projects-text-icons-img' /> <img src={javascriptIcon} alt='Icone do JAVASCRIPT' className='projects-text-icons-img' />
                    </div>
                    <a className='project-blocks-button' href='https://ola-mundo-nine-tau.vercel.app/'><Button /></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectBlocks;
