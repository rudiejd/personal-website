import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigation } from './components/Navigation';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';    
import { Home } from './Home';
import { Projects } from './Projects'
class App extends Component {
  render() {
      return (
        <div className="text-monospace">
            <Router basename={`${process.env.PUBLIC_URL}/`}>
              <Navigation />
              <main role="main">
          
                      <Switch>
                              <Route exact path="/" component={Home} />
                              <Route exact path="/projects" component={Projects} />
                      </Switch>
                      
              </main>
            </Router>
            <footer>
                <p class="text-center mt-5">created in 2021 by jd rudie</p>
            </footer>
        </div>
      );
  }
}

export default App;
