
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
  
export default class CardDiv extends React.Component {

    state = {
        isFlipped: false,
    }

    toggleFlip = () => {
        this.setState({isFlipped: !this.state.isFlipped})
    }

    render() {
        
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} 
                flipDirection="vertical">
                <div style={{
                    perspective: '5px',
                    width: 'auto',
                    height: 'auto',
                    background: '#008080',
                    fontSize: '18px',
                    color: 'black',
                    margin: '13px',
                    borderRadius: '13px',
                    textAlign: 'center',
                    padding: '13px'
                }}>
                    <b style={{color: "white"}}>{this.props.ProjectName}</b>
                    <br />
                    <center> <i style={{color: "white", fontSize:"13px"}}>{this.props.ProjectDesc}</i> </center>
                    <br />
                    <button style={{
                        width: '100px',
                        padding: '10px',
                        fontSize: '13px',
                        background: '##00DCDC',
                        fontWeight: 'bold',
                        borderRadius: '5px'
                    }} onClick={() => this.toggleFlip()}>
                        More</button>
                </div>
                <div style={{
                    width: 'auto',
                    height: 'auto',
                    background: '#008080',
                    fontSize: '18px',
                    color: 'black',
                    margin: '20px',
                    borderRadius: '13px',
                    textAlign: 'left',
                    padding: '20px'
                }}>
                     {this.props.flipContent} 
                    <br />
                    <center><button style={{
                        width: 'auto',
                        padding: '10px',
                        fontSize: '13px',
                        background: '##00DCDC',
                        fontWeight: 'bold',
                        borderRadius: '5px'
                    }} onClick={() => this.toggleFlip()}>
                        Short Summary</button> </center>
                </div>
            </ReactCardFlip>
        );
    }
}