import React from 'react';

import {
	Form,
	FormGroup,
	FormControl,
	Col,
	Grid,
	Row,
	ControlLabel,
	Jumbotron} from 'react-bootstrap';

import Button from '../pages/home-page/switch/Button.jsx'

class Login extends React.Component {

	constructor(props){
		super(props);

		this.state = {

		}
	}

	componentDidMount (){

	}

	render () {
		return(
			<div className="container">
				<Form horizontal>
					<FormGroup controlId = 'formHorizontalIpAddress'>
						<Col sm={2} componentClass ={ControlLabel}>
							Login
						</Col>
						<Col sm={10}>
							<FormControl type="text"/>
						</Col>
					</FormGroup>

					<FormGroup controlId = 'formHorizontalIpAddress'>
						<Col sm={2} componentClass ={ControlLabel}>
							Password
						</Col>
						<Col sm={10}>
							<FormControl type="text"/>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button
								isDisabled = {false}
								value = 'Sign In'
								onClick = {this.props.handleLoggingIn}
							/>
						</Col>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default Login;
