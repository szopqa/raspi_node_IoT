import React from 'react';
import {Grid,Col,Row} from 'react-bootstrap';

import PinSwitch from './switch/PinSwitch.jsx';
import StreamSwitch from './switch/ModeSwitch.jsx';
import ServoSwitch from './switch/ServoSwitch.jsx';
import Video from './video/Video.jsx';
import FaceTracker from '../home-page/video/FaceTracker.jsx';

import applicationState from '../../../globals/applicationState.js';

class PinSwitches extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			key : Math.random()
		}
	}

	reloadComponent = () => {
		// Reloading Video component after mode change
		setTimeout(()=>{
            this.setState({
                key : Math.random()
            })
		},500);
	};

	render(){
        return (
            <div className="container">
                <Grid>
                    <Col xs={12} lg={6}>
                        <Row>
                            <ServoSwitch
                                header = 'Adjust camera position'
                                pinNumber = {12}
                                buttons = { ['Down', 'Center', 'Up'] }
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
								key = {this.state.key}
                            />
                        </Row>
                        <Row>
                            <StreamSwitch
                                state = {applicationState}
								reloadAfterModeChange = {()=> this.reloadComponent()}
                            />
                        </Row>
                    </Col>
                </Grid>
            </div>
        );
	}

}

export default PinSwitches;
