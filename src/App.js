import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contents from "./Components/Contents";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <Router>
        <Home />
        <Contents />
        <Footer />
      </Router>
    </>
  );
}

export default App;
