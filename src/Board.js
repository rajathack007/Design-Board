
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css"; //
import "./App.css"; //
import ColorPicker from "react-color-picker"; //
import FontPicker from "font-picker-react"; //
import Stickies from "./stickies/Stickies";
import Bubble from "./stickies/bubble";
import ReactDraggable from "react-draggable";
import Modal from "react-responsive-modal";
import ImageUploader from "react-images-upload";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import Dropzone from "react-dropzone";
import UploadImages from "yagoubi-upload-images";
import Dropdown from "react-drop-down";
import GridLayout from 'react-grid-layout';
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import parse from "html-react-parser";
import Popup from "reactjs-popup";

import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

import { Link, NavLink } from "react-router-dom";

import FontSizeChanger from "react-font-size-changer";
import { Twitter } from "react-social-sharing";

import { EmailShareButton } from "react-share";

import LineTo from "react-lineto";
import color from "react-color-picker/lib/utils/color";
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Lines from "./Lanetype/Lines";

import Cardlane from "./Lanetype/Cardlane";
import Bubblelane from "./Lanetype/Bubblelane";
import Phaselane from "./Lanetype/Phaselane";
import Textlane from "./Lanetype/Textlane";
import Imagelane from "./Lanetype/Imagelane";
import Filelane from "./Lanetype/Filelane";
import Linelane from "./Lanetype/Linelane";
import Log from "./Draft/Log";
import { Rnd } from "react-rnd";
import ExpandCollapse from "react-expand-collapse";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import HelpIcon from '@material-ui/icons/Help';
import ArchiveIcon from '@material-ui/icons/Archive';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import DeleteIcon from '@material-ui/icons/Delete';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import Tooltip from "@material-ui/core/Tooltip";


