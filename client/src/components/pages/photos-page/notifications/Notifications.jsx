import React from 'react';
import config from '../../../../config/config.js'
import axios from 'axios';

import { Link} from 'react-router-dom';

export default class Notifications extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			status : '',
			notifications : [],
			error : undefined
		}
	}

	/*componentDidMount(){
		axios.get(`http://${config.serverAddress}/notifications`)
			.then((response) => {
				let fetchedNotifications = [];
				fetchedNotifications.push(response);

				let status = fetchedNotifications.length === 0 ? 'You have no notifications' : '';

				this.setState({
					notifications : fetchedNotifications ,
					status : status
				});
			})
			.catch((err) => {
				this.setState({
					error : `Error while fetching data :  ${err.toString()}`
				})
			});
		this.setState({status : 'Fetching notifications from database ... '});
	}
*/
	render(){

		let status = this.props.fetchedNotifications.length === 0 ? 'Loading data ...' : '';

		let notifications = this.props.fetchedNotifications;

		return(
			<div className="notifications">
				<h1>Notifications</h1>
				<p className = "status" >
					{ ! this.state.error ?
						status : this.state.error}
				</p>
				<ul>
					{notifications.length !== 0 && notifications.map((notification,index) => {
						return(
							<li	key={index} className="single-notification">
								{notification.description.time}
								<br/>
								{notification.description.body}
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}