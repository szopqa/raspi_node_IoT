import React from 'react';

import NavigationBar from '../navigation-bar/NavigationBar.jsx'
import HomePage from './home-page/HomePage.jsx';
import ConnectRaspberryPage from './connect-raspberry-page/ConnectRaspberryPage.jsx';

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

		switch (this.state.currentPageDisplayed){

			case 'Photos':
				return(
					<div className="main-page">
						<NavigationBar
							Pages = {Pages}
							onPageChanged={this.handleClick}
						/>
						Photos
					</div>
				);
				break;

			case 'Home':
				return(
					<div className="main-page">
						<NavigationBar
							Pages = {Pages}
							onPageChanged={this.handleClick}
						/>
						<HomePage/>
					</div>
				);
				break;

			case 'Connect Raspberry':
				return(
					<div className="main-page">
						<NavigationBar
							Pages = {Pages}
							onPageChanged={this.handleClick}
						/>
						<ConnectRaspberryPage/>
					</div>
				);
				break;
		}

    }
}

export default MainPage;