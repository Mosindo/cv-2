import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import  './App.css'
import Home from './Views/Home';
import Contact from './Views/Contact';
import Knowledge from './Views/Knowledge';
import Portfolio from './Views/Portfolio';
import NotFound from './Views/NotFound';
import NavBar from './components/NavBar';
import React, { useState } from "react";
import * as MdIcon from 'react-icons/md';


function App() {
  const [navbarOpen, setNavbarOpen] = useState(true)
  let execute=()=>{
    setNavbarOpen({navbarOpen:!navbarOpen});
  }
  return (
    <div className="container-fluid">
      <div className="row">
      <MdIcon.MdClose onClick={execute} />
      
      <Router >
      { navbarOpen ?
        <div className="col navbar">
         <NavBar/>
        </div>:null}
        <div className="col">
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/competence' component={Knowledge}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route component={NotFound}/>
        </Switch>
        </div>
      </Router>
      </div>
    </div>
  );
}

export default App;

