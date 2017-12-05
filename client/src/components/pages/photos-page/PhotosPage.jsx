import React from 'react';
import {Grid,Col,Row} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

import Notifications from './notifications/Notifications.jsx'
import Photos from './photos/Photos.jsx';
import config from '../../../config/config.js';


import './PhotosPage.css';

class PhotosPage extends React.Component{

	constructor(props){
		super (props);
		this.state = {
			fetchedPhotos :[],
			fetchedNotifications : []
		}
	}

	componentDidMount (){
		axios.get(`http://${config.serverAddress}/notifications`)
			.then((response) => {
				let notifications = [];
				let photos = [];

				//extracting data from response
				response.data.map((element) => {
					notifications.push(_.omit(element,['image']));
					photos.push(element.attachment);
				});

				this.setState({
                    fetchedPhotos : photos,
                    fetchedNotifications : notifications
				})
			})
			.catch((err) => {
				console.log(err);
			})
	}

	render(){
		return(
			<Router>
				<Route>
					<div className="photos-page">
						<Grid>
							<Row>
								<Col lg={4} sm={12}>
									<Notifications
										fetchedNotifications = {this.state.fetchedNotifications}
									/>
								</Col>
								<Col lg={8} sm={12}>
									<Photos
										fetchedPhotos = {this.state.fetchedPhotos}
									/>
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