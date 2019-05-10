import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './About.css';

import selfPhoto from '../Assets/About/Li-1.jpg';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className='self-intro'>
        	<Row between='xs'>
        		<Col xs>
        			<img className='self-photo' src={selfPhoto} />
        			<div className='resume-button'>
        				Resume
        			</div>
        		</Col>
        		<Col xs>
        			<div className='self-desc-title'>
        				Engineer on surface, <br/>Designer in brain, <br/>Entrepreneur at heart
        			</div>
        			<div className='self-desc-detail'>
        				Hi! My name is Yang (David) Li, and I am currently a Master student at the 
        				University of Toronto studying User Experience Design. My undergraduate degree 
        				was Computer Science at the University of Waterloo.
        				<br/><br/>
        				I still love coding and making things myself, but I love that UX  
        				allows me to craft an impactful product from scratch. I design for 
        				functionality as well as usability and pleasure. My entrepreneur spirit 
        				is always calling for more ownership, responsibilty and more crafting.
        				<br/><br/>
        				I enjoy playing basketball and all kinds of sports, reading inspiring books, 
        				exploring new technology, and much more. I am constantly learning how UX is 
        				becoming a core competency in many modern products.
        			</div>
        		</Col>
        	</Row>
        </div>

        <div className='next-section'>

        </div>

      </div>
    );
  }
}

export default About;