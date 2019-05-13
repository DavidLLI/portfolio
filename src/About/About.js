import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './About.css';

import selfPhoto from '../Assets/About/Li-1.jpg';
import seattlePhoto from '../Assets/About/me.jpeg';
import dogPhoto from '../Assets/About/my-dog.jpeg';
import nbaPhoto from '../Assets/About/nba-game.jpeg';
import { ReactComponent as DesignSVG } from '../Assets/About/website-design-symbol.svg';
import { ReactComponent as CodeSVG } from '../Assets/About/data.svg';
import { ReactComponent as PubSpeakingSVG } from '../Assets/About/education.svg';
import Resume from '../Assets/Resume.pdf';

class About extends Component {

  render() {
    return (
      <div className="About">
        <div className='self-intro'>
        	<Row between='xs'>
        		<Col xs>
        			<img className='self-photo' src={selfPhoto} />
        			<div className='resume-button'
        				onClick={() => window.open(Resume)}>
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

        <div className='about-skill-section'>
        	<div className='about-skill-title'>
        		Skills
        	</div>
        	<Row between='xs'>
        		<Col xs className='about-caption'>
        			<div className='about-skill-subtitle'>
		            	Design
		            </div>
        			<DesignSVG className='about-skill-svg'/>
        			<div className='about-detail'>
		            	User Research
		            </div>
		            <div className='about-detail'>
		            	Prototyping
		            </div>
		            <div className='about-detail'>
		            	Visual Design
		            </div>
		            <div className='about-detail'>
		            	Figma
		            </div>
		            <div className='about-detail'>
		            	Sketch
		            </div>
        		</Col>
        		<Col xs className='about-caption'>
        			<div className='about-skill-subtitle'>
		            	Programming
		            </div>
        			<CodeSVG className='about-skill-svg'/>
        			<div className='about-detail'>
		            	Javascript
		            </div>
		            <div className='about-detail'>
		            	React.js
		            </div>
		            <div className='about-detail'>
		            	Java
		            </div>
		            <div className='about-detail'>
		            	Algorithm
		            </div>
        		</Col>
        		<Col xs className='about-caption'>
        			<div className='about-skill-subtitle'>
		            	Presentation
		            </div>
        			<PubSpeakingSVG className='about-skill-svg'/>
        			<div className='about-detail'>
		            	Storytelling
		            </div>
		            <div className='about-detail'>
		            	Stakeholder Meeting
		            </div>
		            <div className='about-detail'>
		            	Idea Pitching
		            </div>
        		</Col>
        	</Row>
        </div>

        <div className='photo-section'>
        	<Row between='xs'>
        		<Col xs className='about-caption'>
        			<img className='about-photo1' src={seattlePhoto} />
        			<div className='about-detail'>
        				This is me in Seattle.
        			</div>
        		</Col>
        		<Col xs className='about-caption'>
        			<img className='about-photo1' src={dogPhoto} />
        			<div className='about-detail'>
        				Say hi Blake!
        			</div>
        		</Col>
        	</Row>
        	<Row between='xs' className='about-caption'>
        		<Col xs className='about-caption'>
        			<img className='about-photo2' src={nbaPhoto} />
        			<div className='about-detail'>
        				Let's go Raptors!
        			</div>
        		</Col>
        	</Row>
        </div>

      </div>
    );
  }
}

export default About;