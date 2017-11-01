import React from 'react';

import Connector from './connector/Connector.jsx'
import FaceTracker from "../home-page/video/FaceTracker";

class ConnectRaspberryPage extends React.Component{

	render(){
		return(
			<div>
				<Connector/>
			</div>
		)
	}
}

export default ConnectRaspberryPage;