import Banner from "./components/Banner";
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
    </div>
  );
}

export default App;
