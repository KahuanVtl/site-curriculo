import React from 'react';
import './ProjectBlocks.css';
import imagem1 from '../../images/imagem1.jpg';
import html from '../../images/html.svg';
import css from '../../images/css.svg';
import javascript from '../../images/javascript.svg';

function ProjectBlocks() {
    return (
        <div>
            <h2 className='projects-blocks-title'>Melhores Projetos</h2>
            <div className='projects-blocks-container'>
                <div className='projects-blocks-coluna'>
                    <img src={imagem1} alt='' className='project-blocks-images' />
                    <h2 className='project-blocks-name'>Projeto Nome</h2>
                    <div className='project-blocks-icons'>
                        <img src={html} alt='' className='project-blocks-icons-img' />
                        <img src={css} alt='' className='project-blocks-icons-img' />
                        <img src={javascript} alt='' className='project-blocks-icons-img' />
                    </div>
                </div>
                <div className='projects-blocks-coluna'>
                    <img src={imagem1} alt='' className='project-blocks-images' />
                    <h2 className='project-blocks-name'>Projeto Nome</h2>
                    <div className='project-blocks-icons'>
                        <img src={html} alt='' className='project-blocks-icons-img' />
                        <img src={css} alt='' className='project-blocks-icons-img' />
                        <img src={javascript} alt='' className='project-blocks-icons-img' />
                    </div>
                </div>
                <div className='projects-blocks-coluna'>
                    <img src={imagem1} alt='' className='project-blocks-images' />
                    <h2 className='project-blocks-name'>Projeto Nome</h2>
                    <div className='project-blocks-icons'>
                        <img src={html} alt='' className='project-blocks-icons-img' />
                        <img src={css} alt='' className='project-blocks-icons-img' />
                        <img src={javascript} alt='' className='project-blocks-icons-img' />
                    </div>
                </div>
                <div className='projects-blocks-coluna'>
                    <img src={imagem1} alt='' className='project-blocks-images' />
                    <h2 className='project-blocks-name'>Projeto Nome</h2>
                    <div className='project-blocks-icons'>
                        <img src={html} alt='' className='project-blocks-icons-img' />
                        <img src={css} alt='' className='project-blocks-icons-img' />
                        <img src={javascript} alt='' className='project-blocks-icons-img' />
                    </div>
                </div>
                <div className='projects-blocks-coluna'>
                    <img src={imagem1} alt='' className='project-blocks-images' />
                    <h2 className='project-blocks-name'>Projeto Nome</h2>
                    <div className='project-blocks-icons'>
                        <img src={html} alt='' className='project-blocks-icons-img' />
                        <img src={css} alt='' className='project-blocks-icons-img' />
                        <img src={javascript} alt='' className='project-blocks-icons-img' />
                    </div>
                </div>
                <div className='projects-blocks-coluna'>
                    <img src={imagem1} alt='' className='project-blocks-images' />
                    <h2 className='project-blocks-name'>Projeto Nome</h2>
                    <div className='project-blocks-icons'>
                        <img src={html} alt='' className='project-blocks-icons-img' />
                        <img src={css} alt='' className='project-blocks-icons-img' />
                        <img src={javascript} alt='' className='project-blocks-icons-img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectBlocks;
