import React from 'react';

import NavigationBar from '../navigation-bar/NavigationBar.jsx'
import HomePage from './home-page/HomePage.jsx';
import ConnectRaspberryPage from './connect-raspberry-page/ConnectRaspberryPage.jsx';
import PhotosPage from './photos-page/PhotosPage.jsx';

import './MainPage.css'

const Pages = {
	Photos: 'Photos',
	Home: 'Home',
	ConnectRaspberry: 'Connect Raspberry'
};


class MainPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentPageDisplayed : Pages.Home,
        };

        this.handleClick = this.handleClick.bind(this);
    }

	handleClick(pageToDisplay){
		this.setState({
			currentPageDisplayed : pageToDisplay
		});
	}

    render(){

		let subPage;

		switch (this.state.currentPageDisplayed) {
			case 'Photos':
				subPage = <PhotosPage/>;
				break;

			case 'Home' :
				subPage = <HomePage/>;
				break;

			case 'Connect Raspberry':
				subPage = <ConnectRaspberryPage/>;
				break;
		}

		return(
			<div className="main-page">
				<NavigationBar
					Pages = {Pages}
					onPageChanged={this.handleClick}
				/>
				{subPage}
			</div>
		)
    }
}

export default MainPage;