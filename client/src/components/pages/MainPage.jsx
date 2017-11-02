import React from 'react';

//Custom components
import Header from '../header/Header.jsx';
import NavigationBar from '../navigation-bar/NavigationBar.jsx'
import HomePage from './home-page/HomePage.jsx';
import ConnectRaspberryPage from './connect-raspberry-page/ConnectRaspberryPage.jsx';
import PhotosPage from './photos-page/PhotosPage.jsx';
import SignupPage from '../pages/signup-page/SignupPage.jsx';

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
			isUserLoggedIn : true,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleLoggingIn = this.handleLoggingIn.bind(this);
    }

	handleClick(pageToDisplay){
		this.setState({
			currentPageDisplayed : pageToDisplay
		});
	}

	handleLoggingIn (){
		//AJAX request to server

		this.setState ({
			isUserLoggedIn: true
		})
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

		if(this.state.isUserLoggedIn){
			return(
				<div className="main-page">
					<Header/>
					<NavigationBar
						Pages = {Pages}
						onPageChanged={this.handleClick}
					/>
					{subPage}
				</div>
			)
		}

		return(
			<SignupPage/>
		)
    }
}

export default MainPage;