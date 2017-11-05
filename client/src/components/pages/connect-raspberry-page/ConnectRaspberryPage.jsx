import React from 'react';

import Connector from './connector/Connector.jsx'
import FaceTracker from "../home-page/video/FaceTracker";

class ConnectRaspberryPage extends React.Component{

	render(){
		return(
			<div className="connect-raspberry-page">
				<Connector/>
			</div>
		)
	}
}

export default ConnectRaspberryPage;