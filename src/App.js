import './App.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import SectionAll from './components/SectionAll';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <section className="body">
        <Navbar/>
        <SectionAll/>
        <Switch>
          <Router exact path="/">
            <Home />
          </Router>
          <Router exact path="/Contact">
            <Contact />
          </Router>
          <Router exact path="/About">
            <About />
          </Router>
        </Switch>
      </section>
      <Footer/>
    </Router>
    
  );
}

export default App;


// https://preview.colorlib.com/#jackco

// <form action="mailto:myforms@mydomain.com" enctype="text/plain" >