import AtualProject from "./components/AtualProject";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import './index.css'

function App() {
  return (
    <div className="App">
        <Header />
        <Banner/>
        <Resume/>
        <Projects/>
        <AtualProject/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
