import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectsCarrosel from "../components/Projects-Carrosel";
import ProjectBlocks from "../components/ProjectsBlocks";


function Projects(){
    return(
        <div>
            <Header />
            <ProjectsCarrosel />
            <ProjectBlocks />
            <Footer />
        </div>
    )
}

export default Projects;