// IMPORTS
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
// import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

// FUNCTIONAL COMPONENT
export default function App() {
  // VANILLA JAVASCRIPT SECTION



  // JSX SECTION
  return (
    <div className="App">
      <Header />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <LeftSide />
        <Main />
        <RightSide />
      </div>
    </div>
  );
}

// STYLED COMPONENTS
 
