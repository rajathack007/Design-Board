import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Rnd} from 'react-rnd';
import "../index.css"; //
// import Stickies from "./stickies/Stickies";
class Filelane extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
      
    }
    render(){
          return (
          <div>
          <div className="layer1" >
                  <p style={{fontSize:"1.25em",marginTop:"1%"}}>File Lane</p>
                </div>
              <div className="container2" >
             
                
                <div style={{display:"inline-flex"}}>
                
  
 <div className="sidebar" style={{overflow:"hidden",whiteSpace:"normal"}} ><p style={{textAlign:"center",marginTop:"50%"}}> {this.props.children[0]}</p></div> 
          {this.props.children[1]}
          
               
                </div>
                
              </div>
            </div>
        
        );
      };
    
    }    
        
    

export default Filelane;