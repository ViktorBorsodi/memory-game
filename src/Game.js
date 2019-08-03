import React, {Component} from 'react';
import './Game.css';

class Tile extends Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick(){
		this.props.handleMatch(this.props.id,this.props.color,this.props.enabled);
	}
	render() {
		return (
			<div
				className='Tile'
				style={ this.props.status === 'hidden' ? {background: 'gray'} : {background: this.props.color}}
				onClick={this.onClick}
			></div>
		);
	}
}

class Game extends Component {
	render() {
		const Tiles = this.props.tiles.map(tile => {
			return <Tile
						key={tile.id}
						id={tile.id}
						color={tile.color}
						status={tile.status}
						enabled={tile.enabled}
						handleMatch={this.props.handleMatch}
					/>
		});
		return (
			<div className='Game' >{Tiles}</div>
		);
	}
}

export default Game;