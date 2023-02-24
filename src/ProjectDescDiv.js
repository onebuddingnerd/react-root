

import * as React from 'react';
import Collapsible from 'react-collapsible';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import UncontrolledExample from './Carousel';
import CardDiv from './CardDiv'


export default class ClassDescDiv extends React.Component {

    state = {
        DescriptionExposureIcon: '▼' // '▲'
    }

    toggleExposureIcon = () => {
        console.log('hi from toggler - project')
        const newIcon = this.state.DescriptionExposureIcon === '▼' ? '▲' : '▼'
        this.setState({
            DescriptionExposureIcon: newIcon
        })
    }
    
    render() {
        return (
            <div>
            <Collapsible trigger={[ <div> <p><b>{this.props.triggerText}:</b> <br/> <i>{this.props.shortSentence}</i> {this.state.DescriptionExposureIcon}</p> </div> ]} 
                    onOpen={this.toggleExposureIcon} onClose={this.toggleExposureIcon} 
                    >
            <p>
                <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                <ul>
                <li><b>When: </b> {this.props.whenContent}</li>
                <li><b>Implemented in: </b> {this.props.implementedInContent}</li>
                <li><b>Links:</b></li>
                </ul>
                </Typography>
            </p>
            </Collapsible>

            {/* <div >
                <UncontrolledExample/>
            </div> */}

            </div>
        );
    }

}