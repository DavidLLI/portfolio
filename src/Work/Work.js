import React, { Component } from 'react';

import './Work.css';

class Work extends Component {

	constructor(props) {
		super(props);

		this.state = {
			'cards': [
				{
					'color': '#33CAFF',
					'hoverColor': '#335EFF',
					'hover': false,
					'title': 'Case 1'
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
        			style={{backgroundColor: card.hover ? card.hoverColor : card.color}}
        			onMouseEnter={(e) => {this.handleMouseEnter(index)}}
        			onMouseLeave={(e) => {this.handleMouseLeave(index)}}>
        			{card.hover && card.title}
        		</div>
        	);
        })}
      </div>
    );
  }
}

export default Work;