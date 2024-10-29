import './FloatingButton.css';
import whatsapp from '../../images/whatsapp.svg';

function FloatingButton() {
  return (
    <a
      className="botao-flutuante"
      href="https://api.whatsapp.com/send?phone=5551998747003&text=Olá%20Kahuan,%20gostaria%20de%20falar%20com%20você"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img alt="WhatsApp" src={whatsapp} />
    </a>
  );
}

export default FloatingButton;
