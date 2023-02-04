
import * as React from 'react';

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

export default class ClassDescDiv extends React.Component {

    state = {
        ModeDescription: 'Hidden',
        DescriptionToggleIcon: '▼',
        ModeProject: 'NotHidden',
        ProjectToggleIcon: '▲'
    }
    
    toggleDescription = (val, toggleVal) => {
        const newValue = val === 'Hidden' ? 'NotHidden' : 'Hidden'
        const newToggleValue = toggleVal === '▼' ? '▲' : '▼'
        this.setState({
            ModeDescription: newValue,
            DescriptionToggleIcon: newToggleValue
        });
    }

    toggleProject = (val, toggleVal) => {
        const newValue = val === 'Hidden' ? 'NotHidden' : 'Hidden'
        const newToggleValue = toggleVal === '▼' ? '▲' : '▼'
        this.setState({
            ModeProject: newValue,
            ProjectToggleIcon: newToggleValue
        })
    }

    render () {

        return (
            <div > 
                 {/* <style>{divCss}</style>   */}
                    <div class="divCourseTitle">
                        <style>{divCourseTitle}</style>   
                        <center><p> <b> {this.props.Name} </b> </p>  </center>
                    </div>

                    <span style={{display: "inline"}}>
                        <p> <b>Why I liked it:</b> <button class="toggle" onClick={ () => this.toggleDescription(this.state.ModeDescription, this.state.DescriptionToggleIcon) }> {this.state.DescriptionToggleIcon} </button> </p>
                    </span>
                    { this.state.ModeDescription === "Hidden" ? 
                        <p></p> 
                    :
                        <p> {this.props.Desc} <br/> </p>
                        
                    }
                    
                    <span style={{display: "inline"}}>
                        <p><b>My favorite project...</b> <button class="toggle" onClick={ () => this.toggleProject(this.state.ModeProject, this.state.ProjectToggleIcon) }> {this.state.ProjectToggleIcon} </button> </p>
                    </span>
                    { this.state.ModeProject === "Hidden" ? 
                        <p></p> 
                    :
                        <p> {this.props.Project} <br/> </p>
                    }
            </div>
        )
    }
} 