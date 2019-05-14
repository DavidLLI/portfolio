import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { ReactComponent as LinkedInSVG } from '../Assets/About/linkedin-logo.svg';
import { ReactComponent as EmailSVG } from '../Assets/About/envelope.svg';
import { ReactComponent as GithubSVG } from '../Assets/About/github-sign.svg';

import './Footer.css';

class Footer extends Component {
	
  render() {
    return (
    	<div className='footer'>
    		<div className='footer-contact'>
	      		<div className='contact-button'
	      			onClick={() => window.open('mailto:david.yli310@gmail.com')}>
	      			Let's Talk
	      		</div>
	      		<Row between='xs' className='contact-icons'>
	      			<Col xs>
	      				<a href={'https://www.linkedin.com/in/yang-david-li-051074a9/'} target='_blank'>
	      					<LinkedInSVG className='contact-svg'/>
	      				</a>
	      			</Col>
	      			<Col xs>
	      				<a href={'mailto:david.yli310@gmail.com'} target='_blank'>
	      					<EmailSVG className='contact-svg'/>
	      				</a>
	      			</Col>
	      			<Col xs>
	      				<a href={'https://github.com/DavidLLI'} target='_blank'>
	      					<GithubSVG className='contact-svg'/>
	      				</a>
	      			</Col>
	      		</Row>
	      	</div>
	      	<div className='footer-content'>
	        	Handcrafted & © Copyright Yang (David) Li
	      	</div>
      	</div>
    );
  }
}

export default Footer;
