import React, { Component } from "react";
import "./Businesscanvas.css";
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import GridLayout from 'react-grid-layout';
import { StickyContainer, Sticky } from 'react-sticky';
import ReactDraggable from 'react-draggable';
import List from './List';
import Board from "react-trello";
import HelpIcon from "@material-ui/icons/Help";
import Tooltip from "@material-ui/core/Tooltip";





class Businesscanvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Card:[],
            SCard:[],
            Rectangle:[],
        }
        this.addCard=this.addCard.bind(this);
      }
      addCard = () =>{
        const Businesscard =()=>{
          
          return(
            <ReactDraggable>
          <div className="businesscard"  contentEditable="true"  style={{overflow:"hidden",whiteSpace:"normal",wordBreak:"break-word"}}>  
             
                 </div>
        </ReactDraggable>
          );
        };
        this.setState({
          Card:[...this.state.Card,<Businesscard/>],
         
        
         
        });
      };
      addSCard = () =>{
        const BusinessScard =()=>{
          
          return(
            <ReactDraggable>
          <div className="businessscard"   contentEditable="true" style={{overflow:"hidden",whiteSpace:"normal",wordBreak:"break-word"}}>  
             
                 </div>
        </ReactDraggable>
          );
        };
        this.setState({
          SCard:[...this.state.SCard,<BusinessScard/>],
         
        
         
        });
      };
      addRect = () =>{
        const Businessrect =()=>{
          
          return(
            <ReactDraggable>
          <div className="businessrect"   contentEditable="true" style={{overflow:"hidden",whiteSpace:"normal",wordBreak:"break-word"}}>  
             
                 </div>
        </ReactDraggable>
          );
        };
        this.setState({
          Rectangle:[...this.state.Rectangle,<Businessrect/>],
         
        
         
        });
      };
  render(){
    const data = {
      lanes: [
        {
          id: 'lane1',
          title: 'Planned Tasks',
          label: '2/2',
          cards: [
            {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
            {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
          ]
        },
        {
          id: 'lane2',
          title: 'Completed',
          label: '0/0',
          cards: []
        }
      ]
    }
    var layout = [
 
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      
    ];

      return(
          <div className="body">
<nav class="navbar">
        <div class="brand-title"><Link to="/UserMap" style={{color:"white",textDecoration:"none"}}> ETU LOGO</Link></div>
        
        <div class="navbar-links">
          <ul>
          <li> <Link to="/UserMap" style={{color:"white",textDecoration:"none"}}>Dashboard</Link></li>
            <li> <Link to="/Help" style={{color:"white",textDecoration:"none"}}><Tooltip title={<span>Help</span>}><HelpIcon/></Tooltip></Link></li>
           
          </ul>
        </div>
      </nav>
<div className="businesscontainer">

    
    
<div className="businesslayout" >
{/* <Board  draggable /> */}

        
        
        
     

       <div className="col1" ><p style={{fontSize:"1.5em",margin:"4%"}}>Key Partners</p><h1 onClick={this.addCard} >+</h1>{this.state.Card}</div>
    <div className="col2" ><p style={{fontSize:"1.5em",margin:"4%"}}>Key Activities</p><h1 onClick={this.addSCard} >+</h1>{this.state.SCard}
    <div className="centerline"></div><p style={{fontSize:"1.5em",margin:"4%"}}>Key Resources</p><h1 onClick={this.addSCard} >+</h1>{this.state.SCard}</div>
    <div className="col3" ><p style={{fontSize:"1.5em",margin:"4%"}}>Value Propositions</p><h1 onClick={this.addCard} >+</h1>{this.state.Card}</div>
    <div className="col4" ><p style={{fontSize:"1.5em",margin:"4%"}}>Customer Relationships</p><h1 onClick={this.addSCard} >+</h1>{this.state.SCard}
    <div className="centerline"></div><p style={{fontSize:"1.5em",margin:"4%"}}>Channels</p><h1 onClick={this.addSCard} >+</h1>{this.state.SCard}</div>
    <div className="col5" ><p style={{fontSize:"1.5em",margin:"4%"}}>Customer Segments</p><h1 onClick={this.addCard} >+</h1>{this.state.Card}</div>
    <div className="col6" ><p style={{fontSize:"1.5em",margin:"2%"}}>Cost Structures{this.state.Rectangle}</p><h1 onClick={this.addRect} >+</h1></div>
    <div className="col7" ><p style={{fontSize:"1.5em",margin:"2%"}}>Revenue Streams{this.state.Rectangle}</p><h1 onClick={this.addRect} >+</h1></div> 
    
 </div>

</div>
{/* <div className="businessfooter" style={{marginBottom:10}}>
      <footer>
                    Powered By <a href="http://www.edunomics.in" target="_blank"> <strong>Edunomics</strong></a>
                </footer>
      </div> */}

          </div>
      )
  }}
  export default Businesscanvas;