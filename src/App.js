import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import  './App.css'
import Home from './Views/Home';
import Contact from './Views/Contact';
import Knowledge from './Views/Knowledge';
import Portfolio from './Views/Portfolio';
import NotFound from './Views/NotFound';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
      <Router >
        <div className="col navbar">
          <NavBar/>
        </div>
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

