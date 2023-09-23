import CopyToClipboard from 'react-copy-to-clipboard';
import './Contact.css';

function Contact(){

    const email = 'kahuanvitelli@gmail.com';
    const telefone = '51998747003';

    const handleCopy = () => {
        alert("Copiado com sucesso!")
    };

    return(
        <div className='contact-container'>
            <h2 className='contact-title'>Entre em contato comigo!</h2>
            <CopyToClipboard text={email} onCopy={handleCopy}>
                <span>
                    Clique aqui para copiar o email!
                </span>
            </CopyToClipboard>
            <CopyToClipboard text={telefone} onCopy={handleCopy}>
                <span>
                    Clique aqui para copiar o Celular!
                </span>
            </CopyToClipboard>
        </div>
    )
}

export default Contact;