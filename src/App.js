import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Contents from './Components/Contents';
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import Services from './Components/Services';

function App() {
  return (
    <>
    <Router>
       <Home/>
       <Contents/>
      
    </Router>
      
    </>
  );
}

export default App;
