import React from 'react';
import {Grid,Col,Row} from 'react-bootstrap';

import Notifications from './notifications/Notifications.jsx'
import Photos from './photos/Photos.jsx';

import './PhotosPage.css';

class PhotosPage extends React.Component{

	constructor(props){
		super (props);
	}

	render(){
		return(
			<div className="photos-page">
				<Grid>
					<Row>
						<Col lg={4} sm={12}>
							<Notifications/>
						</Col>
						<Col lg={8} sm={12}>
							<Photos/>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

}

export default PhotosPage;