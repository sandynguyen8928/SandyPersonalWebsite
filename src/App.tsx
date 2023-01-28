import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './pages/NavBar/NavBar';
import HomePage from 'pages/HomePage/HomePage';
import AboutPage from "./pages/AboutPage/AboutPage";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";

function App() {
    return (
        <Router>
            <NavBar />
            <HomePage />
            <AboutPage />
            <ExperiencePage />
        </Router>
  );
}

export default App;
