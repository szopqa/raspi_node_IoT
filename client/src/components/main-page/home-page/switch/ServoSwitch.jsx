import React from 'react';
import Button from './Button';
import axios from 'axios';
import config from '../../../../config/config.js';

import './Switch.css';

const position = {
	center : 'center',
	min : 'min',
	max : 'max',
};

class ServoSwitch extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			currentPosition : position.center,
			status : 'Servo is at position : ' + position.center,
			buttons : [
				{isDisabled : false},
				{isDisabled : false},
				{isDisabled : false}
			],
		}
	}

	componentDidMount(){
		axios.post(`http://${config.serverAddress}/servo/`,{
			servoAction : position.center
		})
		.then((response) => {
			console.log(response);
			var buttons = this.state.buttons.slice();
			buttons[1].isDisabled = true;

			this.setState ({
				currentPosition : position.center,
				status : 'Servo is at position : ' + position.center,
				buttons: buttons
			})
		})
		.catch((err) => {
			this.setState({
				status : 'Error while connecting to server...',
			})
		})
	}

	handleClick(servoAction){

		//Changing clicked button's state to disabled
		let buttons  = this.state.buttons.slice();

		buttons.map((button) => {
			if(button.isDisabled){
				button.isDisabled = ! button.isDisabled;
			}
		});

		switch (servoAction){
			case 'min':
				buttons[0].isDisabled = true;
				break;

			case 'center':
				buttons[1].isDisabled = true;
				break;

			case 'max':
				buttons[2].isDisabled = true;
				break;
		}

		axios.post(`http://${config.serverAddress}/servo/`,{
			servoAction : servoAction
		})
		.then((response) => {
			console.log(response);
			this.setState({
				currentPosition : servoAction,
				status : 'Servo is at position : ' + servoAction,
			})
		}).catch((err) => {
			this.setState({
				status : 'Error while connecting to server...',
			})
		})
	}

	render(){
		return(
			<div className="switch">
				<div className="switch-header">
					{this.props.header}
				</div>
				<div className="switch-status">
					{this.state.status}
				</div>
				<Button
					value = {'Left'}
					onClick = {this.handleClick.bind(this,position.min)}
					isDisabled = {this.state.buttons[0].isDisabled}
				/>
				<Button
					value = {'Center'}
					onClick = {this.handleClick.bind(this,position.center)}
					isDisabled = {this.state.buttons[1].isDisabled}
				/>
				<Button
					value = {'Right'}
					onClick = {this.handleClick.bind(this,position.max)}
					isDisabled = {this.state.buttons[2].isDisabled}
				/>
			</div>
		);
	}

}

export default ServoSwitch;
