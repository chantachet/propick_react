import React, { Component } from 'react'
import './../css/App.css'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './Home/Home'
import Proservice from './Proservice/ProService'
import Propick from './Propick/Propick'
import AboutUs from './Proservice/AboutUs';
import Career from './Proservice/Career';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/proservice" exact component={Proservice} />
            <Route path="/propick" exact component={Propick} />
            <Route path="/proservice/aboutus" exact component={AboutUs} />
            <Route path="/proservice/career" exact component={Career} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
