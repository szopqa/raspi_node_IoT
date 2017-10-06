import React from 'react';
import Button from './Button';
import './switch.css';

class Switch extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			isTurnedOn : false,
			status: 'PIN '+ this.props.pinNumber + ' is turned OFF'
		}
	}

	handleClick (i) {
		//TODO: server request switching PIN on/off
		this.setState ({
			isTurnedOn: ! this.state.isTurnedOn,
			status : 'PIN ' + this.props.pinNumber +
				' is turned ' + (this.state.isTurnedOn ? 'OFF' : 'ON'),
		})
	}

	render () {
		return(
			<div className="switch">
				<div className="switch-header">
					{this.props.header}
				</div>
				<div className="switch-status">
					{this.state.status}
				</div>
				<Button
					value = {this.state.isTurnedOn ? 'Turn off' : 'Turn on'}
					onClick = {(i) => this.handleClick(i)}
				/>
			</div>
		);
	}
}

export default Switch;