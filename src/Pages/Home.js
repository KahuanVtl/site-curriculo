import AtualProject from "../components/AtualProject";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import FloatingButton from "../components/FloatingButton";
import HomeInitial from "../components/Initial"
import '../index.css'

function Home() {
  return (
    <div className="Home">
        <Header/>
        <HomeInitial/>
        <Projects/>
        <AtualProject/>
        <Contact/>
        <Footer/>
        <FloatingButton />
    </div>
  );
}

export default Home;
