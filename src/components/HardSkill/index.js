import React from 'react';
import './HardSkill.css';

import htmlIcon from '../../images/html.svg';
import cssIcon from '../../images/css.svg';
import javascriptIcon from '../../images/javascript.svg';
import reactIcon from '../../images/react.svg';
import sassIcon from '../../images/sass.png';

function HardSkill() {
    return (
        <div>
            <h2 className='HardSkill-title'>Hard Skills</h2>
            <div className='HardSkill-container'>
                <div className='HardSkill-coluna'>
                    <h2 className='HardSkill-name'>Tecnologias do dia a dia</h2>
                    <div className='HardSkill-icons'>
                        <img src={reactIcon} alt='Icone do React' className='projects-text-icons-img' /> <img src={htmlIcon} alt='Icone do HTML' className='projects-text-icons-img' /> <img src={cssIcon} alt='Icone do CSS' className='projects-text-icons-img' /> <img src={javascriptIcon} alt='Icone do JAVASCRIPT' className='projects-text-icons-img' />
                    </div>
                </div>
                <div className='HardSkill-coluna'>
                    <h2 className='HardSkill-name'>Estudando</h2>
                    <div className='HardSkill-icons'>
                        <img src={reactIcon} alt='Icone do React' className='projects-text-icons-img' /> <img src={htmlIcon} alt='Icone do HTML' className='projects-text-icons-img' /> <img src={sassIcon} alt='Icone do SASS' className='projects-text-icons-img' /> <img src={javascriptIcon} alt='Icone do JAVASCRIPT' className='projects-text-icons-img' />
                    </div>
                </div>
                <div className='HardSkill-coluna'>
                    <h2 className='HardSkill-name'>Favoritas</h2>
                    <div className='HardSkill-icons'>
                        <img src={reactIcon} alt='Icone do React' className='projects-text-icons-img' /> <img src={htmlIcon} alt='Icone do HTML' className='projects-text-icons-img' /> <img src={cssIcon} alt='Icone do CSS' className='projects-text-icons-img' /> <img src={javascriptIcon} alt='Icone do JAVASCRIPT' className='projects-text-icons-img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HardSkill;
