import React, { useState, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import './Contact.css';
import emailIcon from '../../images/email.png';
import telefoneIcon from '../../images/telefone.png';

function Contact() {
    const [span1Clicado, setSpan1Clicado] = useState(false);
    const [span2Clicado, setSpan2Clicado] = useState(false);

    let email = `${span1Clicado ? 'E-mail copiado!' : 'kahuanvitelli@gmail.com'}`;

    let telefone = `${span2Clicado ? 'Número copiado!' : '(51) 9 9874-7003'}`;

    useEffect(() => {
        if (span1Clicado) {
            setTimeout(() => setSpan1Clicado(false), 1000);
        }
        if (span2Clicado) {
            setTimeout(() => setSpan2Clicado(false), 1000);
        }
    }, [span1Clicado, span2Clicado]);

    return (
        <div className='contact-container'>
            <h2 className='contact-title'>Entre em contato comigo!</h2>
            <p className='contact-subtitle'>Clique no botão amarelo para copiar!</p>
            <div className='contact-bubble'>
                <p className='contact-bubble-p1'>E-MAIL</p>
                <CopyToClipboard text={email}>
                    <span
                        className={`contact-bubble-span1 ${span1Clicado ? 'clicado1' : ''}`}
                        onClick={() => setSpan1Clicado(true)}
                    >
                        {email}
                    </span>
                </CopyToClipboard>
                <img src={emailIcon} alt='Icone de E-mail' className='contact-bubble-img1' />
            </div>
            <div className='contact-bubble'>
                <p className='contact-bubble-p2'>Telefone</p>
                <CopyToClipboard text={telefone}>
                    <span
                        className={`contact-bubble-span2 ${span2Clicado ? 'clicado2' : ''}`}
                        onClick={() => setSpan2Clicado(true)}
                    >
                        {telefone}
                    </span>
                </CopyToClipboard>
                <img src={telefoneIcon} alt='' className='contact-bubble-img2' />
            </div>
        </div>
    )
}

export default Contact;
