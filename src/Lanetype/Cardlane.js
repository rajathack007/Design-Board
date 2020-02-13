import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../index.css"; //
// import Stickies from "./stickies/Stickies";
class Cardlane extends Component {
    constructor(props) {
      super(props);
      this.state = {
        layer1: [],
      };
      this.addCardLayer = this.addCardLayer.bind(this);
    }
    addCardLayer = () => {
        let wrapperStyle = {};
        if (this.state.showBound) {
          wrapperStyle = {
            height: "700px",
            width: "700px",
            background: "rgba(0, 0, 0, 0.2)",
            border: "2px solid #fff",
            overflow: "auto",
            
          
            padding: "10px"
          };
        }
        const Cardlane = () => {
          return (
            
            <div>
              
              <div className="container2">
             
                <div className="layer1">
                  <p>Card Lane</p>
                </div>
                <div style={{display:"flex"}}>
                <div className="sidebar" ><p style={{textAlign:"center",marginTop:"70%"}}> NEW LANE</p></div>
                   {/* <Stickies
                    notes={this.state.notes}
                    tape={this.state.showTape}
                    style={{ float: "left" }}
                    colors={
                      this.state.showCustomColors ? this.state.colors : undefined
                    }
                    title={this.state.showTitle}
                    footer={this.state.showFooter}
                    onChange={this.onChange}
                    wrapperStyle={wrapperStyle}
                    
                  />  */}
               
                </div>
                
              </div>
            </div>
          );
        };
        this.setState({
          layer1: [...this.state.layer1, <Cardlane />]
        });
      };
    
        
        
    
}
export default Cardlane;