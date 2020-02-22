import React, { Component } from "react";
import "./Businesscanvas.css";
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import GridLayout from 'react-grid-layout';
import { StickyContainer, Sticky } from 'react-sticky';
import ReactDraggable from 'react-draggable';
import List from './List';
import Board from "react-trello";





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
          <div className="businesscard"   style={{overflow:"hidden",whiteSpace:"normal",wordBreak:"break-word"}}>  
             
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
          <div className="businessscard"   style={{overflow:"hidden",whiteSpace:"normal",wordBreak:"break-word"}}>  
             
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
          <div className="businessrect"   style={{overflow:"hidden",whiteSpace:"normal",wordBreak:"break-word"}}>  
             
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

      return(
          <div className="body">
<div className="businessnavbar">
<Link to="/Home"style={{textDecoration:"none"}}><p style={{color:"white",fontSize:"2em",textAlign:"center"}}>ETU LOGO</p></Link>
        
        <Link to="/Help" style={{marginLeft:"75%",fontSize:"1.5em",paddingTop:"0.65%",color:"white",textDecoration:"none"}}>Help</Link> 
  
       <a class="submenu" style={{marginLeft:"2%",marginTop:"0.65%"}}>
    
    <a  class="dropbtn" style={{color:"white",fontSize:"1.5em",textDecoration:"none"}} >Profile </a>
    <div class="dropdown-content">
    <Link to={{pathname:"/Profile"}}  style={{color:"black",textDecoration:"none"}}>My Profile</Link> 
    <Link to="/"  style={{color:"black",textDecoration:"none"}}>Logout</Link>
      
     </div></a>

</div>
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