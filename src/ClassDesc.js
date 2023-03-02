
import * as React from 'react';
import Collapsible from 'react-collapsible';
import ReactShowMoreText from 'react-show-more-text';
import ShowMoreText from "react-show-more-text";

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
            <div style={{borderStyle: 'solid', borderColor: '#008080', borderWidth: '3px', borderRadius: '13px', margin: '5px', perspective: '5px', padding: '13px'}} > 
                 <style>{divCss}</style>  
                 {/*  <div class="divCourseTitle">
                        <style>{divCourseTitle}</style>   
                        <center><p> <b> {this.props.Name} </b> </p>  </center>
                    </div> */}

                    {/* <span style={{display: "inline"}}>
                        <p> <b>Why I liked it:</b> <button class="toggle" onClick={ () => this.toggleDescription(this.state.ModeDescription, this.state.DescriptionToggleIcon) }> {this.state.DescriptionToggleIcon} </button> </p>
                    </span> */}
                    {/* <Collapsible trigger={'Why I liked it: ' + this.state.DescriptionToggleIcon} triggerStyle={{"font-weight":"bold"}}
                                    onOpen={this.toggleDescription}
                                    onClose={this.toggleDescription}
                                    >
                        <p> {this.props.Desc} </p>
                    </Collapsible>
                    {this.DescriptionToggleIcon === '▼' ? <br/> : <p></p>} */}
                    
                    {/* <span style={{display: "inline"}}>
                        <p><b>My favorite project...</b> <button class="toggle" onClick={ () => this.toggleProject(this.state.ModeProject, this.state.ProjectToggleIcon) }> {this.state.ProjectToggleIcon} </button> </p>
                    </span> */}
                    {/* <Collapsible open={true} trigger={'My favorite project... ' + this.state.ProjectToggleIcon} triggerStyle={{"font-weight":"bold"}}
                                    onOpen={this.toggleProject}
                                    onClose={this.toggleProject}
                                    >
                        <p> {this.props.Project} </p>
                    </Collapsible> */}
                        <div class="divCourseTitle" >
                            <style>{divCourseTitle}</style>   
                            <center><p><b>{this.props.Name}</b> </p>  </center>
                        </div>
                        <b>Why I liked it:</b> 
                        <ShowMoreText more='more' less='less'>
                            <p>{this.props.Desc}</p>
                        </ShowMoreText>
                        <br></br>
                        <b>My favorite course assignment...</b> 
                        <ShowMoreText more='more'  less='less'>
                            <p>{this.props.Project}</p>
                        </ShowMoreText>
                        <br></br>
                    </div>
        )
    }
} 