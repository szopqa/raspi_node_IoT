import React from 'react';
import {
	Grid,
	Row,
	Col
} from 'react-bootstrap';

const Photo = (props) => {

	//getting image from resources
	let imagePath = require('./'+props.name);
	let photoIndex = props.index;
	return(
		//Photos displayed on the right side will animate to left
		<div className="single-photo">
			{(photoIndex+1) % 3 === 0 ?(
				<img src={imagePath} className="image" style={{float:'right'}}/>
			):(
				<img src={imagePath} className="image" />
			)}
		</div>
	)
};

export default class Photos extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			photos : [
				{name : 'sample1.jpg'},
				{name : 'sample1.jpg'},
				{name : 'sample1.jpg'},
				{name : 'sample1.jpg'},
				{name : 'sample1.jpg'},
				{name : 'sample1.jpg'},
				{name : 'sample1.jpg'},
				{name : 'sample1.jpg'},
				{name : 'sample1.jpg'},]
		}
	}

	componentDidMount () {
		//TODO : AJAX request to database
	}

	render(){
		return(
			<div className="photos">
				{this.state.photos.map((singlePhoto,index) => {
					return(
						<div key={index}>
							{index % 3 === 0 && (
								<Row/>
							)}
							<ColumnItem>
								<Photo key={index}
									index={index}
									name = {singlePhoto.name}
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