import React from 'react';
import {
    Grid,
    Row,
    Col,} from 'react-bootstrap';

import NavButton from './NavButton.jsx';

import './NavigationBar.css'

class NavigationBar extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            currentlyChosen : 1,
			pages : [
				{isLoaded : false},
				{isLoaded : true},
				{isLoaded : false}
			],
            mode : {
                isStreamMode : false
            }
        }
    }

    handleChange(pageToChange){

        let pages  = this.state.pages.slice();

        pages.map((page) => {
            page.isLoaded = false;
        });

        switch (pageToChange){
			case 'Photos':
			    pages[0].isLoaded = true;
				break;

			case 'Home':
				pages[1].isLoaded = true;
				break;

			case 'Connect Raspberry':
				pages[2].isLoaded = true;
				break;
		}

        this.props.onPageChanged(pageToChange);
    }

    render(){

        const Pages = this.props.Pages;

        return(
            <div className="navigation-bar container">
                <Grid>
                    <Row>
                        <Col sm={6} xs={12} lg={6}>
                            <NavButton
                                value = 'Photos'
                                isDisabled = {this.state.pages[0].isLoaded}
                                onClick = {this.handleChange.bind(this,Pages.Photos)}
                            />
                        </Col>
                        <Col sm={6} xs={12} lg={6}>
                            <NavButton
                                value = 'Home'
                                isDisabled = {this.state.pages[1].isLoaded}
                                onClick = {this.handleChange.bind(this,Pages.Home)}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default NavigationBar;
/*

<ButtonToolbar>
    <Button onClick = {this.handleChange.bind(this,Pages.Photos)}
            className ="nav-button" bsSize="large" disabled = {this.state.pages[0].isLoaded}>
		{Pages.Photos}
    </Button>
</ButtonToolbar>

<ButtonToolbar>
                                <Button onClick = {this.handleChange.bind(this,Pages.Home)}
                                        className ="nav-button" bsSize="large" disabled = {this.state.pages[1].isLoaded}>
                                    {Pages.Home}
                                </Button>
                            </ButtonToolbar>

<ButtonToolbar>
                                <Button onClick = {this.handleChange.bind(this,Pages.ConnectRaspberry)}
                                        className ="nav-button" bsSize="large"  disabled = {this.state.pages[2].isLoaded}>
                                    {Pages.ConnectRaspberry}
                                </Button>
                            </ButtonToolbar>

*/