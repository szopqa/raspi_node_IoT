import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

import SignupForm from './SignupForm.jsx';

import './SignupPage.css'

export default class SignupPage extends React.Component {

	render(){
		return(
			<div className="signup-page">
				<div className="container">
					<Grid>
						<Row>
							<Col lg={12}>
								<SignupForm/>
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		)
	}
}