import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Routes } from '../Data/Data';

import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pathname = this.props.location.pathname;
    
    return (
        <div className='nav-menu'>
          <div className='top-name'>
            <Link
              className='top-name-link' 
              to='/'>
              Yang (David) Li
            </Link>
          </div>
          {Routes.map((data, index) => {
            let classnames = '';
            if (pathname === data.path) {
              classnames = ' menu-link-selected'
            }
            return (
              <div key={index} className='menu-item'>
                <Link
                  className={'menu-link' + classnames} 
                  to={data.path}>
                  {data.name}
                </Link>
              </div>
            );
          })}
        </div>
        
    );
  }
}

export default withRouter(Navigation);