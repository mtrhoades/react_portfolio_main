// IMPORTS
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';


// FUNCTIONAL COMPONENT
export default function App() {
  // VANILLA JAVASCRIPT SECTION



  // JSX SECTION
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <ContactMe />
    </div>
  );
}


 
