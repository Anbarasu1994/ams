import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../src/pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Routes>
        <Route exact path="/" element= {<Home/>} />
        {/* <Route path="/about" component={AboutUs} />
        <Route path="/instructions" component={Instructions} />
        <Route path="/studentlife" component={StudentLife} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
