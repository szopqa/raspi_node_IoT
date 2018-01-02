import React from 'react';
import Button from './Button';
import axios from 'axios';
import config from '../../../../config/config.js';
import Video from  '../video/Video.jsx';

import './Switch.css';

class Switch extends React.Component {

    constructor(props){
        super(props);
        this.state = 	{
            isStreamModeOn : this.props.state.isStreamModeOn,
            status : 'Mode : ' + ( this.props.state.isStreamModeOn ? 'Stream' : 'Standby'),
            isButtonDisabled : false
        }
    }
    
    handleClick () {

        //Getting current pins state
        axios.post(`http://${config.serverAddress}/stream`,{
            streamShouldBeTurnedOn : ! this.state.isStreamModeOn
        }).then((response) => {
            this.setState({
                isStreamModeOn : ! this.state.isStreamModeOn,
                status : 'Mode : ' + ( this.props.state.isStreamModeOn ?  'Standby' : 'Stream'),
                isButtonDisabled : false
            });
            this.props.state.isStreamModeOn = ! this.props.state.isStreamModeOn;
            this.props.reloadAfterModeChange();
        })
        .catch((err) => {

        });

        //Set while waiting for server action
        this.setState({
            status: 'Changing mode ...',
            isButtonDisabled : true
        });
    }

    render () {
        const colorWhenStream = '#1e8727';
        const colorWhenStandby = '#8A090D';

        return(
            <div className="switch mode-switch" style={{background: (this.state.isStreamModeOn ? colorWhenStream : colorWhenStandby)}}>
                <div className="switch-header">
                    {this.props.header}
                </div>
                <div className="switch-status">
                    {this.state.status}
                </div>
                <Button
                    value = {this.state.isStreamModeOn ? 'Turn Standby' : 'Turn Stream'}
                    onClick = {() => this.handleClick()}
                    isDisabled = {this.state.isButtonDisabled}
                />
            </div>
        );
    }
}

export default Switch;