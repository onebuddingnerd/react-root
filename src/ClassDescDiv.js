
import * as React from 'react';

export default class ClassDescDiv extends React.Component {

    state = {
        ModeDescription: 'Hidden',
        DescriptionToggleIcon: '...',
        ModeProject: 'Hidden',
        ProjectToggleIcon: '...'
    }
    
    toggleDescription = (val, toggleVal) => {
        const newValue = val === 'Hidden' ? 'NotHidden' : 'Hidden'
        const newToggleValue = toggleVal === '...' ? ' ^ ' : '...'
        this.setState({
            ModeDescription: newValue,
            DescriptionToggleIcon: newToggleValue
        });
    }

    toggleProject = (val, toggleVal) => {
        const newValue = val === 'Hidden' ? 'NotHidden' : 'Hidden'
        const newToggleValue = toggleVal === '...' ? '^' : '...'
        this.setState({
            ModeProject: newValue,
            ProjectToggleIcon: newToggleValue
        })
    }

    render () {

        return (
            <div> 
                    
                    <center><p> <b> {this.props.Name} </b> </p>  </center>
                    
                    <span style={{display: "inline"}}>
                        <p><b>Description:</b> <button onClick={ () => this.toggleDescription(this.state.ModeDescription, this.state.DescriptionToggleIcon) }> {this.state.DescriptionToggleIcon} </button> </p>
                    </span>
                    { this.state.ModeDescription === "Hidden" ? 
                        <p></p> 
                    :
                        <p> {this.props.Desc} <br/> </p>
                        
                    }
                    
                    <span style={{display: "inline"}}>
                        <p><b>My favorite project...</b> <button onClick={ () => this.toggleProject(this.state.ModeProject, this.state.ProjectToggleIcon) }> {this.state.ProjectToggleIcon} </button> </p>
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