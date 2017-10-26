import React from 'react';
import {Grid,Col,Row} from 'react-bootstrap';

import Notifications from './notifications/Notifications.jsx'

import './PhotosPage.css';

class PhotosPage extends React.Component{

	constructor(props){
		super (props);
	}

	render(){
		return(
			<div className="container photos-page">
				<Grid>
					<Row>
						<Col lg={4} sm={12}>
							<Notifications/>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

}

export default PhotosPage;