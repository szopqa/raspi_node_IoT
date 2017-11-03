import React from 'react';
import {Grid,Col,Row,PageHeader} from 'react-bootstrap';

import logo from '../../images/logo.svg'
import './Header.css';

function Header (props) {

	return(
		<div className="container">
			<Grid>
				<Row className = "App-header">
					<Col smHidden mdHidden xsHidden lg={2}>
						<div className="App-logo">
							<img src={logo} alt="logo"/>
						</div>
					</Col>
					<Col sm={8} lg={10}>
						<div className="App-title">
							Smart Monitoring System
						</div>
					</Col>
				</Row>
			</Grid>
		</div>
	);

}

export default Header;