const zoomArr = [
  "50%",
  "75%",
  "85%",
  "90%",
  "100%",
  " 120%",
  "130%",
  "150%",
  "180%"
];

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      id: [],
      layer: [],
      layer1: [],
      layer2: [],
      layer3: [],
      layer4: [],
      layer5: [],
      layer6: [],
      layer7: [],
      Circle: [],
      Circle1: [],
      Square: [],
      Rectangle: [],
      Line: [],
      Bubble: [],
      Phase: [],
      color: {
        r: "241",
        g: "112",
        b: "19",
        a: "1"
      },
      background: "#ff0000",
      activeFontFamily: "Font",
      Italic: [],
      Bold: [],
      Underline: [],
      notes: [],
      notes1: [],
      notes2: [],
      open: false,
      open1: false,
      open2: false,
      open3: false,
      visible: false,
      show: false,
      pictures: [],
      text: "",
      totallayer: [],
      totalcard: [],
      totalbubble: [],
      totalphase: [],
      totaltext: [],
      text1: "",
      text2: "",
      type: "",
      tabs: [],
      edit: "",
      id: 0,
      indexofArr: 4,
      bool: false,
      editorState: EditorState.createEmpty()
    };
    //close this.state

    this.addCircle = this.addCircle.bind(this);

    this.addSquare = this.addSquare.bind(this);
    this.addRectangle = this.addRectangle.bind(this);
    this.addLine = this.addLine.bind(this);
    this.addBubble = this.addBubble.bind(this);
    this.addPhase = this.addPhase.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.addItalic = this.addItalic.bind(this);
    this.addUnderline = this.addUnderline.bind(this);
    this.addBold = this.addBold.bind(this);
  } //close constructor()
  onEditorStateChange = editorState => {
    this.setState(
      {
        editorState,
        text1: draftToHtml(convertToRaw(editorState.getCurrentContent()))
      },
      () => {
        console.log("t1", this.state.text1);
      }
    );
  };
  onEditorStateChange1 = editorState => {
    this.setState(
      {
        editorState,
        text: draftToHtml(convertToRaw(editorState.getCurrentContent()))
      },
      () => {
        console.log("t1", this.state.text1);
      }
    );
  };
  onOpenModal = type => {
    this.setState({ open: true, type, editorState: EditorState.createEmpty() });
  };
  onOpenModal1 = type => {
    this.setState({
      open1: true,
      type,
      editorState: EditorState.createEmpty()
    });
  };
  onOpenModal2 = () => {
    this.setState({ open2: true });
  };
  onOpenModal3 = (type, id) => {
    console.log("id", id);
    if (type == "Cardlane") {
      this.setState(
        { open3: true, type, edit: this.state.totalcard[id], id },
        () => {
          console.log("text", this.state.totalcard);
        }
      );
      const html = this.state.totalcard[id];
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        const editorState = EditorState.createWithContent(contentState);
        this.state = {
          editorState
        };
      }
    } else if (type == "Bubblelane") {
      this.setState({
        open3: true,
        type,
        edit: this.state.totalbubble[id],
        id
      });
      const html = this.state.totalbubble[id];
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        const editorState = EditorState.createWithContent(contentState);
        this.state = {
          editorState
        };
      }
    } else if (type == "Phaselane") {
      this.setState({ open3: true, type, edit: this.state.totalphase[id], id });
      const html = this.state.totalphase[id];
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        const editorState = EditorState.createWithContent(contentState);
        this.state = {
          editorState
        };
      }
    } else if (type == "Textlane") {
      this.setState({ open3: true, type, edit: this.state.totaltext[id], id });
      const html = this.state.totaltext[id];
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        const editorState = EditorState.createWithContent(contentState);
        this.state = {
          editorState
        };
      }
    }
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
    if (this.state.type == "Cardlane") {
      this.state.totalcard.push(this.state.text1);
      this.addRectangle();
    } else if (this.state.type == "Bubblelane") {
      this.state.totalbubble.push(this.state.text1);
      this.addBubble();
    } else if (this.state.type == "Phaselane") {
      this.state.totalphase.push(this.state.text1);
      this.addPhase();
    } else if (this.state.type == "Textlane") {
      this.state.totaltext.push(this.state.text1);
      this.addSquare();
    }
  };
  onCloseModal2 = () => {
    this.setState({ open2: false });
    this.state.tabs.push(this.state.text2);
  };
  onCloseModal3 = () => {
    let id = this.state.id;
    let type = this.state.type;
    if (type == "Cardlane") {
      const newItems = [...this.state.totalcard];
      newItems[id] = this.state.text1;
      this.setState({ open3: false, totalcard: newItems });
      this.addRectangle();
    } else if (type == "Bubblelane") {
      const newItems = [...this.state.totalbubble];
      newItems[id] = this.state.text1;
      this.setState({ open3: false, totalbubble: newItems });
      this.addBubble();
    } else if (type == "Phaselane") {
      const newItems = [...this.state.totalphase];
      newItems[id] = this.state.text1;
      this.setState({ open3: false, totalphase: newItems });
      this.addPhase();
    } else if (type == "Textlane") {
      const newItems = [...this.state.totaltext];
      newItems[id] = this.state.text1;
      this.setState({ open3: false, totaltext: newItems });
      this.addSquare();
    }
  };
  zoomin = () => {
    var element = document.querySelector(".maindiv");
    let value = element.getBoundingClientRect().width / element.offsetWidth;
    if (this.state.indexofArr < zoomArr.length - 1) {
      this.state.indexofArr += 1;
      value = zoomArr[this.state.indexofArr];
      //document.querySelector("#sel").value = value;
      // console.log('current value is',value)
      // console.log('scale value is',value)
      element.style["zoom"] = `${value}`;
    }
  };

  zoomout = () => {
    var element = document.querySelector(".maindiv");
    let value = element.getBoundingClientRect().width / element.offsetWidth;
    if (this.state.indexofArr > 0) {
      this.state.indexofArr -= 1;
      value = zoomArr[this.state.indexofArr];
      //document.querySelector("#sel").value = value;
      // console.log('scale value is',value)
      element.style["zoom"] = `${value}`;
    }
  };

  openFullscreen = state => {
    var elem = document.documentElement;
    if (state) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
      }
    } else if (!state) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    this.setState({
      bool: !this.state.bool
    });
  };

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles)
    });
  }
  onChange = images => {
    console.log(images);
  };
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state.ProjectName);
    });
  };
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addCircle = () => {
    const Circlelane = () => {
      return (
        <div
          className="circle"
          style={{
            overflow: "hidden",
            whiteSpace: "normal",
            wordBreak: "break-word"
          }}
        ></div>
      );
    };
    this.setState({
      Circle: [...this.state.Circle, <Circlelane />]
    });
  };
  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  addRectangle = () => {
    const Rectanglelane = () => {
      return this.state.totalcard.map((item, id) => {
        return (
          <ReactDraggable>
            <div
              className="rectangle"
              style={{
                overflow: "hidden",
                whiteSpace: "normal",
                wordBreak: "break-word"
              }}
              
            >
              <div onClick={() => this.onOpenModal3("Cardlane", id)}> {parse(item)}</div>
            </div>
          </ReactDraggable>
        );
      });
    };
    this.setState({
      Rectangle: <Rectanglelane />
    });
  };
  addBubble = () => {
    const Bubblelane = () => {
      return this.state.totalbubble.map((item, id) => {
        return (
          <ReactDraggable>
            <div
              className="bubble"
              style={{
                overflow: "hidden",
                whiteSpace: "normal",
                wordBreak: "break-word"
              }}
              onClick={() => this.onOpenModal3("Bubblelane", id)}
            >
               {parse(item)}
            </div>
          </ReactDraggable>
        );
      });
    };
    this.setState({
      Bubble: <Bubblelane />
    });
  };
  addPhase = () => {
    const Phaselane = () => {
      var layout = [
 
        {i: 'b', x: 1, y: 0, w: 3, h: 2},
        
      ];
  
      return this.state.totalphase.map((item, id) => {
        return (
          
          <div
            className="phase"
            style={{
              overflow: "hidden",
              whiteSpace: "normal",
              wordBreak: "break-word"
            }}
           
             draggable="false"
          >
           <span  onClick={() => this.onOpenModal3("Phaselane", id)}> {parse(item)}</span> 
          </div>
         
          
        );
      });
    };
    this.setState({
      Phase: <Phaselane />
    });
  };
  addSquare = () => {
    const Textlane = () => {
      return this.state.totaltext.map((item, id) => {
        return (
          <div
            className="square"
            style={{
              overflow: "hidden",
              whiteSpace: "normal",
              wordBreak: "break-word"
            }}
            onClick={() => this.onOpenModal3("Textlane", id)}
          >
             {parse(item)}
          </div>
        );
      });
    };
    this.setState({
      Square: <Textlane />
    });
  };
  addLine = () => {
    const Linelane = () => {
      return <div className="line"></div>;
    };
    this.setState({
      Line: [...this.state.Line, <Linelane />]
    });
  };

  addItalic = () => {
    const Italicfont = () => {
      return <div className="Italic"></div>;
    };
    this.setState({
      Italic: [...this.state.Italic, <Italicfont />]
    });
  };
  addUnderline = () => {
    const Underlinefont = () => {
      return <div className="Underline"></div>;
    };
    this.setState({
      Underline: [...this.state.Underline, <Underlinefont />]
    });
  };
  addBold = () => {
    const Boldfont = () => {
      return <div className="Bold"></div>;
    };
    this.setState({
      Bold: [...this.state.Bold, <Boldfont />]
    });
  };

  render() {
    const { open } = this.state;
    const { open1 } = this.state;
    const { open2 } = this.state;
    const { open3 } = this.state;
    const { data } = this.props.location;
    const { editorState } = this.state;
    const { editorState1 } = this.state;
    const { data1 } = this.props.location;
    function handleSelection(value, event) {}

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
        {/* <div className="containernavbar1">
          <Link to="/Home" style={{ textDecoration: "none" }}>
            <p style={{ color: "black", fontSize: "2em", textAlign: "center" }}>
              ETU LOGO
            </p>
          </Link>
          <a
            onClick={this.zoomin}
            style={{ paddingLeft: "70%",fontSize: "1.5em", marginTop: "0.55%" }}
          >
            <Tooltip title={<span>Zoom In</span>}>
   <ZoomInIcon ></ZoomInIcon>
</Tooltip>
            
          </a>
          <a
            onClick={this.zoomout}
            style={{ marginLeft: "2%",fontSize: "1.5em", marginTop: "0.55%" }}
          >
            <Tooltip title={<span>Zoom Out</span>}>
            <ZoomOutIcon ></ZoomOutIcon ></Tooltip>
          </a>
          <a
            onClick={() => this.openFullscreen(!this.state.bool)}
            style={{ marginLeft: "2%",fontSize: "1.5em", marginTop: "0.55%" }}
          >
            {this.state.bool ? (
               <Tooltip title={<span>Exit Full Screen</span>}>
              <FullscreenExitIcon></FullscreenExitIcon></Tooltip>
            ) : (
              <Tooltip title={<span> Full Screen</span>}><FullscreenIcon /></Tooltip>
            )}
          </a>
          <Link
            to="/Help"
            style={{
              marginLeft: "2%",
              fontSize: "1.5em",
              marginTop: "0.55%",
              color: "black",
              textDecoration: "none"
            }}
          >
            <Tooltip title={<span>Help</span>}><HelpIcon/></Tooltip>
          </Link>
          <a class="submenu" style={{ marginLeft: "2%", marginTop: "0.55%" }}>
            <a
              class="dropbtn"
              style={{
                color: "black",
                fontSize: "1.5em",
                textDecoration: "none"
              }}
            >
            &#9776;
            </a>
            <div class="dropdown-content1">

              <a style={{ color: "black", textDecoration: "none" }}>
              &#x2630; Map Items
              </a>
              <a style={{ color: "black", textDecoration: "none" }}>
              <ArchiveIcon/>  Archive Lanes and Cards
              </a>
              <a style={{ color: "black", textDecoration: "none" }}>
              <FileCopyOutlinedIcon/>  Make a Copy
              </a>
              <a style={{ color: "black", textDecoration: "none" }}>
            <SystemUpdateAltIcon/>  Export Map
              </a>
              <a style={{ color: "black", textDecoration: "none" }}>
               < UnarchiveIcon/>  Unarchive Map
              </a>
              <a style={{ color: "black", textDecoration: "none" }}>
              <DeleteIcon/>  Delete Map
              </a>
              <a style={{ color: "black", textDecoration: "none" }}>
              <MailOutlineIcon/>  Contact us
              </a>
              <a style={{ color: "black", textDecoration: "none" }}>
                <InsertDriveFileOutlinedIcon/>Terms & Condition
              </a>
              <a style={{ color: "black", textDecoration: "none" }}>
              <ArchiveIcon/>  Archived Map
              </a>
              <Link
                to="/Profile"
                style={{ color: "black", textDecoration: "none" }}
              >
               <PersonOutlineOutlinedIcon/>  My Profile
              </Link>
              <a style={{ color: "black", textDecoration: "none" }}>
                <CreditCardIcon/>Billing
              </a>
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                <ExitToAppIcon/>Logout
              </Link>
              
            </div>
          </a>
        </div> */}
        <nav class="navbar">
        <div class="brand-title"><Link to="/Home" style={{color:"white",textDecoration:"none",}}> ETU LOGO</Link></div>
        
        <div class="navbar-links">
          <ul>
            <li> <Link to="/Help" style={{color:"white",textDecoration:"none"}}><Tooltip title={<span>Help</span>}><HelpIcon/></Tooltip></Link></li>
           
           <a class="submenu" style={{ marginLeft: "2%", marginTop: "0.55%" }}>
            <a
              class="dropbtn"
              style={{
                color: "white",
                fontSize:"1.25em",
                textDecoration: "none"
              }}
            >
            &#9776;Menu
            </a>
            <div class="dropdown-content1">

              <a style={{ color: "black", textDecoration: "none" }}>
              &#x2630; Map Items
              </a>
              <a style={{ color: "black", textDecoration: "none" }}>
              <ArchiveIcon/>  Archive Lanes and Cards
              </a>
              <a style={{ color: "black", textDecoration: "none" }}>
              <FileCopyOutlinedIcon/>  Make a Copy
              </a>
              <a style={{ color: "black", textDecoration: "none" }}>
            <SystemUpdateAltIcon/>  Export Map
              </a>
              <a style={{ color: "black", textDecoration: "none" }}>
               < UnarchiveIcon/>  Unarchive Map
              </a>
              <a style={{ color: "black", textDecoration: "none" }}>
              <DeleteIcon/>  Delete Map
              </a>
              <a style={{ color: "black", textDecoration: "none" }}>
              <MailOutlineIcon/>  Contact us
              </a>
              <a style={{ color: "black", textDecoration: "none" }}>
                <InsertDriveFileOutlinedIcon/>Terms & Condition
              </a>
              <a style={{ color: "black", textDecoration: "none" }}>
              <ArchiveIcon/>  Archived Map
              </a>
              <Link
                to="/Profile"
                style={{ color: "black", textDecoration: "none" }}
              >
               <PersonOutlineOutlinedIcon/>  My Profile
              </Link>
              <a style={{ color: "black", textDecoration: "none" }}>
                <CreditCardIcon/>Billing
              </a>
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                <ExitToAppIcon/>Logout
              </Link>
              
            </div>
          </a>
           
          </ul>
        </div>
      </nav>
        <div className="projectnamenavbar"  >
         
        <div contentEditable="true"> {(data)?data:"Unnamed Journey Map"}</div> 
        <div class="projectnamenavbar-links">
        <ul>
         <li
            onClick={this.zoomin}
            
            
          >
            <Tooltip title={<span>Zoom In</span>}>
   <ZoomInIcon ></ZoomInIcon>
</Tooltip>
            
          </li>
          <li
            onClick={this.zoomout}
            style={{ marginLeft: "2%" }}
          >
            <Tooltip title={<span>Zoom Out</span>}>
            <ZoomOutIcon ></ZoomOutIcon ></Tooltip>
          </li>
          <li
            onClick={() => this.openFullscreen(!this.state.bool)}
            style={{ marginLeft: "2%" }}
          >
            {this.state.bool ? (
               <Tooltip title={<span>Exit Full Screen</span>}>
              <FullscreenExitIcon></FullscreenExitIcon></Tooltip>
            ) : (
              <Tooltip title={<span> Full Screen</span>}><FullscreenIcon /></Tooltip>
            )}
          </li></ul></div>
        </div>
        
        <div class="maindiv">
        
          {/* {this.state.layer1} */}<div className="wholecontainer">
          {this.state.totallayer.map(item => {
            if (item.type == "Cardlane") {
              return (
                
                <ExpandCollapse previewHeight="50px" expanded="true" >
                  <Cardlane>
                   {parse(item.text)}
                    {/* <button
                      className="button1"
                      onClick={() => this.onOpenModal1("Cardlane")}
                    >
                      +
                    </button> */}

                    {this.state.Rectangle} 
                    <div class="hoverWrapper" style={{position:"absolute",display:"inline-flex"}}>
 <div id="hoverShow1"> <div
                      
                      onClick={() => this.onOpenModal1("Cardlane")}
                      style={{marginLeft:"33%",fontSize:"5em",color:"black",marginTop:"-10%"}}
                     
                    >
                      <p>+</p>
                    </div></div>
</div>   
                    {/* <div className="hovercard" >
               
                    </div> */}
                  </Cardlane>
                </ExpandCollapse>
              );
            } else if (item.type == "Bubblelane") {
              return (
                <ExpandCollapse previewHeight="50px" expanded="true">
                  <Bubblelane>
                   {parse(item.text)}
                    <button
                      className="button1"
                      onClick={() => this.onOpenModal1("Bubblelane")}
                    >
                      +
                    </button>
                    {this.state.Bubble}
                  </Bubblelane>
                </ExpandCollapse>
              );
            } else if (item.type == "Phaselane") {
              return (
                <ExpandCollapse previewHeight="50px" expanded="true">
                <Phaselane>
                 {parse(item.text)}
                  <button
                    className="button1"
                    onClick={() => this.onOpenModal1("Phaselane")}
                  >
                    +
                  </button>
                  {this.state.Phase}
                </Phaselane>
                </ExpandCollapse>
              );
            } else if (item.type == "Textlane") {
              return (
                <ExpandCollapse previewHeight="50px" expanded="true">
                <Textlane>
                 {parse(item.text)}
                  <button
                    className="button1"
                    onClick={() => this.onOpenModal1("Textlane")}
                  >
                    +
                  </button>
                  {this.state.Square}
                </Textlane></ExpandCollapse>
              );
            } else if (item.type == "Imagelane") {
              return (
                <ExpandCollapse previewHeight="50px" expanded="true">
                <Imagelane>
                 {parse(item.text)}
                  <UploadImages
                    multiple
                    onChange={this.onChange}
                    style={{ height: 100 }}
                  />
                </Imagelane></ExpandCollapse>
              );
            } else if (item.type == "Filelane") {
              return (
                <ExpandCollapse previewHeight="50px" expanded="true">
                <Filelane>
                 {parse(item.text)}
                  <div className="file">
                    <FilePond />
                  </div>
                </Filelane></ExpandCollapse>
              );
            } else if (item.type == "Linelane") {
              return (
                <ExpandCollapse previewHeight="50px" expanded="true">
                <Linelane>
                 {parse(item.text)}
                  <div style={{ marginTop: -150 }}>
                    <Lines />
                  </div>
                </Linelane></ExpandCollapse>
              );
            }
          })}</div>
<div className="predefinelane" style={{marginTop:"0.5%"}}>
  
          <UncontrolledButtonDropdown style={{ marginLeft: 20, marginTop: 30 }}>
            <DropdownToggle caret>Add New Lane</DropdownToggle>
            <DropdownMenu >
              <DropdownItem >
                <li onClick={() => this.onOpenModal("Cardlane")}>
                  &#9645; Add Card Lane
                </li>
              </DropdownItem>
              <DropdownItem>
                {" "}
                <li onClick={() => this.onOpenModal("Bubblelane")}>
                  &#128172; Add Bubble Lane
                </li>
              </DropdownItem>
              <DropdownItem>
                <li onClick={() => this.onOpenModal("Phaselane")}>
                  &#8680; Add Phase Lane
                </li>
              </DropdownItem>
              <DropdownItem>
                <li onClick={() => this.onOpenModal("Linelane")}>
                  📈 Add Line Lane
                </li>
              </DropdownItem>
              <DropdownItem>
                <li onClick={() => this.onOpenModal("Imagelane")}>
                  &#128190; Add Image Lane
                </li>
              </DropdownItem>
              <DropdownItem>
                <li onClick={() => this.onOpenModal("Filelane")}>
                  &#128194; Add File Lane
                </li>
              </DropdownItem>
              <DropdownItem>
                <li onClick={() => this.onOpenModal("Textlane")}>
                  &#128221; Add Text Lane
                </li>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown></div>

          <Modal open={open} onClose={this.onCloseModal} center  >
            <div className="textlane">
              <div className="textlanenavbar">
                <div className="textsize2 " style={{ padding: 10 }}>
                  Edit Lane
                </div>
              </div>
              {/* <FontPicker
                    apiKey="AIzaSyBjbypy3oo5oo_xPba71Dnb6836mBwoWVQ"
                    activeFontFamily={this.state.activeFontFamily}
                    onChange={nextFont =>
                      this.setState({
                        activeFontFamily: nextFont.family
                      })
                    }
                  /> */}
             
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange1}
              />
              {/* <textarea
                className="apply-font Italic"
                style={{ width: 500, height: 150, marginTop: 10 }}
                name="text"
                onChange={e => this.change(e)}
              ></textarea> */}
              <br></br>
              <button
                type="button"
                style={{ fontSize: 20, marginLeft: 80 }}
                onClick={this.onCloseModal}
              >
                Save
              </button>
            </div>
          </Modal>
          <Modal open={open1} onClose={this.onCloseModal1} center>
            <div className="textlane">
              <div className="textlanenavbar">
                <div className="textsize2 " style={{ padding: 10 }}>
                  Edit Card
                </div>
              </div>
             
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
              />
              
              <br></br>
              <button
                type="button"
                style={{ fontSize: 20, marginLeft: 80 }}
                onClick={this.onCloseModal1}
              >
                Save
              </button>
            </div>
          </Modal>
          <Modal open={open3} onClose={this.onCloseModal3} center>
            <div className="textlane">
              <div className="textlanenavbar">
                <div className="textsize2 " style={{ padding: 10 }}>
                  Edit Card
                </div>
              </div>
              
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
              />
              <br></br>
              <button
                type="button"
                style={{ fontSize: 20, marginLeft: 80 }}
                onClick={this.onCloseModal3}
              >
                Save
              </button>
            </div>
          </Modal>
          <Modal open={open2} onClose={this.onCloseModal2} center>
            <div className="namemodal">
              <div className="namemodalnavbar">
                <div className="textsize2 " style={{ paddingTop: 5,paddingLeft:10 }}>
                  Project Name
                </div>
              </div>
              <div className="inputcontainer" style={{ textAlign: "center" }}>
                <input
                  type="text"
                  style={{ fontSize: 25 }}
                  name="text2"
                  placeholder="Map Name"
                  onChange={e => this.handleChange(e)}
                />
                <br></br>
                <br></br>
                <button className="buttonlogout"
                  type="button"
                  onClick={this.onCloseModal2}
                  style={{
                   marginTop:"-15%"
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </Modal>
        </div>
       

        {data1}

        <div className="container"></div>
        <div className="footer">
          <Tabs
            selectedIndex={this.state.tabIndex}
            onSelect={tabIndex => this.setState({ tabIndex })}
          >
            {" "}
            <TabList>
              <Tab selected="true"contentEditable="true"> {(data)?data:"Unnamed Journey Map"}</Tab>

              {this.state.tabs.map(item => {
                return (
                  <Tab
                    contentEditable="true"
                    onClick={() => this.setState({ totallayer: [] })}
                  >
                     {parse(item)}
                  </Tab>
                );
              })}
              <Tab onClick={this.onOpenModal2}>
                {" "}
                <a style={{ fontSize: 20 }}>+</a>
              </Tab>
            </TabList>
            <TabPanel></TabPanel>
            {this.state.tabs.map(item => {
              return <TabPanel></TabPanel>;
            })}
            <TabPanel></TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Board;

