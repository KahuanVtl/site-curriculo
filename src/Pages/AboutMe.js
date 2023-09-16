import Header from "../components/Header";
import Resume from "../components/Resume";
import Footer from '../components/Footer'
import ResumeEspecific from "../components/ResumeEspecific";
import '../index.css'

function AboutMe() {
  return (
    <div className="AboutMe">
        <Header />
        <Resume />
        <ResumeEspecific />
        <Footer />
    </div>
  );
}

export default AboutMe;
