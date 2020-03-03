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
import GridLayout from "react-grid-layout";
import axios from "axios";
import { API_URL } from "./services/url";
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
import HelpIcon from "@material-ui/icons/Help";
import ArchiveIcon from "@material-ui/icons/Archive";
import UnarchiveIcon from "@material-ui/icons/Unarchive";
import DeleteIcon from "@material-ui/icons/Delete";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import Tooltip from "@material-ui/core/Tooltip";
//  var dragula = require('react-dragula');
import Dragula from "react-dragula";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import line from "./Dropdownassets/line.png"
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
const MAX_LENGTH = 40;
const MAX_LENGTH_NOTE = 100;

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
      open4: false,
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
      Project_id: "",
      Project_data: [],
      sub_project_data: [],
      Sub_project_id: "",
      layer_index: "",
      node_index: "",
      maptype: "",
      lanegrid_no: "",
      lane_id: "",
      card_id: "",
      editorState: EditorState.createEmpty(),
      projectedit: false,
      project_name: "",
      dropcard:false,
      project_desc: ""
    };
    //close this.state

    this.addCircle = this.addCircle.bind(this);
    this.logout = this.logout.bind(this);

    this.addSquare = this.addSquare.bind(this);
    this.addRectangle = this.addRectangle.bind(this);
    this.addLine = this.addLine.bind(this);
    this.addBubble = this.addBubble.bind(this);
    this.addPhase = this.addPhase.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.addItalic = this.addItalic.bind(this);
    this.addUnderline = this.addUnderline.bind(this);
    this.addBold = this.addBold.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
   
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
        console.log("t1", this.state.text);
      }
    );
  };
  async componentDidMount() {
    const tokenvalue = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `${API_URL}project/`,
        (axios.defaults.headers.common["x-access-token"] = tokenvalue),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          }
        }
      );
      console.log("project_data", response);
      console.log("url", this.props.match);
      const Project_id = this.props.match.params.id.split(":")[1];
      const Sub_project_id = this.props.match.params.subid;
      let project_name = "";
      let project_desc = "";
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i]._id === Project_id) {
          project_name = response.data[i].name;
          project_desc = response.data[i].desc;
        }
      }

      const response1 = await axios.get(
        `${API_URL}subproject/${Project_id}`,
        (axios.defaults.headers.common["x-access-token"] = tokenvalue),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          }
        }
      );
      console.log("Sub_project_data", response1);
      console.log("Sub_project_id", Sub_project_id);

      const response2 = await axios.get(
        `${API_URL}lane/${Sub_project_id}`,
        (axios.defaults.headers.common["x-access-token"] = tokenvalue),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          }
        }
      );
      console.log("lane_data", response2);

      this.setState(
        {
          tokenvalue: localStorage.getItem("token"),
          Project_id,
          Sub_project_id,
          Project_data: response.data,
          project_name,
          project_desc,
          sub_project_data: response1.data,
          totallayer: response2.data,
          lanegrid_no: response2.data.length
        },
        () => {
          console.log(this.state.lanegrid_no);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  async handleClick(id) {
    var editable = document.querySelectorAll("div[contentEditable]");
    const tokenvalue = this.state.tokenvalue;

    for (var i = 0, len = editable.length; i < len; i++) {
      editable[i].setAttribute("data-orig", editable[i].innerHTML);

      editable[i].onblur = async function() {
        if (this.innerHTML == this.getAttribute("data-orig")) {
          // no change
        } else {
          // change has happened, store new value
          this.setAttribute("data-orig", this.innerHTML);
          console.log(this.innerText);
          console.log(id);
          const data = {
            subProjectId: id,
            subProjectName: this.innerText,

            mapType: "Customer"
          };
          console.log(data);
          try {
            const response = await axios.put(
              `${API_URL}subproject/edit`,
              data,
              (axios.defaults.headers.common["x-access-token"] = tokenvalue),
              {
                headers: {
                  "content-type": "application/x-www-form-urlencoded"
                }
              }
            );
            console.log(response);
            if (response.status === 200) {
              //alert(response.data.msg);
              console.log("data", data);
            }
          } catch (err) {
            console.log(err);
          }
        }
      };
    }
  }
  async handleClick1(e) {
    const projectid = this.state.Project_id;
    const project_desc = this.state.project_desc;

    // const { data1 } = this.props.location;
    var editable = document.querySelectorAll("div[contentEditable]");
    const tokenvalue = this.state.tokenvalue;

    for (var i = 0, len = editable.length; i < len; i++) {
      editable[i].setAttribute("data-orig", editable[i].innerHTML);

      editable[i].onblur = async function() {
        if (this.innerHTML == this.getAttribute("data-orig")) {
          // no change
        } else {
          // change has happened, store new value
          this.setAttribute("data-orig", this.innerHTML);
          console.log(this.innerText);
          console.log(projectid);
          const data = {
            projectid: projectid,
            name: this.innerText,

            desc: project_desc
          };
          console.log(data);
          try {
            const response = axios.put(
              `${API_URL}project/edit`,
              data,
              (axios.defaults.headers.common["x-access-token"] = tokenvalue),
              {
                headers: {
                  "content-type": "application/x-www-form-urlencoded"
                }
              }
            );
            console.log(response);
            if (response.status === 200) {
              //alert(response.data.msg);
              console.log("data", data);
            }
          } catch (err) {
            console.log(err);
          }
        }
      };
    }
  }
  onOpenModal = type => {
    this.setState({ open: true, type, editorState: EditorState.createEmpty() });
  };
  onOpenModal1 = (type, id) => {
    this.setState(
      {
        open1: true,
        type,
        lane_id: id,
        editorState: EditorState.createEmpty()
      },
      () => {
        console.log("id", this.state.lane_id, id);
      }
    );
  };
  onOpenModal2 = () => {
    this.setState({ open2: true });
  };
  onOpenModal5 = (id1, lane_id, type, lanegrid_no) => {
    console.log("id", id1);

    this.setState(
      {
        open5: true,
        edit: this.state.totallayer[id1].laneName,
        layer_index: id1,
        lane_id,
        type,
        lanegrid_no
      },
      () => {
        console.log("text", this.state.totallayer[id1].laneName);
      }
    );
    const html = this.state.totallayer[id1].laneName;
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.setState({ editorState });
    }
  };

  onOpenModal3 = (type, id1, id, lane_id, card_id) => {
    console.log("id", id);
    if (type == "card") {
      this.setState(
        {
          open3: true,
          type,
          edit: this.state.totallayer[id1].nodes[id].cardHTML,
          layer_index: id1,
          node_index: id,
          lane_id,
          card_id
        },
        () => {
          console.log("text", this.state.totallayer[id1].nodes[id].cardHTML);
        }
      );
      const html = this.state.totallayer[id1].nodes[id].cardHTML;
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        const editorState = EditorState.createWithContent(contentState);
        this.setState({ editorState });
      }
    } else if (type == "bubble") {
      this.setState({
        open3: true,
        type,
        edit: this.state.totallayer[id1].nodes[id].bubbleHTML,
        layer_index: id1,
        node_index: id,
        lane_id,
        card_id
      });
      const html = this.state.totallayer[id1].nodes[id].bubbleHTML;
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        const editorState = EditorState.createWithContent(contentState);
        this.setState({ editorState });
      }
    } else if (type == "phase") {
      this.setState({
        open3: true,
        type,
        edit: this.state.totallayer[id1].nodes[id].phaseHTML,
        layer_index: id1,
        node_index: id,
        lane_id,
        card_id
      });
      const html = this.state.totallayer[id1].nodes[id].phaseHTML;
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        const editorState = EditorState.createWithContent(contentState);
        this.setState({ editorState });
      }
    } else if (type == "text") {
      this.setState({
        open3: true,
        type,
        edit: this.state.totallayer[id1].nodes[id].textHTML,
        layer_index: id1,
        node_index: id,
        lane_id,
        card_id
      });
      const html = this.state.totallayer[id1].nodes[id].textHTML;
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        const editorState = EditorState.createWithContent(contentState);
        this.setState({ editorState });
      }
    }
  };

  // onCloseModal = () => {
  //   this.setState({ open: false });
  //   this.state.totallayer.push({
  //     text: this.state.text,
  //     type: this.state.type
  //   });
  // };
  async onCloseModal(e) {
    console.log(this.state.lanegrid_no);
    this.setState(
      {
        open: false,
        lanegrid_no: parseInt(parseInt(this.state.lanegrid_no) + 1)
      },
      () => {
        console.log("lanegridno", this.state.lanegrid_no);
      }
    );

    let data = {
      laneType: this.state.type,
      laneName: this.state.text,
      laneGridNo: this.state.lanegrid_no.toString()
    };
    console.log("data", data);
    try {
      const response = await axios.post(
        `${API_URL}lane/add/${this.state.Sub_project_id}`,
        data,
        (axios.defaults.headers.common[
          "x-access-token"
        ] = this.state.tokenvalue),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          }
        }
      );
      console.log(response);
      if (response.status === 200) {
        console.log("lane added");
        this.state.totallayer.push(response.data);
        this.setState({ totallayer: this.state.totallayer });
      }
    } catch (err) {
      console.log(err);
      alert("Lane couldn't be added");
    }
  }
  async onRoutechange(Sub_project_id, e) {
    e.preventDefault();
    const tokenvalue = localStorage.getItem("token");
    try {
      const response2 = await axios.get(
        `${API_URL}lane/${Sub_project_id}`,
        (axios.defaults.headers.common["x-access-token"] = tokenvalue),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          }
        }
      );
      console.log("lane_data", response2);

      this.setState(
        {
          Sub_project_id,
          totallayer: response2.data,
          laneGridNo: response2.data.length - 1
        },
        () => {
          console.log(this.state.Sub_Project_id);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  async onCloseModal1(e) {
    this.setState({ open1: false });
    let index = "";
    if (this.state.type == "card") {
      for (var i = 0; i < this.state.totallayer.length; i++) {
        if (this.state.totallayer[i]._id == this.state.lane_id) {
          index = i;
          break;
        }
      }

      let data = {
        cardHTML: this.state.text1,
        gridID: 0,
        cardStatus: "Start",
        cardCategory: "Customer"
      };
      try {
        const response = await axios.post(
          `${API_URL}lane/card/add/${this.state.lane_id}`,
          data,
          (axios.defaults.headers.common[
            "x-access-token"
          ] = this.state.tokenvalue),
          {
            headers: {
              "content-type": "application/x-www-form-urlencoded"
            }
          }
        );
        console.log(response);
        if (response.status === 200) {
          console.log("card added");
          this.state.totallayer[index].nodes.push(
            response.data.nodes[response.data.nodes.length - 1]
          );
          this.setState({ totallayer: this.state.totallayer });
        }
      } catch (err) {
        console.log(err);
        alert("Card couldn't be added");
      }
    } else if (this.state.type == "bubble") {
      for (var i = 0; i < this.state.totallayer.length; i++) {
        if (this.state.totallayer[i]._id == this.state.lane_id) {
          index = i;
          break;
        }
      }

      let data = {
        bubbleHTML: this.state.text1,
        gridID: 0,
        bubbleStatus: "Start",
        bubbleCategory: "Customer"
      };
      console.log("submit_data", data);
      console.log("lane_id", this.state.lane_id);
      try {
        const response = await axios.post(
          `${API_URL}lane/bubble/add/${this.state.lane_id}`,
          data,
          (axios.defaults.headers.common[
            "x-access-token"
          ] = this.state.tokenvalue),
          {
            headers: {
              "content-type": "application/x-www-form-urlencoded"
            }
          }
        );
        console.log(response);
        if (response.status === 200) {
          console.log("bubble added");
          this.state.totallayer[index].nodes.push(
            response.data.nodes[response.data.nodes.length - 1]
          );
          this.setState({ totallayer: this.state.totallayer });
        }
      } catch (err) {
        console.log(err);
        alert("bubble couldn't be added");
      }
    } else if (this.state.type == "phase") {
      for (var i = 0; i < this.state.totallayer.length; i++) {
        if (this.state.totallayer[i]._id == this.state.lane_id) {
          index = i;
        }
      }

      let data = {
        phaseHTML: this.state.text1,
        gridID: 0,
        phaseWidth: "",
        phaseStatus: "Start",
        phaseCategory: "Customer"
      };
      try {
        const response = await axios.post(
          `${API_URL}lane/phase/add/${this.state.lane_id}`,
          data,
          (axios.defaults.headers.common[
            "x-access-token"
          ] = this.state.tokenvalue),
          {
            headers: {
              "content-type": "application/x-www-form-urlencoded"
            }
          }
        );
        console.log(response);
        if (response.status === 200) {
          console.log("phase added");
          this.state.totallayer[index].nodes.push(
            response.data.nodes[response.data.nodes.length - 1]
          );
          this.setState({ totallayer: this.state.totallayer });
        }
      } catch (err) {
        console.log(err);
        alert("phase couldn't be added");
      }
    } else if (this.state.type == "text") {
      for (var i = 0; i < this.state.totallayer.length; i++) {
        if (this.state.totallayer[i]._id == this.state.lane_id) {
          index = i;
        }
      }

      let data = {
        textHTML: this.state.text1,
        gridID: 0,
        textStatus: "Start",
        textCategory: "Customer"
      };
      try {
        const response = await axios.post(
          `${API_URL}lane/text/add/${this.state.lane_id}`,
          data,
          (axios.defaults.headers.common[
            "x-access-token"
          ] = this.state.tokenvalue),
          {
            headers: {
              "content-type": "application/x-www-form-urlencoded"
            }
          }
        );
        console.log(response);
        if (response.status === 200) {
          console.log("text added");
          this.state.totallayer[index].nodes.push(
            response.data.nodes[response.data.nodes.length - 1]
          );
          this.setState({ totallayer: this.state.totallayer });
        }
      } catch (err) {
        console.log(err);
        alert("text couldn't be added");
      }
    }
  }
  onCloseModal2 = () => {
    this.setState({ open2: false });
    this.state.tabs.push(this.state.text2);
  };
  onAddSubProject = () => {
    this.setState({ open2: false, open4: true, maptype: "Customer" });
  };
  async onCloseModal3(e) {
    let layer_index = this.state.layer_index;
    let node_index = this.state.node_index;
    let type = this.state.type;
    if (type == "card") {
      const newItems = [...this.state.totallayer];
      newItems[layer_index].nodes[node_index].cardHTML = this.state.text1;
      this.setState({ open3: false, totallayer: newItems });
      let data = {
        _id: this.state.card_id,
        cardHTML: this.state.text1,
        gridID: 0,
        cardStatus: "Start",
        cardCategory: "Customer"
      };
      try {
        const response = await axios.put(
          `${API_URL}lane/card/edit/${this.state.lane_id}`,
          data,
          (axios.defaults.headers.common[
            "x-access-token"
          ] = this.state.tokenvalue),
          {
            headers: {
              "content-type": "application/x-www-form-urlencoded"
            }
          }
        );
        console.log(response);
        if (response.status === 200) {
          console.log("card edited");
        }
      } catch (err) {
        console.log(err);
        alert("card couldn't be edited");
      }
    } else if (type == "bubble") {
      const newItems = [...this.state.totallayer];
      newItems[layer_index].nodes[node_index].bubbleHTML = this.state.text1;
      this.setState({ open3: false, totallayer: newItems });
      let data = {
        _id: this.state.card_id,
        bubbleHTML: this.state.text1,
        gridID: 0,
        bubbleStatus: "Start",
        bubbleCategory: "Customer"
      };
      console.log("edited_data", data);
      try {
        const response = await axios.put(
          `${API_URL}lane/bubble/edit/${this.state.lane_id}`,
          data,
          (axios.defaults.headers.common[
            "x-access-token"
          ] = this.state.tokenvalue),
          {
            headers: {
              "content-type": "application/x-www-form-urlencoded"
            }
          }
        );
        console.log(response);
        if (response.status === 200) {
          console.log("bubble edited");
        }
      } catch (err) {
        console.log(err);
        alert("bubble couldn't be edited");
      }
    } else if (type == "phase") {
      const newItems = [...this.state.totallayer];
      newItems[layer_index].nodes[node_index].phaseHTML = this.state.text1;
      this.setState({ open3: false, totallayer: newItems });
      let data = {
        _id: this.state.card_id,
        phaseHTML: this.state.text1,
        gridID: 0,
        phaseStatus: "Start",
        phaseCategory: "Customer"
      };
      console.log("edited_data", data);
      try {
        const response = await axios.put(
          `${API_URL}lane/phase/edit/${this.state.lane_id}`,
          data,
          (axios.defaults.headers.common[
            "x-access-token"
          ] = this.state.tokenvalue),
          {
            headers: {
              "content-type": "application/x-www-form-urlencoded"
            }
          }
        );
        console.log(response);
        if (response.status === 200) {
          console.log("phase edited");
        }
      } catch (err) {
        console.log(err);
        alert("phase couldn't be edited");
      }
    } else if (type == "text") {
      const newItems = [...this.state.totallayer];
      newItems[layer_index].nodes[node_index].textHTML = this.state.text1;
      this.setState({ open3: false, totallayer: newItems });
      let data = {
        _id: this.state.card_id,
        textHTML: this.state.text1,
        gridID: 0,
        textStatus: "Start",
        textCategory: "Customer"
      };
      try {
        const response = await axios.put(
          `${API_URL}lane/text/edit/${this.state.lane_id}`,
          data,
          (axios.defaults.headers.common[
            "x-access-token"
          ] = this.state.tokenvalue),
          {
            headers: {
              "content-type": "application/x-www-form-urlencoded"
            }
          }
        );
        console.log(response);
        if (response.status === 200) {
          console.log("text edited");
        }
      } catch (err) {
        console.log(err);
        alert("text couldn't be edited");
      }
    }
  }
  onCloseModal4 = () => {
    this.setState({ open4: false });
  };
  async onCloseModal5(e) {
    let layer_index = this.state.layer_index;
    const newItems = [...this.state.totallayer];
    newItems[layer_index].laneName = this.state.text;
    this.setState({ open5: false, totallayer: newItems });
    let data = {
      _id: this.state.lane_id,
      laneName: this.state.text,
      laneGridNo: this.state.lanegrid_no,
      laneType: this.state.type
    };
    console.log("edited data", data);
    try {
      const response = await axios.put(
        `${API_URL}lane/edit`,
        data,
        (axios.defaults.headers.common[
          "x-access-token"
        ] = this.state.tokenvalue),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          }
        }
      );
      console.log(response);
      if (response.status === 200) {
        console.log("lane edited");
      }
    } catch (err) {
      console.log(err);
      alert("lane name couldn't be edited");
    }
  }
  async onSubprojectsubmit(e) {
    this.state.sub_project_data.push({
      projectid: this.state.Project_id,
      subProjectName: this.state.text2,
      mapType: this.state.maptype
    });
    let data = {
      projectid: this.state.Project_id,
      subProjectName: this.state.text2,
      mapType: this.state.maptype
    };
    this.setState({ open4: false });
    try {
      const response = await axios.post(
        `${API_URL}subproject/add`,
        data,
        (axios.defaults.headers.common[
          "x-access-token"
        ] = this.state.tokenvalue),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          }
        }
      );
      console.log(response);
      if (response.status === 200) {
        //alert(response.data.msg);
        console.log("data", data);
        this.onRoutechange(response.data._id, e);
      }
    } catch (err) {
      console.error(err.response.data.msg);
      alert(err.response.data.msg);
    }
  }
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
      console.log(this.state.project_name);
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
              <div onClick={() => this.onOpenModal3("Cardlane", id)}>
                {" "}
                {parse(item.cardHTML)}
              </div>
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
      var layout = [{ i: "b", x: 1, y: 0, w: 3, h: 2 }];

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
            <span onClick={() => this.onOpenModal3("Phaselane", id)}>
              {" "}
              {parse(item)}
            </span>
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
  // function() {
  //   dragula([].slice.apply(document.querySelectorAll('.maindiv')));
  // };
  dragulaDecorator = componentBackingInstance => {
    if (componentBackingInstance) {
      let options = {};
      Dragula([componentBackingInstance], options);
    }
  };
  logout() {
    // Send a logout request to the API
    console.log("Sending a logout request to the API...");

    localStorage.removeItem("token");
    this.props.history.push("/sign-in");
    window.location.reload();
    // this.destroy(); // Cleanup
  }

  render() {
    const { open } = this.state;
    const { open1 } = this.state;
    const { open2 } = this.state;
    const { open3 } = this.state;
    const { open4 } = this.state;
    const { open5 } = this.state;
    const projectid = this.state.Project_id;
    const project_desc = this.state.project_desc;
    // const { data } = this.props.location;
    const { editorState } = this.state;
    const { editorState1 } = this.state;
    // const { data1 } = this.props.location;
    // var editable = document.querySelectorAll("div[contentEditable]");
    // const tokenvalue = this.state.tokenvalue;

    // for (var i = 0, len = editable.length; i < len; i++) {
    //   editable[i].setAttribute("data-orig", editable[i].innerHTML);

    //   editable[i].onblur = function() {
    //     if (this.innerHTML == this.getAttribute("data-orig")) {
    //       // no change
    //     } else {
    //       // change has happened, store new value
    //       this.setAttribute("data-orig", this.innerHTML);
    //       console.log(this.innerText);
    //       console.log(projectid);
    //       const data = {
    //         projectid: projectid,
    //         name: this.innerText,

    //         desc: project_desc
    //       };
    //       console.log(data);
    //       try {
    //         const response = axios.put(
    //           `${API_URL}project/edit`,
    //           data,
    //           (axios.defaults.headers.common["x-access-token"] = tokenvalue),
    //           {
    //             headers: {
    //               "content-type": "application/x-www-form-urlencoded"
    //             }
    //           }
    //         );
    //         console.log(response);
    //         if (response.status === 200) {
    //           //alert(response.data.msg);
    //           console.log("data", data);
    //         }
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     }
    //   };
    // }

    // function() {
    //   dragula([].slice.apply(document.querySelectorAll('.container2')));
    // })();
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
       
        <nav class="navbar">
          <div class="brand-title">
            <Link
              to="/UserMap"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              ETU LOGO
            </Link>
          </div>

          <div class="navbar-links">
            <ul>
              <li>
                {" "}
                <Link
                  to="/Help"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Tooltip title={<span>Help</span>}>
                    <HelpIcon />
                  </Tooltip>
                </Link>
              </li>

              <a
                class="submenu"
                style={{ marginLeft: "2%", marginTop: "0.55%" }}
              >
                <a
                  class="dropbtn"
                  style={{
                    color: "white",
                    fontSize: "1.25em",
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
                    <ArchiveIcon /> Archive Lanes and Cards
                  </a>
                  <a style={{ color: "black", textDecoration: "none" }}>
                    <FileCopyOutlinedIcon /> Make a Copy
                  </a>
                  <a style={{ color: "black", textDecoration: "none" }}>
                    <SystemUpdateAltIcon /> Export Map
                  </a>
                  <a style={{ color: "black", textDecoration: "none" }}>
                    <UnarchiveIcon /> Unarchive Map
                  </a>
                  <a style={{ color: "black", textDecoration: "none" }}>
                    <DeleteIcon /> Delete Map
                  </a>
                  <a style={{ color: "black", textDecoration: "none" }}>
                    <MailOutlineIcon /> Contact us
                  </a>
                  <a style={{ color: "black", textDecoration: "none" }}>
                    <InsertDriveFileOutlinedIcon />
                    Terms & Condition
                  </a>
                  <a style={{ color: "black", textDecoration: "none" }}>
                    <ArchiveIcon /> Archived Map
                  </a>
                  <Link
                    to="/Profile"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <PersonOutlineOutlinedIcon /> My Profile
                  </Link>
                  <a style={{ color: "black", textDecoration: "none" }}>
                    <CreditCardIcon />
                    Billing
                  </a>
                  <Link
                    onClick={this.logout}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <ExitToAppIcon />
                    Logout
                  </Link>
                </div>
              </a>
            </ul>
          </div>
        </nav>
        <div className="projectnamenavbar">
        <div contentEditable>
            {/*this.state.Project_data.map(item => {
              console.log(item._id);
              console.log(this.state.Project_id);
              if (item._id === this.state.Project_id) {
                this.state.project_name = item.name;
                return <div>{item.name}</div>;
              }
            })*/}
            <div onClick={e => this.handleClick1(e)}>
              {this.state.project_name}
            </div>
          </div>
          <div class="projectnamenavbar-links">
            <ul>
              <li onClick={this.zoomin}>
                <Tooltip title={<span>Zoom In</span>}>
                  <ZoomInIcon></ZoomInIcon>
                </Tooltip>
              </li>
              <li onClick={this.zoomout} style={{ marginLeft: "2%" }}>
                <Tooltip title={<span>Zoom Out</span>}>
                  <ZoomOutIcon></ZoomOutIcon>
                </Tooltip>
              </li>
              <li
                onClick={() => this.openFullscreen(!this.state.bool)}
                style={{ marginLeft: "2%" }}
              >
                {this.state.bool ? (
                  <Tooltip title={<span>Exit Full Screen</span>}>
                    <FullscreenExitIcon></FullscreenExitIcon>
                  </Tooltip>
                ) : (
                  <Tooltip title={<span> Full Screen</span>}>
                    <FullscreenIcon />
                  </Tooltip>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div class="maindiv">
          {/* {this.state.layer1} */}
          <div className="wholecontainer">
            {this.state.totallayer.map((item, id1) => {
              let lane_id = item._id;
              if (item.laneType == "card") {
                return (
                  <ExpandCollapse previewHeight="50px" expanded="true">
                    <Cardlane>
                      <div
                        onClick={() =>
                          this.onOpenModal5(
                            id1,
                            lane_id,
                            item.laneType,
                            item.laneGridNo
                          )
                        }
                      >
                        {parse(item.laneName)}
                      </div>
                      {/* <button
                      className="button1"
                      onClick={() => this.onOpenModal1("Cardlane")}
                    >
                      +
                    </button> */}

                      {item.nodes.map((item, id) => {
                        let card_id = item._id;
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
                              <div
                                onClick={() =>
                                  this.onOpenModal3(
                                    "card",
                                    id1,
                                    id,
                                    lane_id,
                                    card_id
                                  )
                                }
                              >
                                {" "}
                                {parse(item.cardHTML)}
                              </div>
                            </div>
                          </ReactDraggable>
                        );
                      })}
                      <div
                        class="hoverWrapper"
                        style={{ position: "absolute", display: "inline-flex" }}
                      >
                        <div id="hoverShow1">
                          {" "}
                          <div
                            onClick={() => this.onOpenModal1("card", item._id)}
                            style={{
                              marginLeft: "33%",
                              fontSize: "5em",
                              color: "black",
                              marginTop: "-10%"
                            }}
                          >
                            <p>+</p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="hovercard" >
               
                    </div> */}
                    </Cardlane>
                  </ExpandCollapse>
                );
              } else if (item.laneType == "bubble") {
                return (
                  <ExpandCollapse previewHeight="50px" expanded="true">
                    <Bubblelane>
                      <div
                        onClick={() =>
                          this.onOpenModal5(
                            id1,
                            lane_id,
                            "bubble",
                            item.laneGridNo
                          )
                        }
                      >
                        {parse(item.laneName)}
                      </div>
                      {item.nodes.map((item, id) => {
                        let card_id = item._id;
                        return (
                          <ReactDraggable>
                            <div
                              className="bubble"
                              style={{
                                overflow: "hidden",
                                whiteSpace: "normal",
                                wordBreak: "break-word"
                              }}
                              onClick={() =>
                                this.onOpenModal3(
                                  "bubble",
                                  id1,
                                  id,
                                  lane_id,
                                  card_id
                                )
                              }
                            >
                              {parse(item.bubbleHTML)}
                            </div>
                          </ReactDraggable>
                        );
                      })}
                      <button
                        className="button1"
                        onClick={() => this.onOpenModal1("bubble", item._id)}
                      >
                        +
                      </button>
                    </Bubblelane>
                  </ExpandCollapse>
                );
              } else if (item.laneType == "phase") {
                return (
                  <ExpandCollapse previewHeight="50px" expanded="true">
                    <Phaselane>
                      <div
                        onClick={() =>
                          this.onOpenModal5(
                            id1,
                            lane_id,
                            "phase",
                            item.laneGridNo
                          )
                        }
                      >
                        {parse(item.laneName)}
                      </div>
                      <button
                        className="button1"
                        onClick={() => this.onOpenModal1("phase", item._id)}
                      >
                        +
                      </button>
                      {item.nodes.map((item, id) => {
                        let card_id = item._id;
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
                            <span
                              onClick={() =>
                                this.onOpenModal3(
                                  "phase",
                                  id1,
                                  id,
                                  lane_id,
                                  card_id
                                )
                              }
                            >
                              {" "}
                              {parse(item.phaseHTML)}
                            </span>
                          </div>
                        );
                      })}
                    </Phaselane>
                  </ExpandCollapse>
                );
              } else if (item.laneType == "text") {
                return (
                  <ExpandCollapse previewHeight="50px" expanded="true">
                    <Textlane>
                      <div
                        onClick={() =>
                          this.onOpenModal5(
                            id1,
                            lane_id,
                            "text",
                            item.laneGridNo
                          )
                        }
                      >
                        {parse(item.laneName)}
                      </div>
                      <button
                        className="button1"
                        onClick={() => this.onOpenModal1("text", item._id)}
                      >
                        +
                      </button>
                      {item.nodes.map((item, id) => {
                        let card_id = item._id;
                        return (
                          <div
                            className="square"
                            style={{
                              overflow: "hidden",
                              whiteSpace: "normal",
                              wordBreak: "break-word"
                            }}
                            onClick={() =>
                              this.onOpenModal3(
                                "text",
                                id1,
                                id,
                                lane_id,
                                card_id
                              )
                            }
                          >
                            {parse(item.textHTML)}
                          </div>
                        );
                      })}
                    </Textlane>
                  </ExpandCollapse>
                );
              } else if (item.laneType == "image") {
                return (
                  <ExpandCollapse previewHeight="50px" expanded="true">
                    <Imagelane>
                      <div
                        onClick={() =>
                          this.onOpenModal5(
                            id1,
                            lane_id,
                            "image",
                            item.laneGridNo
                          )
                        }
                      >
                        {parse(item.laneName)}
                      </div>
                      <UploadImages
                        multiple
                        onChange={this.onChange}
                        style={{ height: 100 }}
                      />
                    </Imagelane>
                  </ExpandCollapse>
                );
              } else if (item.laneType == "file") {
                return (
                  <ExpandCollapse previewHeight="50px" expanded="true">
                    <Filelane>
                      <div
                        onClick={() => this.onOpenModal5(id1, lane_id, "file")}
                      >
                        {parse(item.laneName)}
                      </div>
                      <div className="file">
                        <FilePond />
                      </div>
                    </Filelane>
                  </ExpandCollapse>
                );
              } else if (item.laneType == "line") {
                return (
                  <ExpandCollapse previewHeight="50px" expanded="true">
                    <Linelane>
                      {parse(item.laneName)}
                      <div style={{ marginTop: -150 }}>
                        <Lines />
                      </div>
                    </Linelane>
                  </ExpandCollapse>
                );
              }
            })}
          </div>
          <div className="predefinelane" style={{ marginTop: "0.5%",display:"flex" }}>
            <AddCircleIcon style={{fontSize:"3em",marginLeft:30,color:"white"}} onClick={()=>this.setState({dropcard:!this.state.dropcard})}></AddCircleIcon>
            <p style={{fontSize:"1.5em",marginTop:7,marginLeft:5}}>Add New Lane</p>
            
            {/* <UncontrolledButtonDropdown
              style={{ marginLeft: 20, marginTop: 6 }}
            >
              <DropdownToggle caret>Add New Lane</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <li onClick={() => this.onOpenModal("card")}>
                    &#9645; Add Card Lane
                  </li>
                </DropdownItem>
                <DropdownItem>
                  {" "}
                  <li onClick={() => this.onOpenModal("bubble")}>
                    &#128172; Add Bubble Lane
                  </li>
                </DropdownItem>
                <DropdownItem>
                  <li onClick={() => this.onOpenModal("phase")}>
                    &#8680; Add Phase Lane
                  </li>
                </DropdownItem>
                <DropdownItem>
                  <li onClick={() => this.onOpenModal("line")}>
                    📈 Add Line Lane
                  </li>
                </DropdownItem>
                <DropdownItem>
                  <li onClick={() => this.onOpenModal("image")}>
                    &#128190; Add Image Lane
                  </li>
                </DropdownItem>
                <DropdownItem>
                  <li onClick={() => this.onOpenModal("file")}>
                    &#128194; Add File Lane
                  </li>
                </DropdownItem>
                <DropdownItem>
                  <li onClick={() => this.onOpenModal("text")}>
                    &#128221; Add Text Lane
                  </li>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown> */}
          </div>

          <Modal open={open} onClose={e => this.onCloseModal(e)} center>
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
  <div style={{display:"flex"}}>
  <div className="textlaneeditortools">
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                handleBeforeInput={this._handleBeforeInput}
                handlePastedText={this._handlePastedText}
                onEditorStateChange={this.onEditorStateChange1}
              /></div>
              {/* <textarea
                className="apply-font Italic"
                style={{ width: 500, height: 150, marginTop: 10 }}
                name="text"
                onChange={e => this.change(e)}
              ></textarea> */}
              <div className="textlanebutton" >
              <button className="savebuttontext"
                type="button"
                style={{ fontSize: 20, marginLeft: 10,marginTop:200}}
                onClick={e => this.onCloseModal(e)}
              >
                Save
              </button></div>
              </div>
            </div>
          </Modal>
          <Modal open={open5} onClose={e => this.onCloseModal5(e)} center>
            <div className="textlane">
              <div className="textlanenavbar">
                <div className="textsize2 " style={{ padding: 10 }}>
                  Edit Lane
                </div></div>
                <div style={{display:"flex"}}>
                
                 <div className="textlaneeditortools"> <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    handleBeforeInput={this._handleBeforeInput}
                    handlePastedText={this._handlePastedText}
                    onEditorStateChange={this.onEditorStateChange1}
                  />
                </div>
                <div className="textlanebutton" >
                <button className="savebuttontext"
                  type="button"
                  style={{ fontSize: 20, marginLeft: 10,marginTop:200}}
                  onClick={e => this.onCloseModal5(e)}
                >
                  Save
                </button></div></div>
              
            </div>
          </Modal>
          <Modal open={open1} onClose={e => this.onCloseModal1(e)} center>
            <div className="textlane">
              <div className="textlanenavbar">
                <div className="textsize2 " style={{ padding: 10 }}>
                  Edit Card
                </div>
              </div>
              <div style={{display:"flex"}}>
  <div className="textlaneeditortools">
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                handleBeforeInput={this._handleBeforeInput1}
                handlePastedText={this._handlePastedText1}
                onEditorStateChange={this.onEditorStateChange}
              />
</div>
<div className="textlanebutton" >
              <button
                type="button" className="savebuttontext"
                style={{ fontSize: 20, marginLeft: 10,marginTop:200}}
                onClick={e => this.onCloseModal1(e)}
              >
                Save
              </button></div>
            </div></div>
          </Modal>
          <Modal open={open3} onClose={e => this.onCloseModal3(e)} center>
            <div className="textlane">
              <div className="textlanenavbar">
                <div className="textsize2 " style={{ padding: 10 }}>
                  Edit Card
                </div>
              </div>
              <div style={{display:"flex"}}>
  <div className="textlaneeditortools">
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                handleBeforeInput={this._handleBeforeInput1}
                handlePastedText={this._handlePastedText1}
                onEditorStateChange={this.onEditorStateChange}
              /></div>
              <div className="textlanebutton" >
              <button  className="savebuttontext"
                type="button"
                style={{ fontSize: 20, marginLeft: 10,marginTop:200}}
                onClick={e => this.onCloseModal3(e)}
              >
                Save
              </button>
            </div></div></div>
          </Modal>
          <Modal open={open2} onClose={this.onCloseModal2} center>
            <div className="namemodal">
              <div className="namemodalnavbar">
                <div
                  className="textsize2 "
                  style={{ paddingTop: 5, paddingLeft: 10 }}
                >
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
                <button
                  className="buttonlogout"
                  type="button"
                  onClick={this.onAddSubProject}
                  style={{
                    marginTop: "-15%"
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </Modal>
          <Modal type="fade" open={open4} onClose={this.onCloseModal4} center>
            <div className="template">
              <div className="templatenavbar">Choose Map Template</div>
              <div
                className="templaterow"
                style={{ marginTop: "3.5%", marginLeft: "1.5%" }}
              >
                <Link
                  onClick={e => this.onSubprojectsubmit(e)}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  <Card
                    className="text-center"
                    style={{
                      background: " #D3D3D3",
                      width: 180,
                      height: 200,
                      borderRadius: 10
                    }}
                  >
                    <Card.Header style={{ margin: 10 }}>
                      Create a Blank Map
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>Blank Map</Card.Title>
                      <Card.Text></Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
                <Card
                  className="text-center"
                  style={{
                    background: " #D3D3D3",
                    width: 180,
                    height: 200,
                    marginLeft: "1%",
                    borderRadius: 10
                  }}
                >
                  <Card.Header style={{ margin: 10 }}>
                    Create a Tutorial Map
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Tutorial Map</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  className="text-center"
                  style={{
                    background: " #D3D3D3",
                    width: 180,
                    height: 200,
                    marginLeft: "1%",
                    borderRadius: 10
                  }}
                >
                  <Card.Header style={{ margin: 10 }}>
                    Create a Vacation Travel
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Vacation Travel</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  className="text-center"
                  style={{
                    background: " #D3D3D3",
                    width: 180,
                    height: 200,
                    marginLeft: "1%",
                    borderRadius: 10
                  }}
                >
                  <Card.Header style={{ margin: 10 }}>
                    Create a Elderly Need for Care
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Elderly Need for Care</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div
                className="templaterow"
                style={{ marginTop: "-5.5%", marginLeft: "1.5%" }}
              >
                <Card
                  className="text-center"
                  style={{
                    background: " #D3D3D3",
                    width: 180,
                    height: 200,
                    borderRadius: 10
                  }}
                >
                  <Card.Header style={{ margin: 10 }}>
                    Create a Food Ordering and Delivery
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Food Ordering and Delivery</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  className="text-center"
                  style={{
                    background: " #D3D3D3",
                    width: 180,
                    height: 200,
                    marginLeft: "1%",
                    borderRadius: 10
                  }}
                >
                  <Card.Header style={{ margin: 10 }}>
                    Create a Retail Online/Offline Template
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Retail Online/Offline</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  className="text-center"
                  style={{
                    background: " #D3D3D3",
                    width: 180,
                    height: 200,
                    marginLeft: "1%",
                    borderRadius: 10
                  }}
                >
                  <Card.Header style={{ margin: 10 }}>
                    Create a Journey Map for Ideation
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Customer Map for Ideation</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  className="text-center"
                  style={{
                    background: " #D3D3D3",
                    width: 180,
                    height: 200,
                    marginLeft: "1%",
                    borderRadius: 10
                  }}
                >
                  <Card.Header style={{ margin: 10 }}>
                    Create a PSD Blueprint Template
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>PSD Blueprint Template</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Modal>
        </div>
      {this.state.dropcard ?
(<div className="lanetypebox">
<div className="lanetypeboxnavbar" >Select Lane</div>
<div style={{display:"flex"}}>
  <div className="lanecolumncontainer">
    <div className="lanetypecard" onClick={() => this.onOpenModal("card")}></div>
   <p style={{marginLeft:20}}>Card Lane</p>
   {/* <img src="./Dropdownassets/line-lane.png"/> */}
   <line/>
   <p style={{marginLeft:20}}>Line Lane</p>
  </div>
  <div className="lanecolumncontainer">
  <div className="lanetypebubble"  onClick={() => this.onOpenModal("bubble")}></div>
   <p style={{marginLeft:20}}>Bubble Lane</p>
  </div>
  <div className="lanecolumncontainer">
  <div className="lanetypephase" onClick={() => this.onOpenModal("phase")}></div>
  <p style={{marginLeft:20}}>Phase Lane</p> 
  </div>
  <div className="lanecolumncontainer">
  <div className="lanetypetext" onClick={() => this.onOpenModal("text")}></div>
  <p style={{marginLeft:20}}>Text Lane</p> 
  </div>
 
</div>
</div>):""}
        <div className="container"></div>
        <div className="footer">
          <Tabs
            selectedIndex={this.state.tabIndex}
            onSelect={tabIndex => this.setState({ tabIndex })}
          >
            {" "}
            <TabList>
              {this.state.sub_project_data.map((item, id) => {
                if (item._id === this.state.Sub_project_id) {
                  return (
                    <Tab
                      onClick={e => {
                        this.onRoutechange(item._id, e);
                      }}
                      selected="true"
                    >
                      <div
                        contentEditable
                        onClick={() => this.handleClick(item._id)}
                      >
                        {item.subProjectName}
                      </div>
                    </Tab>
                  );
                } else {
                  return (
                    <Tab
                      onClick={e => {
                        this.onRoutechange(item._id, e);
                      }}
                    >
                      <div contentEditable>{item.subProjectName}</div>
                    </Tab>
                  );
                }
              })}
              <Tab onClick={this.onOpenModal2}>
                {" "}
                <a style={{ fontSize: 20 }}>+</a>
              </Tab>
            </TabList>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
  _getLengthOfSelectedText = () => {
    const currentSelection = this.state.editorState.getSelection();
    const isCollapsed = currentSelection.isCollapsed();

    let length = 0;

    if (!isCollapsed) {
      const currentContent = this.state.editorState.getCurrentContent();
      const startKey = currentSelection.getStartKey();
      const endKey = currentSelection.getEndKey();
      const startBlock = currentContent.getBlockForKey(startKey);
      const isStartAndEndBlockAreTheSame = startKey === endKey;
      const startBlockTextLength = startBlock.getLength();
      const startSelectedTextLength =
        startBlockTextLength - currentSelection.getStartOffset();
      const endSelectedTextLength = currentSelection.getEndOffset();
      const keyAfterEnd = currentContent.getKeyAfter(endKey);
      console.log(currentSelection);
      if (isStartAndEndBlockAreTheSame) {
        length +=
          currentSelection.getEndOffset() - currentSelection.getStartOffset();
      } else {
        let currentKey = startKey;

        while (currentKey && currentKey !== keyAfterEnd) {
          if (currentKey === startKey) {
            length += startSelectedTextLength + 1;
          } else if (currentKey === endKey) {
            length += endSelectedTextLength;
          } else {
            length += currentContent.getBlockForKey(currentKey).getLength() + 1;
          }

          currentKey = currentContent.getKeyAfter(currentKey);
        }
      }
    }

    return length;
  };

  _handleBeforeInput = () => {
    const currentContent = this.state.editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText("").length;
    const selectedTextLength = this._getLengthOfSelectedText();

    if (currentContentLength - selectedTextLength > MAX_LENGTH - 1) {
      console.log("you can type max 40 characters");

      return "handled";
    }
  };

  _handlePastedText = pastedText => {
    const currentContent = this.state.editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText("").length;
    const selectedTextLength = this._getLengthOfSelectedText();

    if (
      currentContentLength + pastedText.length - selectedTextLength >
      MAX_LENGTH
    ) {
      console.log("you can type max 40 characters");

      return "handled";
    }
  };
  _handleBeforeInput1 = () => {
    const currentContent = this.state.editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText("").length;
    const selectedTextLength = this._getLengthOfSelectedText();

    if (currentContentLength - selectedTextLength > MAX_LENGTH_NOTE - 1) {
      console.log("you can type max 100 characters");

      return "handled";
    }
  };

  _handlePastedText1 = pastedText => {
    const currentContent = this.state.editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText("").length;
    const selectedTextLength = this._getLengthOfSelectedText();

    if (
      currentContentLength + pastedText.length - selectedTextLength >
      MAX_LENGTH_NOTE
    ) {
      console.log("you can type max 100 characters");

      return "handled";
    }
  };
}

export default Board;
