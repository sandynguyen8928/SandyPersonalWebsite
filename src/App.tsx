import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from 'components/HomePage/HomePage';

function App() {
  return (
    <Router>
      <NavBar />
      <HomePage />
    </Router>
  );
}

export default App;
