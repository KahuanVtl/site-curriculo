import React, { useState, useEffect } from 'react';
import Button from '../Button/index';
import AtualProjectIMG from './images/Group 6.svg';
import './AtualProject.css';

function AtualProject() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.AtualProject-container');
      const elementTop = element.getBoundingClientRect().top;

      setIsVisible(elementTop < window.innerHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`AtualProject-container ${isVisible ? 'aparecendo' : ''}`}>
      <h2 className='AtualProject-title'>Estou trabalhando nisso atualmente!</h2>
      <div className='AtualProject-img-button-container'>
        <img src={AtualProjectIMG} className='AtualProject-img' alt='' />
        <a href='/' className='AtualProject-button'><Button></Button></a>
      </div>
    </div>
  );
}

export default AtualProject;
