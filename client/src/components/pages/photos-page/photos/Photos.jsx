import React from 'react';
import {
	Grid,
	Row,
	Col
} from 'react-bootstrap';

const Photo = (props) => {

	//getting image from resources
	// let imagePath = require('./'+props.name);
	let photoIndex = props.index;
	console.log(props);
	return(
		//Photos displayed on the right side will animate to left
		<div className="single-photo">
			{(photoIndex+1) % 3 === 0 ?(
				<img src={props.data} className="image" style={{float:'right'}}/>
			):(
				<img src={props.data} className="image" />
			)}
		</div>
	)
};

export default class Photos extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			status : ''
		}
	}

	render(){

		let photos = this.props.fetchedPhotos;
		let status = 'Loading images ...';

		return(
			<div className="photos">
				{photos.length === 0 &&
					<div className = "loading-msg">
						{status}
					</div>
				}

				{photos.map((singlePhoto,index) => {
					return(
						<div key={index}>
							{index % 3 === 0 && (
								<Row/>
							)}
							<ColumnItem>
								<Photo key = {index}
									index = {index}
									data = {singlePhoto}
								/>
							</ColumnItem>
						</div>
					)
				})}
			</div>
		);
	}
}

const ColumnItem = (props) => {
	return(
		<Col lg={4} xs={6} sm={6}>
			{props.children}
		</Col>
	)
};