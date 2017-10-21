import React from 'react';
import {
	Form,
	FormGroup,
	FormControl,
	Col,
	ControlLabel,
	Jumbotron} from 'react-bootstrap';

import Button from '../../home-page/switch/Button';

import './Connector.css'

class Connector extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			raspberryIpAddress : '',
			raspberryPort : ''
 		}
	}

	render () {
		return(
			<Jumbotron id="connection-form">
				<Form horizontal>
					<FormGroup controlId = 'formHorizontalIpAddress'>
						<Col sm={2} componentClass ={ControlLabel}>
							Server's IP Address
						</Col>
						<Col sm={10}>
							<FormControl type="text"/>
						</Col>
					</FormGroup>

					<FormGroup controlId = 'formHorizontalIpAddress'>
						<Col sm={2} componentClass ={ControlLabel}>
							Server's PORT
						</Col>
						<Col sm={10}>
							<FormControl type="text"/>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button
								isDisabled = {false}
								value = 'Connect'
								onClick = {this.props.onConnectionClick}
							/>
						</Col>
					</FormGroup>
				</Form>
			</Jumbotron>
		);
	}
}

export default Connector;