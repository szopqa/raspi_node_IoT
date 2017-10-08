import React from 'react';
import Button from './Button';
import axios from 'axios';
import config from '../../config/config';

import './switch.css';

class Switch extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			isTurnedOn : false,
			status: 'PIN '+ this.props.pinNumber + ' is turned OFF'
		}
	}

	handleClick (switchNumber) {

		//Server request switching PIN on/off
		axios.post(`${config.serverAddress}/switch/${this.props.pinNumber}`,
			{
				pinShouldBeTurnedOn : ! this.state.isTurnedOn
			})
			.then(function(response) {
				this.setState ({
					isTurnedOn: ! this.state.isTurnedOn,
					status : 'PIN ' + this.props.pinNumber +
					' is turned ' + (this.state.isTurnedOn ? 'OFF' : 'ON'),
				})
			})
			.catch(function (error) {

			});
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