import './AtualProject.css';
import Button from '../Button/index';
import AtualProjectIMG from './images/Group 6.svg'

function AtualProject(){
    return(
        <div className='AtualProject-container'>
            <h2 className='AtualProject-title'>Estou trabalhando nisso atualmente!</h2>
            <div className='AtualProject-img-button-container'>
                <img src={AtualProjectIMG} className='AtualProject-img' alt=''></img>
                <a href='/' className='AtualProject-button'><Button></Button></a>
            </div>
        </div>
    )
}

export default AtualProject;