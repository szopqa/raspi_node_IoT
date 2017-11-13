import React from 'react';
import { Link} from 'react-router-dom';

export default class Notifications extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			notifications : [
				{
					id : 1,
					body : 'first notification'},
				{
					id : 2,
					body : 'second notification'},
				{
					id : 3,
					body : 'third and definitely last notification'},
			]
		}
	}

	render(){
		return(
			<div className="notifications">
				<h1>Notifications</h1>
				<ul>
					{this.state.notifications.map((notification,index) =>{
						return(
							<li key={index} className="single-notification">
								{notification.body}
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}