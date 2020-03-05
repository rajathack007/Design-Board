import React, { Component } from "react";
import "./UserMap.css";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";
import HelpIcon from "@material-ui/icons/Help";
import Tooltip from "@material-ui/core/Tooltip";
import axios from "axios";
import { API_URL } from "../services/url";


class UserMap extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      ProjectName: "",
      ProjectDescription: "",
      tokenvalue: "",
      data: [],
      project_data: [],
      name: "",
      redirect: false
    };
    this.logout = this.logout.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRoutechange = this.onRoutechange.bind(this);
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state.ProjectName);
    });
  };
  async componentDidMount() {
    this.setState({ tokenvalue: localStorage.getItem("token") });
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
      if (response.status === 200) {
        this.setState({ data: response.data.projects }, () => {
          console.log("data", response.data);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async onRoutechange(project_id, e) {
    e.preventDefault();
    const tokenvalue = localStorage.getItem("token");
    try {
      const response1 = await axios.get(
        `${API_URL}subproject/${project_id}`,
        (axios.defaults.headers.common["x-access-token"] = tokenvalue),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          }
        }
      );
      console.log("Sub_project_data", response1);
      if (response1.status === 200) {
        let sub_id = response1.data[0]._id;
        this.props.history.push(`/Board:${project_id}/${sub_id}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
  logout() {
    // Send a logout request to the API
    console.log("Sending a logout request to the API...");
    this.setState({ logginStatus: false });
    localStorage.removeItem("token");
    this.props.history.push("/sign-in");
    window.location.reload();
    // this.destroy(); // Cleanup
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  async onSubmit(e) {
    e.preventDefault();
    console.log("submit");
    let data = {
      name: this.state.ProjectName,
      desc: this.state.ProjectDescription
    };
    try {
      const response = await axios.post(
        `${API_URL}project/add`,
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
        alert("Project added");
        console.log("data", data);
        this.setState({ redirect: true, project_data: response.data });
        this.props.history.push(`/MapType:${response.data._id}`);
      }
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    const { open } = this.state;

    return (
      <div className="body" style={{ width: "100%" }}>
        {/* <div className="bodynavbar" style={{overflow:"hidden"}}>       
       <Link to="/Home"style={{textDecoration:"none"}}><p style={{color:"black",fontSize:"2em",textAlign:"center"}}>ETU LOGO</p></Link>
        
        <Link to="/Help" style={{marginLeft:"75%",fontSize:"1.5em",paddingTop:"0.65%",color:"black",textDecoration:"none"}}><Tooltip title={<span>Help</span>}><HelpIcon/></Tooltip></Link> 
  
       <a class="submenu" style={{marginLeft:"2%",marginTop:"0.65%"}}>
    
    <a  class="dropbtn" style={{color:"black",fontSize:"1.5em",textDecoration:"none"}} >Profile </a>
    <div class="dropdown-content">
    <Link to={{pathname:"/Profile",data2:data2,data4:data4}}  style={{color:"black",textDecoration:"none"}}>My Profile</Link> 
    <Link to="/"  style={{color:"black",textDecoration:"none"}}>Logout</Link>
      
     </div></a>
     
      </div>  */}
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
            <li> <Link to="/Help" style={{color:"white",textDecoration:"none"}}><Tooltip title={<span>Help</span>}><HelpIcon/></Tooltip></Link></li>
              <li>
                <a
                  class="submenu"
                  style={{ marginLeft: "2%", marginTop: "0.65%" }}
                >
                  <a
                    class="dropbtn"
                    style={{
                      paddingTop: "0.65%",
                      color: "white",
                      textDecoration: "none"
                    }}
                  >
                    Profile{" "}
                  </a>
                  <div class="dropdown-content">
                    <Link
                      to={{ pathname: "/Profile" }}
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      My Profile
                    </Link>
                    <Link
                      onClick={this.logout}
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Logout
                    </Link>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="mapcontainer">
          <div className="containernavbar">
            <p>Map</p>
          </div>
          
<div className="rowcontainermap">
          <div className="map" >
            <p style={{fontSize:"1.5em"}} onClick={this.onOpenModal}>
              New Project
            </p>
            <div className="mapbutton" onClick={this.onOpenModal}>
              +
            </div>

            <Modal open={open} onClose={this.onCloseModal} center>
              <div className="namemodal">
                <div className="namemodalnavbar">
                  <div
                    className="textsize2 "
                    style={{ paddingTop: 5, marginLeft: "5%" }}
                  >
                    Project Name
                  </div>
                </div>
                <div className="inputcontainer" style={{ textAlign: "center" }}>
                  <input
                    type="text"
                    style={{ marginTop: "-25%" }}
                    name="ProjectName"
                    placeholder="Project Name"
                    onChange={e => this.handleChange(e)}
                    maxlength="30"  size="30"
                  />
                  <br></br>
                  <input
                    type="text"
                    name="ProjectDescription"
                    placeholder="Project Description"
                    onChange={e => this.handleChange(e)}
                  />
                  <br></br>{" "}
                  <button
                    className="buttonlogout"
                    style={{ marginTop: "-5%" }}
                    onClick={e => this.onSubmit(e)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Modal>
            
          </div>
          {this.state.data.map(item => {
              return (
                <div
                  className="map"
                  // style={{marginTop:"-5.5%"}}
                  onClick={e => this.onRoutechange(item._id, e)}
                 
                >
                  <p className="textsize1" align="center">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
          </div>
        <div className="projectfooter" style={{ marginBottom: 10 }}>
          <footer>
            Powered By{" "}
            <a href="http://www.edunomics.in" target="_blank">
              {" "}
              <strong>Edunomics</strong>
            </a>
          </footer>
        </div>
      </div>
    );
  }
}
export default UserMap;
