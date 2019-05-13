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
	      		<div className='contact-button'>
	      			Let's Talk
	      		</div>
	      		<Row between='xs' className='contact-icons'>
	      			<Col xs>
	      				<LinkedInSVG className='contact-svg'/>
	      			</Col>
	      			<Col xs>
	      				<EmailSVG className='contact-svg'/>
	      			</Col>
	      			<Col xs>
	      				<GithubSVG className='contact-svg'/>
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
