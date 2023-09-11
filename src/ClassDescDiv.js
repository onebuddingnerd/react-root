
import * as React from 'react';
import Collapsible from 'react-collapsible';

const divCss = `
div.scroll {
  background-color: 0;
  height: min(100%, 500px);
  overflow: auto;
  padding: 10px;
}
`
const divCssContainer = `
div.scrollContainer {
  background-color: 0;
  height: min(100%, 550px)
  overflow: auto;
  padding: 10px;
}
`
const divCourseTitle = `
div.divCourseTitle {
    height: 3em; 
    line-height: 1em; 
    overflow: hidden;
}
`

const myTriggerStyle = {
    text: "bold",
}

export default class ClassDescDiv extends React.Component {

    state = {
        DescriptionToggleIcon: '▼',
        ProjectToggleIcon: '▲'
    }

    /* 

    where I mainly develop, compose DevOps assets for, and contribute to release-readying of the Cloud CLI (and its accompanying SDK for plug-ins); recent work has also included development in the "Projects" section of the Cloud platform--spanning a wide range of the service's stack, from the API's data transmission behavior to the web UI rendering logic--intended to streamline customers' resource provisioning and infrastructure management experiences.
    
    */
    
    toggleDescription = () => {
        // console.log('hi from toggler')
        const newToggleValue = this.state.DescriptionToggleIcon === '▼' ? '▲' : '▼'
        this.setState({
            DescriptionToggleIcon: newToggleValue
        });
    }

    toggleProject = () => {
        const newToggleValue = this.state.ProjectToggleIcon === '▼' ? '▲' : '▼'
        this.setState({
            ProjectToggleIcon: newToggleValue
        })
    }

    render () {

        return (
            <div > 
                 <style>{divCss}</style>  
                    <div class="divCourseTitle">
                        <style>{divCourseTitle}</style>   
                        <center><p> <b> {this.props.Name} </b> </p>  </center>
                    </div>

                    {/* <span style={{display: "inline"}}>
                        <p> <b>Why I liked it:</b> <button class="toggle" onClick={ () => this.toggleDescription(this.state.ModeDescription, this.state.DescriptionToggleIcon) }> {this.state.DescriptionToggleIcon} </button> </p>
                    </span> */}
                    <Collapsible trigger={'Why I liked it: ' + this.state.DescriptionToggleIcon} triggerStyle={{"font-weight":"bold"}}
                                    onOpen={this.toggleDescription}
                                    onClose={this.toggleDescription}
                                    >
                        <p> {this.props.Desc} </p>
                    </Collapsible>
                    {this.DescriptionToggleIcon === '▼' ? <br/> : <p></p>}
                    
                    {/* <span style={{display: "inline"}}>
                        <p><b>My favorite project...</b> <button class="toggle" onClick={ () => this.toggleProject(this.state.ModeProject, this.state.ProjectToggleIcon) }> {this.state.ProjectToggleIcon} </button> </p>
                    </span> */}
                    <Collapsible open={true} trigger={'My favorite course assignment... ' + this.state.ProjectToggleIcon} triggerStyle={{"font-weight":"bold"}}
                                    onOpen={this.toggleProject}
                                    onClose={this.toggleProject}
                                    >
                        <p> {this.props.Project} </p>
                    </Collapsible>
                    <br/>
            </div>
        )
    }
} 