import React from 'react';

export default class Notifications extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			notifications : [
				'first notification',
				'second notification',
				'third and definitely last notification',]
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
								{notification}
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}