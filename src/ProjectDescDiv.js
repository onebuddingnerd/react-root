

import * as React from 'react';
import Collapsible from 'react-collapsible';

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
            <Collapsible trigger={'Ok ' + this.state.DescriptionExposureIcon} onOpen={this.toggleExposureIcon} onClose={this.toggleExposureIcon} >
            <p>
                This is the collapsible content. It can be any element or React
                component you like.
            </p>
            <p>
                It can even be another Collapsible component. Check out the next
                section!
            </p>
            </Collapsible>
        );
    }

}