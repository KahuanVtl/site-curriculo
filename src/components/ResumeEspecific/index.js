import './ResumeEspecific.css'
import coluna from './images/HabilidadesT.svg'
import coluna2 from './images/Frame 10.svg'

function ResumeEspecific() {
    return (
        <div>
            <div className='resume-especific-title'>
                <h1 className='resume-especific-title-h1-1'>Um pouco das minhas</h1>
                <h1 className='resume-especific-title-h1-2'>experiências</h1>
            </div>

            <div className='resume-especific-container'>
                <div className='resume-especific-projects-part-1'>
                    <h1 className='project-title'>Habilidades Técnicas</h1>
                    <div className='project-image-text-container'>
                        <div className='project-image'>
                            <img src={coluna} alt='' />
                        </div>
                        <div className='project-text'>
                            <h2 className='project-text-title'>Desenvolvimento WEB</h2>
                            <ul className='project-text-ul'>
                                <li className='project-text-li'>JavaScript</li>
                                <li className='project-text-li'>HTML/CSS</li>
                                <li className='project-text-li'>React</li>
                                <li className='project-text-li'>Nodejs</li>
                            </ul>
                            <h2 className='project-text-title'>Desenvolvimento BackEnd</h2>
                            <ul className='project-text-ul'>
                                <li className='project-text-li'>Java</li>
                                <li className='project-text-li'>Python</li>
                                <li className='project-text-li'>SQL</li>
                            </ul>
                            <h2 className='project-text-title'>Metodologia Ágeis</h2>
                            <ul className='project-text-ul'>
                                <li className='project-text-li'>BPMN</li>
                                <li className='project-text-li'>UML</li>
                                <li className='project-text-li'>KANBAM</li>
                                <li className='project-text-li'>SCRUM</li>
                            </ul>
                            <h2 className='project-text-title'>Desenvolvimento Dashboards</h2>
                            <ul className='project-text-ul'>
                                <li className='project-text-li'>PowerBi</li>
                                <li className='project-text-li'>BI</li>
                                <li className='project-text-li'>Mercanet</li>
                                <li className='project-text-li'>Protheus</li>
                            </ul>
                        </div>
                    </div>

                    <div className='resume-especific-projects-part-1'>
                    <h1 className='project-title'>Línguas</h1>
                    <div className='project-image-text-container'>
                        <div className='project-image'>
                            <img src={coluna} alt='' />
                        </div>
                        <div className='project-text'>
                            <h2 className='project-text-title'>Língua Portuguesa Nativo</h2>
                            <ul className='project-text-ul'>
                                <li className='project-text-li'>Conversação</li>
                                <li className='project-text-li'>Bom entendimento</li>
                                <li className='project-text-li'>Escrita </li>
                                <li className='project-text-li'>Leitura</li>
                            </ul>

                            <h2 className='project-text-title'>Língua Inglesa C1</h2>
                            <ul className='project-text-ul'>
                                <li className='project-text-li'>Conversação</li>
                                <li className='project-text-li'>Bom entendimento</li>
                                <li className='project-text-li'>Escrita </li>
                                <li className='project-text-li'>Leitura</li>
                            </ul>
                            <h2 className='project-text-title'>Língua Espanhola Básica</h2>
                            <ul className='project-text-ul'>
                                <li className='project-text-li'>Conversação</li>
                                <li className='project-text-li'>Leitura</li>
                            </ul>
                            <h2 className='project-text-title'>Língua Francesa A1</h2>
                            <ul className='project-text-ul'>
                                <li className='project-text-li'>Conversação</li>
                                <li className='project-text-li'>Entendimento</li>
                                <li className='project-text-li'>Escrita </li>
                                <li className='project-text-li'>Leitura</li>
                            </ul>
                        </div>
                    </div>
                </div>
                    
                    
                </div>
                <div className='resume-especific-projects-part-2'>
                    <h1 className='project-title'>Experiência Profissional</h1>
                    <div className='project-image-text-container'>
                        <div className='project-image'>
                            <img src={coluna2} alt='' />
                        </div>
                        <div className='project-text'>
                            <h2 className='project-text-title'>Assistente de TI</h2>
                            <p className='project-text-subtitle'>Proshows S.A. (07/2022 - Atualmente)</p>
                            <p className='project-text-p'>Distribuidora de Áudio, Iluminação e Instrumentos.</p>
                            <p className='project-text-p1'>Responsabilidades:</p>
                            <ul className='project-text-ul'>
                                <li className='project-text-li'>Gerenciamento Ecommerce</li>
                                <li className='project-text-li'>Integração de clientes e debug de sistema</li>
                                <li className='project-text-li'>Faturamento e acompanhamento de envios</li>
                                <li className='project-text-li'>Desenvolvimento de gráficos para gestão</li>
                            </ul>
                            <p className='project-text-p'>Tecnologias Usadas:</p>
                            <ul className='project-text-ul'>
                                <li className='project-text-li'>Pacote Office</li>
                                <li className='project-text-li'>PowerBI</li>
                                <li className='project-text-li'>Sql Server e MySQL</li>
                                <li className='project-text-li'>TOTVS</li>
                                <li className='project-text-li'>Mercanet</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeEspecific;