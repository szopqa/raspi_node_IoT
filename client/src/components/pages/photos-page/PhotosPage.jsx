import React from 'react';
import {Grid,Col,Row} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Notifications from './notifications/Notifications.jsx'
import Photos from './photos/Photos.jsx';

import './PhotosPage.css';



class PhotosPage extends React.Component{

	constructor(props){
		super (props);
	}

	render(){
		return(
			<Router>
				<Route>
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
				</Route>
			</Router>
		);
	}

}

export default PhotosPage;