import React from 'react';
import {
	Grid,
	Row,
	Col
} from 'react-bootstrap';

const Photo = (props) => {
	return(
		<div className="single-photo">
			{props.name}
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
				{name : 'sample1.jpg'},]
		}
	}

	componentDidMount () {

	}

	render(){
		return(
			<div className="photos">
				<Row>
					{this.state.photos.map((singlePhoto,index) => {
						return(
							<Col lg={4} xs={6} sm={6}>
								<Photo
									name = {singlePhoto.name}
								/>
							</Col>
						)
					})}
				</Row>
			</div>
		);
	}
}