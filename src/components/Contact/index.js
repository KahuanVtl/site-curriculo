import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import './Contact.css';
import emailIcon from '../../images/email.png';
import telefoneIcon from '../../images/telefone.png';

function Contact() {
    const [span1Clicado, setSpan1Clicado] = useState(false);

    const email = 'kahuanvitelli@gmail.com';
    const telefone = '51998747003';

    const handleCopy = () => {
        alert("Copiado com sucesso!")
    };

    return (
        <div className='contact-container'>
            <h2 className='contact-title'>Entre em contato comigo!</h2>
            <p className='contact-subtitle'>Clique no botão amarelo para copiar!</p>
            <div className='contact-bubble'>
                <p className='contact-bubble-p1'>E-MAIL</p>
                <CopyToClipboard text={email} onCopy={handleCopy}>
                    <span
                        className={`contact-bubble-span1 ${span1Clicado ? 'clicado' : ''}`}
                        onClick={() => setSpan1Clicado(!span1Clicado)}
                    >
                        kahuanvitelli@gmail.com
                    </span>
                </CopyToClipboard>
                <img src={emailIcon} alt='Icone de E-mail' className='contact-bubble-img1' />
            </div>
            <div className='contact-bubble'>
                <p className='contact-bubble-p2'>Telefone</p>
                <CopyToClipboard text={telefone} onCopy={handleCopy}>
                    <span className='contact-bubble-span2'>
                        (51) 9 9874-7003
                    </span>
                </CopyToClipboard>
                <img src={telefoneIcon} alt='' className='contact-bubble-img2' />
            </div>
        </div>
    )
}

export default Contact;
