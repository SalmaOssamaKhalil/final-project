import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </Router>
  );
}

export default App;
