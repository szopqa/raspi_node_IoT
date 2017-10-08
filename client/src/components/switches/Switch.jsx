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
			setTimeout(() => {
				this.setState ({
					isPinTurnedOn: ! this.state.isPinTurnedOn,
					status : `PIN ${this.props.pinNumber} is turned 
							${this.state.isPinTurnedOn ? 'OFF' : 'ON'}`,
					isButtonDisabled: false,
				})


				//Server request switching PIN on/off
				/*axios.post(`${config.serverAddress}/switch/${this.props.pinNumber}`,
					{
						pinShouldBeTurnedOn : ! this.state.isPinTurnedOn
					})
					.then(function(response) {
						this.setState ({
							isPinTurnedOn: ! this.state.isPinTurnedOn,
							status : 'PIN ' + this.props.pinNumber +
							' is turned ' + (this.state.isPinTurnedOn ? 'OFF' : 'ON'),
						})
						this.refs.btn.removeAttribute("disabled");
					})
					.catch(function (error) {

					});
				*/

			},3000);

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