import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css"; //
import "./App.css"; //
import ColorPicker from "react-color-picker"; //
import FontPicker from "font-picker-react"; //
import Stickies from "./stickies/Stickies";
import Bubble from "./stickies/bubble";
import ReactDraggable from 'react-draggable';
 import Modal from 'react-responsive-modal';
import ImageUploader from 'react-images-upload';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import Dropzone from 'react-dropzone';
import  UploadImages  from  'yagoubi-upload-images';
import Dropdown from 'react-drop-down';

import Popup from "reactjs-popup";

import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

import { Link,NavLink } from 'react-router-dom';

import FontSizeChanger from 'react-font-size-changer';
import { Twitter } from 'react-social-sharing'


  import { EmailShareButton} from "react-share";

  import LineTo from 'react-lineto';
import color from "react-color-picker/lib/utils/color";
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Lines from './Lanetype/Lines'

import Cardlane from './Lanetype/Cardlane'
import Bubblelane from './Lanetype/Bubblelane'
import {Rnd} from 'react-rnd';





class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      layer: [],
      layer1: [],
      layer2: [],
      layer3:[],
      layer4:[],
      layer5:[],
      layer6:[],
      layer7:[],
      Circle:[],
      Circle1:[],
      Square:[],
      Rectangle:[],
      Line:[],
      Bubble:[],
      Phase:[],
      color: {
        r: "241",
        g: "112",
        b: "19",
        a: "1"
      },
      background: "#ff0000",
      activeFontFamily: "Font",
      Italic:[],
          Bold:[],
          Underline:[],
      notes: [],
      notes1: [],
      notes2: [],
      open: false,
      open1:false,
      visible : false,
      show:false,
      pictures: [],
      text:"",
      totallayer:[],
      totalcard:[],
      totalbubble:[],
      text1:"",
      type:""
      
    };
    //close this.state

    // this.addLaneLayer = this.addLaneLayer.bind(this);
    // this.addCardLayer = this.addCardLayer.bind(this);
    this.addBubbleLayer = this.addBubbleLayer.bind(this);
    this.addLineLayer=this.addLineLayer.bind(this);
    this.addImageLayer=this.addImageLayer.bind(this);
    this.addFileLayer=this.addFileLayer.bind(this);
    this.addPhaseLayer=this.addPhaseLayer.bind(this);
    this.addTextLayer=this.addTextLayer.bind(this);
    this.addCircle=this.addCircle.bind(this);
    
    this.addSquare=this.addSquare.bind(this);
    this.addRectangle=this.addRectangle.bind(this);
    this.addLine=this.addLine.bind(this);
    this.addBubble=this.addBubble.bind(this);
    this.addPhase=this.addPhase.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.addItalic=this.addItalic.bind(this);
   this.addUnderline=this.addUnderline.bind(this);
   this.addBold=this.addBold.bind(this);
    
  } //close constructor()

  onOpenModal = type => {
    this.setState({ open: true,type });
  };
  onOpenModal1 = () => {
    this.setState({ open1: true });
  };
  
 
  onCloseModal = () => {
    this.setState({ open: false });
    this.state.totallayer.push({
      text:this.state.text,
      type:this.state.type});
    
    
  };
  onCloseModal1 = () => {
    this.setState({ open1: false });
    if (this.state.type =="Cardlane"){
    this.state.totalcard.push(this.state.text1);
    this.addRectangle();}
    else if (this.state.type =="Bubblelane"){
      this.state.totalbubble.push(this.state.text1);
      this.addBubble();}

    
    
  };
  onDrop(pictureFiles, pictureDataURLs) {
		this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
        });
  }
  onChange = (images) =>{
 
    console.log(images)
     
    }
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
    
    handleChange=event=>{
      this.setState({[event.target.name]:event.target.value},()=>{
        console.log(this.state.ProjectName)
      })
      
    }
    change = e =>{
      this.setState({
      [e.target.name]: e.target.value});
    };
  

  // addLaneLayer = () => {
  //   let wrapperStyle = {};
  //   if (this.state.showBound) {
  //     wrapperStyle = {
  //       height: "700px",
  //       width: "700px",
  //       background: "rgba(0, 0, 0, 0.2)",
  //       border: "2px solid #fff",
  //       overflow: "auto",
        
  //       padding: "10px"
  //     };
  //   }
  //   const Layerlane = () => {
  //     return (
  //       <div>
  //         <div className="container1">
  //           <div className="layer">
  //             <p>Layer Lane</p>
  //           </div>
  //           <div style={{display:"inline-flex"}}>
  //           <div className="sidebar" ><p style={{textAlign:"center",marginTop:"70%"}}onClick={this.onOpenModal}> NEW LANE</p></div>
  //             {/*<button className="button1" onClick={() => this.add("Note")}>
  //               +
  //             </button>

  //     {this.state.notes.map(this.eachNote)}*/}
  //             <Stickies
  //               notes={this.state.notes}
  //               tape={this.state.showTape}
  //               style={{ float: "left"}}
  //               colors={
  //                 this.state.showCustomColors ? this.state.colors : undefined
  //               }
  //               title={this.state.showTitle}
  //               footer={this.state.showFooter}
  //               onChange={this.onChange}
  //               wrapperStyle={wrapperStyle}
  //             />
              
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   };
  //   this.setState({
  //     layer: [...this.state.layer, <Layerlane />]
  //   });
  // };

  // addCardLayer = () => {
    
  //   const Cardlane = () => {
  //     return (
  //       <ReactDraggable>
  //       <div>
          
  //         <div className="container2">
         
  //          <div className="layer1">
  //             <p>Card Lane</p>
  //           </div>
  //           <div style={{display:"inline-flex"}}>
  //           <div className="sidebar" >
  //           <button className="button1" onClick={this.addRectangle}> +</button>
  //             <p style={{textAlign:"center",marginTop:"70%"}} onClick={this.onOpenModal}> NEW LANE</p></div>
  //           <div className="rectangle" onClick={this.onOpenModal}>{this.state.text}</div>
  //             {this.state.Rectangle}
           
  //           </div>
            
  //         </div>
  //       </div></ReactDraggable>
  //     );
  //   };
  //   this.setState({
  //     layer1: [...this.state.layer1, <Cardlane />]
  //   });
  // };
  addBubbleLayer = () => {
    
    const Bubblelane = () => {
      return (
        <div>
          <div className="layer2">
              <p style={{fontSize:"1.5em",marginTop:"1%"}}>Bubble Lane</p>
            </div>
        
        
        <div className="Bubblelane">
          <div className="container3">
            
            <div style={{display:"inline-flex"}}>
            <div className="sidebar" style={{overflow:"hidden",whiteSpace:"normal"}}>
            <button className="button1" onClick={this.addBubble}> +</button>
              <p style={{textAlign:"center",marginTop:"70%"}} onClick={this.onOpenModal}> NEW LANE</p></div>
            <div className="bubble" style={{overflow:"hidden",whiteSpace:"normal"}} >{this.state.text}</div>
              {this.state.Bubble}
             
            </div>
          </div>
        </div>
        </div>
      );
    };
    this.setState({
      layer2: [...this.state.layer2, <Bubblelane />]
    });
  };
  
  addLineLayer = () => {

    const Linelane = () => {
      return (
<div>
        <div className="layer3">
              <p style={{fontSize:"1.5em",marginTop:"1%"}}>Line Lane</p>
          
            </div>
        <div className="linelane">
          <div className="container3">
            
            <div style={{display:"inline-flex"}}>
            <div className="sidebar" style={{overflow:"hidden",whiteSpace:"normal"}}><p style={{textAlign:"center",marginTop:"70%"}} onClick={this.onOpenModal}> NEW LANE</p></div>
            <div style={{marginTop:-80}}>
              
      
             <Lines/> 
             </div>
            
           </div>
          </div>
        </div></div>
      );
    };
    this.setState({
      layer3: [...this.state.layer3, <Linelane />]
    });
  };
  addImageLayer = () => {
   
    const Imagelane = () => {
      console.log()
      return (
<div>
        <div className="layer4">
              <p style={{fontSize:"1.5em",marginTop:"1%"}}>Image Lane</p>
          </div>
        <div className="Imagelane">
          <div className="container3">
            
          <div style={{display:"inline-flex"}}>
          <div className="sidebar" style={{overflow:"hidden",whiteSpace:"normal"}} ><p style={{textAlign:"center",marginTop:"70%"}} onClick={this.onOpenModal}> NEW LANE</p></div>
          {/* <div className="image"><ImageUploader  /></div>   */}
          <UploadImages  multiple  onChange={this.onChange}  />
  
        
            </div>
        </div>
        </div></div>
      );
    };
    this.setState({
      layer4: [...this.state.layer4, <Imagelane />]
    });
  };
  addFileLayer = () => {
    
    const Filelane = () => {
      return (
        <div>
<div className="layer5">
              <p style={{fontSize:"1.5em",marginTop:"1%"}}>File Lane</p>
          </div>

        <div className="Filelane">
          <div className="container3">
            
          <div style={{display:"inline-flex"}}>
          <div className="sidebar" style={{overflow:"hidden",whiteSpace:"normal"}}><p style={{textAlign:"center",marginTop:"70%"}} onClick={this.onOpenModal}> NEW LANE</p></div>
        <div className="file"><FilePond/></div>  
       </div>
        
        </div>
        
        </div></div>
      );
    };
    this.setState({
      layer5: [...this.state.layer5, <Filelane />]
    });
  };
  addPhaseLayer = () => {

    

    const Phaselane = () => {
      return (
        // <ReactDraggable>
        <div>
           <div className="layer6">
              <p style={{fontSize:"1.5em",marginTop:"1%"}}>Phase Lane</p>
            </div>
          <div className="container2">
           
            <div style={{display:"inline-flex"}}>
              <div className="sidebar" style={{overflow:"hidden",whiteSpace:"normal"}}><button className="button1" onClick={this.addPhase}> +</button>
              
             <p style={{textAlign:"center",marginTop:"70%"}} onClick={this.onOpenModal}> NEW LANE</p> 
              
              </div>
              
            
            <div className="phase" style={{overflow:"hidden",whiteSpace:"normal"}}>{this.state.text}
            </div>
              {this.state.Phase}
            </div>
          </div>
        </div>
        // </ReactDraggable>
      );
    };
    this.setState({
      layer6: [...this.state.layer6, <Phaselane />]
    });
  };
  addTextLayer = () => {
    
   
    
    const Textlane = () => {
      const { open } = this.state;
      
      return (
        <div>
        <div className="layer7">
              <p style={{fontSize:"1.5em",marginTop:"1%"}}>Text Lane</p>
              
            </div>
        <div className="linelane">
          <div className="container3">
            
            <div style={{display:"inline-flex"}} >
          <div className="sidebar" style={{overflow:"hidden",whiteSpace:"normal"}} >
          <button className="button1" onClick={this.addSquare}> +</button>
            <p style={{textAlign:"center",marginTop:"70%"}} onClick={this.onOpenModal}> NEW LANE</p></div>
            
          
          
          
            <div className="square1" style={{overflow:"hidden",whiteSpace:"normal"}}>{this.state.text} </div>{this.state.Square}
          </div>
  
</div>
         
          
        </div></div>
        
      );
    };
    this.setState({
      layer7: [...this.state.layer7, <Textlane />]
    });
  
  };
  addCircle = () =>{
    const Circlelane =()=>{
      return(
      <div className="circle" style={{overflow:"hidden",whiteSpace:"normal",wordBreak:"break-word"}} >      
             </div>
    
      );
    };
    this.setState({
      Circle:[...this.state.Circle,<Circlelane/>],
     
    
     
    });
  };
  
  addSquare = () =>{
    const Squarelane =()=>{
      const { data } = this.props.location;
      return(
        <ReactDraggable>
      <div className="square"  onClick={this.onOpenModal} style={{overflow:"hidden",whiteSpace:"normal",wordBreak:"break-word"}}>  
         
             </div>
    </ReactDraggable>
      );
    };
    this.setState({
      Square:[...this.state.Square,<Squarelane/>],
     
    
     
    });
  };
  addRectangle = () =>{
    const Rectanglelane =()=>{
      return this.state.totalcard.map(item=>{
        return(
          <ReactDraggable>
      <div className="rectangle" style={{overflow:"hidden",whiteSpace:"normal",wordBreak:"break-word"}} >  
                  {item}
             </div>
    </ReactDraggable>
      );})
      
      
    };
    this.setState({
      Rectangle:<Rectanglelane/>,
     
    
     
    });
  };
  addBubble = () =>{
    const Bubblelane =()=>{
      return this.state.totalbubble.map(item=>{
        return(
          <ReactDraggable>
      <div className="bubble" style={{overflow:"hidden",whiteSpace:"normal",wordBreak:"break-word"}} >  
                  {item}
             </div>
    </ReactDraggable>
      );})
      
      
    };
    this.setState({
      Bubble:<Bubblelane/>,
     
    
     
    });
  };
  addLine = () =>{
    const Linelane =()=>{
      return(
      <div className="line" >      
             </div>
    
      );
    };
    this.setState({
      Line:[...this.state.Line,<Linelane/>],
     
    
     
    });
  };
  // addBubble = () =>{
  //   const Bubblelane =()=>{
  //     return(
        
  //     <div className="bubble" style={{overflow:"hidden",whiteSpace:"normal",wordBreak:"break-word"}}  onClick={this.onOpenModal} > 
       
  //            </div>
      
    
  //     );
  //   };
  //   this.setState({
  //     Bubble:[...this.state.Bubble,<Bubblelane/>],
     
    
     
  //   });
  // };
  addPhase = () =>{
    const Phaselane =()=>{
      return(
      <div className="phase" onClick={this.onOpenModal} style={{overflow:"hidden",whiteSpace:"normal",wordBreak:"break-word"}}  >  {this.state.text}
      
             </div>
    
      );
    };
    this.setState({
      Phase:[...this.state.Phase,<Phaselane/>],
     
    
     
    });
  };
  addItalic = () =>{
    const Italicfont =()=>{
      return(
      <div className="Italic" >
            
      </div>
      );
    };
    this.setState({
      Italic:[...this.state.Italic,<Italicfont />],
      
    })
  }
  addUnderline = () =>{
    const Underlinefont =()=>{
      return(
      <div className="Underline">
            
      </div>
      );
    };
    this.setState({
      Underline:[...this.state.Underline,<Underlinefont />],
      
    })
  }
  addBold = () =>{
    const Boldfont =()=>{
      return(
      <div className="Bold">
            
      </div>
      )
    }
    this.setState({
      Bold:[...this.state.Bold,<Boldfont />],
      
    })
  }
 
  render() {
    const { open } = this.state;
    const { open1 } = this.state;
    const { data } = this.props.location;
    
    
    const { data1} = this.props.location;
    function handleSelection(value, event) {  }
   
    

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
    return (
      
      <div className="board">
        
      
         <div className="navbar" style={{color:"white"}}>
          ETU LOGO
         
          
          
          
        </div> 
        <div className="projectnamenavbar">{data}
        
        </div>
       
        <div  >
        
              
        {/* {this.state.layer1} */}
        {this.state.totallayer.map(item=>{
          if (item.type=="Cardlane"){
          return(
            <Cardlane>
              {item}
              <button className="button1" onClick={this.onOpenModal1}>+</button>
              {this.state.Rectangle}
            </Cardlane>
          )}
         else if (item.type=="Bubblelane"){
            return(
              <Bubblelane>
                {item}
                <button className="button1" onClick={this.onOpenModal1}>+</button>
                {this.state.Bubble}
              </Bubblelane>
            )}
        })}

        
       {/* {this.state.layer3}
{this.state.layer4}
{this.state.layer5}
{this.state.layer6}
{this.state.layer7} */}
 
           
      <UncontrolledButtonDropdown style={{marginLeft:20,marginTop:10}}>
      <DropdownToggle caret>
       Add New Lane
      </DropdownToggle>
      <DropdownMenu>
      
          
         
          <DropdownItem>
             <a onClick={()=>this.onOpenModal("Cardlane")} >
           &#9645; Add Card Lane</a>
           </DropdownItem>
           <DropdownItem> <a  onClick={()=>this.onOpenModal("Bubblelane")}>
           &#128172; Add Bubble Lane</a>
           </DropdownItem>
           <DropdownItem><a  onClick={this.addPhaseLayer}>
           &#8680; Add Phase Lane</a>
           </DropdownItem>
           <DropdownItem><a onClick={this.addLineLayer}>
           📈 Add Line Lane</a>
           </DropdownItem>
           <DropdownItem><a onClick={this.addImageLayer}>
           &#128190; Add Image Lane</a>
           </DropdownItem>
           <DropdownItem><a onClick={this.addFileLayer}>
           &#128194; Add File Lane</a>
           </DropdownItem>
           <DropdownItem><a onClick={this.addTextLayer}>
           &#128221; Add Text Lane</a>
           </DropdownItem>
 
           
           
        
        
      </DropdownMenu>
    </UncontrolledButtonDropdown >



   
        <Modal open={open} onClose={this.onCloseModal} center>
           <div className="textlane" >
             <div className="textlanenavbar"><div className="textsize2 " style={{padding:10}}>Edit Lane</div></div>
             <div className="editornavbar" style={{paddingTop: "1%"}}>
<div style={{paddingRight: "2%"}}>
             <FontPicker 
            apiKey="AIzaSyBjbypy3oo5oo_xPba71Dnb6836mBwoWVQ"
            activeFontFamily={this.state.activeFontFamily}
            onChange={nextFont =>
              this.setState({
                activeFontFamily: nextFont.family
              })
            }
          /></div>
           <div style={{paddingRight: "2%"}}><button className="Italic" onClick={this.addItalic}>I</button>
          {this.state.Italic}
                </div>
                <div style={{paddingRight: "2%"}}>
                  <button className="Underline" onClick={this.addUnderline}>U</button>
                 
                {this.state.Underline}
                </div>
                <div style={{paddingRight: "2%"}}><button className="Bold" onClick={this.addBold}>B</button>
                {this.state.Bold}</div> 
                
                
    
                <FontSizeChanger
          targets={['#target .content']}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
            
          }}
          options={{
            stepSize: 2,
            range: 3
          }}
          customButtons={{
            up: <span style={{'fontSize': '36px'}}>A</span>,
            down: <span style={{'fontSize': '20px'}}>A</span>,
            style: {
              backgroundColor: 'red',
              color: 'white',
              WebkitBoxSizing: 'border-box',
              WebkitBorderRadius: '5px',
              width: '60px'
            },
            buttonsMargin: 10
            
          }}         
             
            
               
        />
              </div>
             <textarea  className="apply-font Italic"  style={{width:500,height:350,marginTop:10}} name="text" onChange={e=>this.change(e)}></textarea><br></br>
              <button type="button" style={{fontSize:20,marginLeft:80}}  onClick= {this.onCloseModal} >Save</button>
              
              </div>
              
        </Modal>
        <Modal open={open1} onClose={this.onCloseModal1} center>
           <div className="textlane" >
             <div className="textlanenavbar"><div className="textsize2 " style={{padding:10}}>Edit Card</div></div>
             <div className="editornavbar" style={{paddingTop: "1%"}}>
