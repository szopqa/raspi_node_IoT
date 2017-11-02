import React from 'react';
import {
	Form,
	FormGroup,
	FormControl,
	Button,
	Label,
	Jumbotron} from 'react-bootstrap';

export default class SignupForm extends React.Component {

	render(){
		return(
			<Form>
				<div id="signup-header">
					<b>Sign up</b> to <b>Smart Monitoring System</b>
				</div>

				<div id="signup-form">
					<Jumbotron>
						<FormGroup bsSize="large" controlId="formHorizontalUsername">
							<div id="form-label">
								<Label>
									Login
								</Label>
							</div>
							<FormControl
								type="text"
								name="username"/>
						</FormGroup>

						<FormGroup bsSize="large" controlId="formHorizontalPassword">
							<div id="form-label">
								<Label>
									Password
								</Label>
							</div>
							<FormControl
								type="password"
								name="password"/>
						</FormGroup>

						<FormGroup bsSize="large">
							<Button bsStyle="primary" id="form-button">
								Sign up
							</Button>
						</FormGroup>
					</Jumbotron>
				</div>
			</Form>
		);
	}
}