import React from 'react';
import config from '../../../../config/config';

//Static photo used for testing
import testingPhoto from '../../../../images/test.jpg'

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
                <div className="video-viewer">
                    <img src={testingPhoto}  id="video" alt="Loading view ..."/>
				</div>
			))

		);
	}

}

export default Video;