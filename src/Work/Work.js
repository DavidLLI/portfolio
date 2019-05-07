import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './Work.css';

import group4MeThumb from '../Assets/group4MeThumb.png';

class Work extends Component {

	constructor(props) {
		super(props);

		this.state = {
			'cards': [
				{
					'color': '#33CAFF',
					'hoverColor': '#335EFF',
					'hover': false,
					'title': 'Group4Me',
					'description': 'Mobile App <br/>Connect international and local students',
					'thumb': group4MeThumb,
					'link': '/group4me'
				},
				{
					'color': '#FF7433',
					'hoverColor': '#FF4233',
					'hover': false,
					'title': 'Case 2',
					link: '/group4me'
				}
			]
		};

		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleMouseEnter(index) {
		let newCards = [...this.state.cards];
		newCards[index].hover = true;
		this.setState({
			cards: newCards
		});
	}

	handleMouseLeave(index) {
		let newCards = [...this.state.cards];
		newCards[index].hover = false;
		this.setState({
			cards: newCards
		});
	}

  render() {
    return (
      <div className="Work">
      	<div className='work-title'>
      		Selected Works
      	</div>
        {this.state.cards.map((card, index) => {
        	return (
        		<Link to={card.link}>
	        		<div key={index} 
	        			className='card'
	        			onMouseEnter={(e) => {this.handleMouseEnter(index)}}
	        			onMouseLeave={(e) => {this.handleMouseLeave(index)}}>

	        			{card.thumb && 
	        				<img className='thumb-img' src={card.thumb} />
	        			}
	        			<div className='card-title'
	        				style={{backgroundColor: card.hoverColor,
	        						opacity: card.hover ? 0.8 : 0}}>
	        				<div className='card-title-text'
	        						dangerouslySetInnerHTML={{__html: card.title}} />
							<div className='card-desc-text'
	        						dangerouslySetInnerHTML={{__html: card.description}} />
	        			</div>
	        		</div>
        		</Link>
        	);
        })}
      </div>
    );
  }
}

export default Work;