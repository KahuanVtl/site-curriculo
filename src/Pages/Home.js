import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import Banner from '../components/Banner';
import ProjectsCarrosel from "../components/Projects-Carrosel";
import HardSkill from "../components/HardSkill";

import '../index.css'

function Home() {
  return (
    <div className="Home">
        <Header/>
        <Banner/>
        <HardSkill/>
        <h2 className='projects-blocks-title'>Melhores Projetos</h2>
        <ProjectsCarrosel/>
        <Contact/>
        <Footer/>
        <FloatingButton />
    </div>
  );
}

export default Home;
