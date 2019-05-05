import React, { Component } from 'react';

import Work from '../Work/Work';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className='simple-intro'>
          <label className='big-intro'>
            Hi! I am Yang (David) Li. <br/>
            <br/>
          </label>
          <label className='small-intro'>
            I design digital artifacts for both reason and emotion <br/>
            through user research, visual design, prototyping, and usability testing. <br/>
            <br/>
            I am both a UX Designer and a UX Engineer.
          </label>
        </div>
        <div className='case-study'>
        	<Work/>
        </div>
      </div>
    );
  }
}

export default Home;
