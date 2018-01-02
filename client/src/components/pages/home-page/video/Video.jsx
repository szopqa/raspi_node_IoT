import React from 'react';
import config from '../../../../config/config';

//Static photo used for testing
import standby from '../../../../images/standby.png'

import './Video.css';

class Video extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		//used when raspberry is connected
		let raspberryStream = 'http://'+config.serverIP+':8081/';
		let isStreamModeOn = this.props.state.isStreamModeOn;
		return(
			(isStreamModeOn ? (
				<div className="video-viewer">
                    <img src={raspberryStream}  id="video" alt="Loading view ..."/>
                </div>
			) : (
				<div className="standby-information">
					Standby mode is on
					<div className="standby-icon">
						<img src={standby} alt="Loading view ..."/>
					</div>
				</div>
			))

		);
	}

}

export default Video;