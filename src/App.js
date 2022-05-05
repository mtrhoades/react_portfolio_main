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
  const divWrapperStyle = { backgroundColor: '#00A9A5'}


  // JSX SECTION
  return (
    <div className="App" >
      <body style={ divWrapperStyle } >
        <NavBar />
        <Home />
        <About />
        <Projects />
        <ContactMe />
      </body>
    </div>
  );
}


 