<div style={{paddingRight: "2%"}}>
             <FontPicker 
            apiKey="AIzaSyBjbypy3oo5oo_xPba71Dnb6836mBwoWVQ"
            activeFontFamily={this.state.activeFontFamily}
            onChange={nextFont =>
              this.setState({
                activeFontFamily: nextFont.family
              })
            }
          /></div>
           <div style={{paddingRight: "2%"}}><button className="Italic" onClick={this.addItalic}>I</button>
          {this.state.Italic}
                </div>
                <div style={{paddingRight: "2%"}}>
                  <button className="Underline" onClick={this.addUnderline}>U</button>
                 
                {this.state.Underline}
                </div>
                <div style={{paddingRight: "2%"}}><button className="Bold" onClick={this.addBold}>B</button>
                {this.state.Bold}</div> 
                
               
                <FontSizeChanger
          targets={['#target .content']}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
            
          }}
          options={{
            stepSize: 2,
            range: 3
          }}
          customButtons={{
            up: <span style={{'fontSize': '36px'}}>A</span>,
            down: <span style={{'fontSize': '20px'}}>A</span>,
            style: {
              backgroundColor: 'red',
              color: 'white',
              WebkitBoxSizing: 'border-box',
              WebkitBorderRadius: '5px',
              width: '60px'
            },
            buttonsMargin: 10
            
          }}         
             
            
               
        />
              </div>
             <textarea  className="apply-font Italic " style={{width:500,height:350,marginTop:10}} name="text1" onChange={e=>this.change(e)}></textarea><br></br>
              <button type="button" style={{fontSize:20,marginLeft:80}}  onClick= {this.onCloseModal1} >Save</button>
              
              </div>
              
        </Modal>
      </div>
      
      {data1}
      
         
          
        

        
        <div className="container">
          
          
         
        </div>
        <div className="footer">
        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
        <TabList>
          <Tab> <Link to="/Board"> {data}</Link></Tab>
          <Tab>  New </Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
        
     
         
        
        </div>
        
      </div>
    );
  }
}

export default Board;
