import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';

class Color extends React.Component{
   
  constructor(props){
     super(props);
     
     this.state = {
        color: "#F07C65"
     }
  }
  

  
  changeColor(event){
     this.setState({
        color: event.target.value
     });
  }
  
  render(){
     const styleObj = {
        backgroundColor: this.state.color,
        fontSize: 32 / 2
     };
     return(
        <section style={styleObj} >
           <h3>{this.props.ask}</h3>
           <input value={this.state.color} onChange={this.changeColor.bind(this)}/>
           
        </section>
        
     );
  }
}

export default Color; 
