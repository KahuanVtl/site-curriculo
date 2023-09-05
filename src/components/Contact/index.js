import './Contact.css';

function Contact(){
    return(
        <div className='contact-container'>
            <h2 className='contact-title'>Entre em contato comigo!</h2>
            <div className='contact-information-container'>
            <div className='contact-information'>
                <h2 className='contact-subtitle'>Email</h2>
                <input placeholder='E-mail' className='contact-input-email'></input>
            </div>
            <div className='contact-information'>
                <h2 className='contact-subtitle'>Ou Whatsapp</h2>
                <input placeholder='Telefone' className='contact-input-whatsapp'></input>
            </div>
            </div>
        </div>
    )
}

export default Contact;