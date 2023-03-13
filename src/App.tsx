import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './pages/NavBar/NavBar';
import HomePage from 'pages/HomePage/HomePage';
import AboutPage from "./pages/AboutPage/AboutPage";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import EducationPage from "./pages/EducationPage/EducationPage";
import Footer from "./pages/Footer/Footer";


function App() {
    return (
        <Router>
            <NavBar />
            <HomePage />
            <AboutPage />
            <ExperiencePage />
            <ProjectPage />
            <EducationPage />
            <Footer />
        </Router>
  );
}

export default App;
