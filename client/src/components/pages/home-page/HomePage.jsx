import React from 'react';
import {Grid,Col,Row} from 'react-bootstrap';

import PinSwitch from './switch/PinSwitch.jsx';
import StreamSwitch from './switch/ModeSwitch.jsx';
import ServoSwitch from './switch/ServoSwitch.jsx';
import Video from './video/Video.jsx';
import FaceTracker from '../home-page/video/FaceTracker.jsx';

function PinSwitches (props){
	return (
		<div className="container">
			<Grid>
				<Col xs={12} lg={6}>
					<Row>
                        <ServoSwitch
                            header = 'Adjust camera position'
                            pinNumber = {33}
                            buttons = { ['Up', 'Center', 'Down'] }
                        />
					</Row>
					<Row>
                        <ServoSwitch
                            header = 'Adjust camera position'
                            pinNumber = {33}
                            buttons = { ['Left', 'Center', 'Right'] }
                        />
					</Row>
				</Col>
                <Col xs={12} lg={6}>
					<Row>
						<Video/>
					</Row>
                    <Row>
                        <StreamSwitch
                            header = {"Mode switch"}
                        />
                    </Row>
                </Col>
			</Grid>
		</div>
	);
}

export default PinSwitches;


/*
* <div className="container">
			<Grid>
				<Row className = "show-grid">
					<Col xs={12} lg={6}>
						<ServoSwitch
							header = 'Adjust camera position'
							pinNumber = {33}
							buttons = { ['Up', 'Center', 'Down'] }
						/>
					</Col>
					<Col xs={12} lg={6}>
							<Video/>
					</Col>
				</Row>
				<Row className = "show-grid">
                    <Col xs={12} lg={6}>
                        <ServoSwitch
                            header = 'Adjust camera position'
                            pinNumber = {33}
                            buttons = { ['Left', 'Center', 'Right'] }
                        />
                    </Col>
					<Col xs={12} lg={4}>
						<StreamSwitch
							header = {"Mode switch"}
						/>
					</Col>
				</Row>
			</Grid>
		</div>
* */