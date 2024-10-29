import './Resume.css';
import React, { useState, useEffect } from 'react';
import Perfil from '../../images/Imagem.svg';

function Resume() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.resume-container');
            const elementTop = element.getBoundingClientRect().top;

            setIsVisible(elementTop < window.innerHeight - 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`resume-container ${isVisible ? 'aparecendo' : ''}`}>
            <div className='resume-image'>
                <img src={Perfil} alt='Autor Foto Perfil'></img>
            </div>
            <div className='resume-text'>
                <h2 className='resume-title'>Eu me chamo Kahuan!</h2>
                <p className='resume-text-p'>Olá, prazer em conhecer você, eu me chamo Kahuan e sou desenvolvedor Fullstack.</p>
                <p className='resume-text-p'>Aqui você verá todo meu portfólio, como também meios de comunicações e projetos em construção.</p>
                <p className='resume-text-p'>Sinta-se a vontade para entrar em contato para conversarmos e codar juntos! </p>
            </div>

        </div>
    )
}

export default Resume;