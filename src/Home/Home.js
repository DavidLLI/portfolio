import React, { Component } from 'react';

import Work from '../Work/Work';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className='simple-intro'>
        	Hi! I am Yang (David) Li. <br/>
        	A UX designer with developer skills.
        </div>
        <div className='case-study'>
        	<Work/>
        </div>
        <div className='footer'>
        </div>
      </div>
    );
  }
}

export default Home;
