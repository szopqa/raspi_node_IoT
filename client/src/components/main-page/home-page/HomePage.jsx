import React from 'react';
import {Grid,Col,Row} from 'react-bootstrap';

import PinSwitch from './switch/PinSwitch.jsx';
import ServoSwitch from './switch/ServoSwitch.jsx';
import Video from './video/Video.jsx';
import FaceTracker from '../home-page/video/FaceTracker.jsx';

function PinSwitches (props){
	return (
		<div className="container">
			<Grid>
				<Row className = "show-grid">
					<Col xs={12} lg={6}>
						<ServoSwitch
							header = 'Servo manipulator'
							pinNumber = {33}
						/>
					</Col>
					<Col xs={12} lg={6}>
						<Video/>
					</Col>
				</Row>
				<Row className = "show-grid">
					<Col xs={12} lg={4}>
						<PinSwitch
							header = 'Red Led switch'
							pinNumber = {7}
						/>
					</Col>
					<Col xs={12} lg={4}>
						<PinSwitch
							header = 'Yellow Led switch'
							pinNumber = {24}
						/>
					</Col>
					<Col xs={12} lg={4}>
						<PinSwitch
							header = 'Green Led switch'
							pinNumber = {22}
						/>
					</Col>
				</Row>
			</Grid>
		</div>
	);
}

export default PinSwitches;