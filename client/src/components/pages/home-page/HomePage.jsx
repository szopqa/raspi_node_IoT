import React from 'react';
import {Grid,Col,Row} from 'react-bootstrap';

import PinSwitch from './switch/PinSwitch.jsx';
import StreamSwitch from './switch/ModeSwitch.jsx';
import ServoSwitch from './switch/ServoSwitch.jsx';
import Video from './video/Video.jsx';
import FaceTracker from '../home-page/video/FaceTracker.jsx';

import applicationState from '../../../globals/applicationState.js';

function PinSwitches (props){
	return (
		<div className="container">
			<Grid>
				<Col xs={12} lg={6}>
					<Row>
                        <ServoSwitch
                            header = 'Adjust camera position'
                            pinNumber = {12}
                            buttons = { ['Up', 'Center', 'Down'] }
                            servoNumber = {0}
                        />
					</Row>
					<Row>
                        <ServoSwitch
                            header = 'Adjust camera position'
                            pinNumber = {33}
                            buttons = { ['Left', 'Center', 'Right'] }
                            servoNumber = {1}
                        />
					</Row>
				</Col>
                <Col xs={12} lg={6}>
					<Row>
						<Video
                            state = {applicationState}
						/>
					</Row>
                    <Row>
                        <StreamSwitch
                            state = {applicationState}
						/>
                    </Row>
                </Col>
			</Grid>
		</div>
	);
}

export default PinSwitches;
