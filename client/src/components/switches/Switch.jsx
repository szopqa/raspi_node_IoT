import React from 'react';
import Button from './Button';
import axios from 'axios';
import config from '../../config/config';

import './switch.css';

class Switch extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			isPinTurnedOn : false,
			status: 'PIN '+ this.props.pinNumber + ' is turned OFF',
			isButtonDisabled : false,
		}
	}

	handleClick () {

		if( ! this.state.isButtonDisabled){

			//Async request simulation purpose
			/*
			setTimeout(() => {
				this.setState ({
					isPinTurnedOn: ! this.state.isPinTurnedOn,
					status : `PIN ${this.props.pinNumber} is turned 
							${this.state.isPinTurnedOn ? 'OFF' : 'ON'}`,
					isButtonDisabled: false,
				})
			},3000);
			*/

			//Request passed through proxy which allows cross-origin requests
			const proxyurl = "https://cors-anywhere.herokuapp.com/";
			axios.post(`http://${config.serverAddress}/switch/${this.props.pinNumber}`,
				{
					pinShouldBeTurnedOn : ! this.state.isPinTurnedOn
				})
				.then((response) => {
					console.log(response);
					this.setState ({
						isPinTurnedOn: ! this.state.isPinTurnedOn,
						status : 'PIN ' + this.props.pinNumber +
						' is turned ' + (this.state.isPinTurnedOn ? 'OFF' : 'ON'),
						isButtonDisabled : false,
					});
				})
				.catch((error) => {
					this.setState({
						status : 'Error while connecting to server...',
						isButtonDisabled : false,
					})
				});

			//Set while waiting for server action
			this.setState({
				isButtonDisabled: true,
				status: `PIN ${this.props.pinNumber} is turning 
							${this.state.isPinTurnedOn ? 'OFF' : 'ON'} ...`
			})
		}
	}

	render () {
		return(
			<div className="switch" style={{background: (this.state.isPinTurnedOn ? '#1DAA2A':'#8A090D')}}>
				<div className="switch-header">
					{this.props.header}
				</div>
				<div className="switch-status">
					{this.state.status}
				</div>
				<Button
					value = {this.state.isPinTurnedOn ? 'Turn off' : 'Turn on'}
					onClick = {() => this.handleClick()}
					isDisabled = {this.state.isButtonDisabled}
				/>
			</div>
		);
	}
}

export default Switch;