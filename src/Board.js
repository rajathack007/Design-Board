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
import Phaselane from './Lanetype/Phaselane'
import Textlane from './Lanetype/Textlane'
import Imagelane from './Lanetype/Imagelane'
import Filelane from './Lanetype/Filelane'
import Linelane from './Lanetype/Linelane'
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
      totalphase:[],
      totaltext:[],
      text1:"",
      type:"",
      
    };
    //close this.state

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
  onOpenModal1 = type => {
    this.setState({ open1: true,type });
  };
  
 
  onCloseModal = () => {
    this.setState({ open: false });
    this.state.totallayer.push({
      text: this.state.text,
      type: this.state.type
    });
    
    
  };
  onCloseModal1 = () => {
    this.setState({ open1: false });
    if (this.state.type =="Cardlane"){
    this.state.totalcard.push(this.state.text1);
    this.addRectangle();}
    else if (this.state.type =="Bubblelane"){
      this.state.totalbubble.push(this.state.text1);
      this.addBubble();}
      else if (this.state.type =="Phaselane"){
        this.state.totalphase.push(this.state.text1);
        this.addPhase();}
        else if (this.state.type =="Textlane"){
          this.state.totaltext.push(this.state.text1);
          this.addSquare();}

    
    
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
  addPhase = () =>{
    const Phaselane =()=>{
      return this.state.totalphase.map(item=>{
        return(
          
      <div className="phase" style={{overflow:"hidden",whiteSpace:"normal",wordBreak:"break-word"}} >  
                  {item}
             </div>
    
      );})
      
      
    };
    this.setState({
      Phase:<Phaselane/>,
     
    
     
    });
  };
  addSquare = () =>{
    const Textlane =()=>{
      return this.state.totaltext.map(item=>{
        return(
          
      <div className="square" style={{overflow:"hidden",whiteSpace:"normal",wordBreak:"break-word"}} >  
                  {item}
             </div>
    
      );})
      
      
    };
    this.setState({
      Square:<Textlane/>,
     
    
     
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
              {item.text}
              <button className="button1" onClick={() =>this.onOpenModal1("Cardlane")}>+</button>
              {this.state.Rectangle}
            </Cardlane>
          )}
         else if (item.type=="Bubblelane"){
            return(
              <Bubblelane>
                {item.text}
                <button className="button1" onClick={()=>this.onOpenModal1("Bubblelane")}>+</button>
                {this.state.Bubble}
              </Bubblelane>
            )}
            else if (item.type=="Phaselane"){
              return(
                <Phaselane>
                  {item.text}
                  <button className="button1" onClick={()=>this.onOpenModal1("Phaselane")}>+</button>
                  {this.state.Phase}
                </Phaselane>
              )}
              else if (item.type=="Textlane"){
                return(
                  <Textlane>
                    {item.text}
                    <button className="button1" onClick={()=>this.onOpenModal1("Textlane")}>+</button>
                    {this.state.Square}
                  </Textlane>
                )}
                else if (item.type=="Imagelane"){
                  return(
                    <Imagelane>
                      {item.text}
                      <UploadImages  multiple  onChange={this.onChange} style={{height:100}}  />
                    </Imagelane>
                  )}
                  else if (item.type=="Filelane"){
                    return(
                      <Filelane>
                        {item.text}
                        <div className="file"><FilePond/></div>
                      </Filelane>
                    )}
                    else if (item.type=="Linelane"){
                      return(
                        <Linelane>
                          {item.text}
                          <div style={{marginTop:-80}}>
                           <Lines/> 
                          </div>
                        </Linelane>
                      )}
        })}

           
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
           <DropdownItem><a  onClick={()=>this.onOpenModal("Phaselane")}>
           &#8680; Add Phase Lane</a>
           </DropdownItem>
           <DropdownItem><a onClick={()=>this.onOpenModal("Linelane")}>
           📈 Add Line Lane</a>
           </DropdownItem>
           <DropdownItem><a onClick={()=>this.onOpenModal("Imagelane")}>
           &#128190; Add Image Lane</a>
           </DropdownItem>
           <DropdownItem><a onClick={()=>this.onOpenModal("Filelane")}>
           &#128194; Add File Lane</a>
           </DropdownItem>
           <DropdownItem><a onClick={()=>this.onOpenModal("Textlane")}>
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
