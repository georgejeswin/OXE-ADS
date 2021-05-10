import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
    <Router>
       <Home/>
    </Router>
      
    </>
  );
}

export default App;
