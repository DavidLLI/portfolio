import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';

import ScrollToTop from './ScrollToTop/ScrollToTop';

import { Routes } from './Data/Data';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ScrollToTop>
            <Navigation />
            <div className='portfolio-content'>
              <Switch>
                {Routes.map((data, index) => {
                  return (
                    <Route key={index}
                      exact={data.exact} 
                      path={data.path} 
                      component={data.component}/>
                  );
                })}
              </Switch>
            </div>
            <div className='footer'>
              <Footer />
            </div>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;
