import React from 'react'

import './Video.css'

require('tracking');
require('tracking/build/data/face');


export default class FaceTracker extends React.Component {

	state = {
		isSystemBlocked : false
	};

	tracker = null;

	handleFaceDetection(){
		//console.log('Face detected!');
	}

	activateSystem(){
		this.setState({
			isSystemBlocked: false
		})
	}

	componentDidMount() {

		this.tracker = new window.tracking.ObjectTracker('face');
		this.tracker.setInitialScale(4);
		this.tracker.setStepSize(2);
		this.tracker.setEdgesDensity(0.1);

		window.tracking.track(this.refs.cameraOutput, this.tracker, { camera: true });

		this.tracker.on('track', event => {

			if(! this.state.isSystemBlocked && event){
				this.handleFaceDetection();
				this.setState({
					isSystemBlocked:true
				});
				setTimeout(this.activateSystem(),5000);
			}

			let context = this.refs.canvas.getContext('2d');
			context.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);

			event.data.forEach(function(rect) {
				context.strokeStyle = '#a64ceb';
				context.strokeRect(rect.x, rect.y, rect.width, rect.height);
				context.font = '11px Helvetica';
				context.fillStyle = "#fff";
				context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
				context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);


				console.log('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
				console.log('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
			})
		})
	}

	componentWillUnmount () {
		this.tracker.removeAllListeners()
	}

	render () {

		const width = 480;
		const height = 640;

		return (
			<div className="cameraOutput">
				<video ref="cameraOutput" width={width} height={height} autoPlay loop muted>
				</video>
				<canvas id ="canvas" ref="canvas" width={width} height={height}>
				</canvas>
			</div>
		)
	}
}
