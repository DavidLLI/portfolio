import React, { Component } from 'react';

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
					'title': 'Case 1',
					'thumb': group4MeThumb
				},
				{
					'color': '#FF7433',
					'hoverColor': '#FF4233',
					'hover': false,
					'title': 'Case 2'
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
        {this.state.cards.map((card, index) => {
        	return (
        		<div key={index} 
        			className='card'
        			onMouseEnter={(e) => {this.handleMouseEnter(index)}}
        			onMouseLeave={(e) => {this.handleMouseLeave(index)}}>
        			{card.thumb && 
        				<img className='thumb-img' src={group4MeThumb} />
        			}
        			<div className='card-title'
        				style={{backgroundColor: card.hoverColor,
        						opacity: card.hover ? 0.8 : 0}}>
        				{card.title}
        			</div>
        		</div>
        	);
        })}
      </div>
    );
  }
}

export default Work;