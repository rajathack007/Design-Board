import React, { Component } from "react";
import "./MapType.css";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import HelpIcon from "@material-ui/icons/Help";
import Tooltip from "@material-ui/core/Tooltip";
import axios from "axios";
import { API_URL } from "../services/url";

class MapType extends Component {
  state = {
    open: false,
    maptype: "",
    Project_id: "",
    data: []
  };

  onOpenModal = maptype => {
    this.setState({ open: true, maptype });
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
      this.setState(
        {
          tokenvalue: localStorage.getItem("token"),
          Project_id: this.props.match.params.id.split(":")[1],
          data: response.data.projects
        },
        () => {
          console.log(this.state.data);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  async onSubprojectsubmit(e) {
    let data = {
      projectid: this.state.Project_id,
      subProjectName: "Untitled",
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
      const subprojectid = response.data._id;
      if (response.status === 200) {
        this.props.history.replace(
          `/Board:${this.state.Project_id}/${subprojectid}`
        );
      }
    } catch (err) {
      console.log(err);
      //alert(err.response.data.msg);
    }
  }
  onCloseModal = () => {
    this.setState({ open: false });
  };
  //constructor
  render() {
    const { open } = this.state;
    // const {data} = this.props.location;
    // console.log(data);
    return (
      <div className="container5">
        <nav class="navbar">
          <div class="brand-title">
            <Link to="/UserMap" style={{ color: "white", textDecoration: "none" }}>
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
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <div className="containernavbar1">
           <Link to="/Home"style={{textDecoration:"none"}}><p style={{color:"black",fontSize:"2em",textAlign:"center"}}>ETU LOGO</p></Link>
       
        <Link to="/Help" style={{marginLeft:"75%",fontSize:"1.5em",paddingTop:"0.65%",color:"black",textDecoration:"none"}}><Tooltip title={<span>Help</span>}><HelpIcon/></Tooltip></Link> 
       <a class="submenu" style={{marginLeft:"2%",marginTop:"0.65%"}}>
    
    <a  class="dropbtn" style={{color:"black",fontSize:"1.5em",textDecoration:"none"}}>Profile</a>
    <div class="dropdown-content">
    <Link to="/Profile"  style={{color:"black",textDecoration:"none"}}>My Profile</Link> 
    <Link to="/"  style={{color:"black",textDecoration:"none"}}>Logout</Link>
      
     </div></a>
          </div>  */}
        <div className="projectnamenavbar">
          {" "}
          {this.state.data.map(item => {
            if (item._id == this.state.Project_id)
              return <div>{item.name}</div>;
          })}
        </div>

        <div className="newmapcontainer1">
          <div className="newmapcontainernavbar1">
            <p>Map </p>
          </div>
          <div className="rowcontainer">
            <div className="customerjourneymap1">
              <p className="textsize1" align="center">
                Customer Journey Map
              </p>

              <div
                className="mapbutton1"
                onClick={() => this.onOpenModal("Customer")}
              >
                +
              </div>
            </div>
            <div className="businessmodelcanvas1">
              <p className="textsize1" align="center">
                Business Model Canvas
              </p>
              <Link
                to="/Businesscanvas"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <div className="mapbutton1">+</div>
              </Link>
            </div>
            <div className="personamap">
              <p className="textsize1" align="center">
                Persona Map
              </p>
              <div className="mapbutton1" style={{marginTop:53}}>+</div>
            </div>

            <div>
              <Modal type="fade" open={open} onClose={this.onCloseModal} center>
                <div className="template">
                  <div className="templatenavbar">Choose Map Template</div>
                  <div
                    className="templaterow"
                    style={{ marginTop: "3.5%", marginLeft: "1.5%" }}
                  >
                    <Link
                      onClick={e => this.onSubprojectsubmit(e)}
                      state={this.state.maptype}
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

                  {/* <div className="template" style={{marginTop:25}}>

            <Link to={{pathname:"/Board",data:data}} style={{textDecoration:"none",color:"black"}} > <Card className="text-center" style={{background:'#A4D3FF'}}>
  <Card.Header style={{margin:10}}>Create a Blank Map</Card.Header>
  <Card.Body>
    <Card.Title>Blank Map</Card.Title>
    <Card.Text>
      Create your own structure yourself from scratch.
    </Card.Text>
  </Card.Body>
</Card></Link><br></br><br></br>
<Card className="text-center" style={{background:'#A4D3FF'}}>
  <Card.Header style={{margin:10}}>Create a Tutorial Map</Card.Header>
  <Card.Body>
    <Card.Title>Tutorial Map</Card.Title>
    <Card.Text>
      Create Structure with most basic functionality.
    </Card.Text>
  </Card.Body>
</Card><br></br><br></br>
<Card className="text-center" style={{background:'#A4D3FF'}}>
  <Card.Header style={{margin:10}}>Create a  Vacation Travel</Card.Header>
  <Card.Body>
    <Card.Title>Vacation Travel</Card.Title>
    <Card.Text>
     Customer Journey Map starting point for pleasure service that are planned in advance such as Hotels,Restaurants,Museums.
    </Card.Text>
  </Card.Body>
</Card><br></br><br></br>
<Card className="text-center" style={{background:'#A4D3FF'}}>
  <Card.Header style={{margin:10}}>Create a Elderly Need for Care</Card.Header>
  <Card.Body>
    <Card.Title>Elderly Need for Care</Card.Title>
    <Card.Text>
      Customer Journey Map for life changing medical treatment and care services.
    </Card.Text>
  </Card.Body>
</Card><br></br><br></br>
<Card className="text-center" style={{background:'#A4D3FF'}}>
  <Card.Header style={{margin:10}}>Create a Food Ordering and Delivery</Card.Header>
  <Card.Body>
    <Card.Title>Food Ordering and Delivery</Card.Title>
    <Card.Text>
      A journey map template for the food and drink ordering and delivery experience.
    </Card.Text>
  </Card.Body>
</Card><br></br><br></br>
<Card className="text-center" style={{background:'#A4D3FF'}}>
  <Card.Header style={{margin:10}}>Create a Service Blueprint Template</Card.Header>
  <Card.Body>
    <Card.Title>Service Blueprint Template</Card.Title>
    <Card.Text>
     Motivate people to improve regardless of touchpint.
    </Card.Text>
  </Card.Body>
</Card>
<br></br><br></br>
<Card className="text-center" style={{background:'#A4D3FF'}}>
  <Card.Header style={{margin:10}}>Create a Customer Journey Map for Ideation</Card.Header>
  <Card.Body>
    <Card.Title>Customer Journey Map for Ideation</Card.Title>
    <Card.Text>
      Customer Journey Map work focused on discovering potential opportunities and generate customer relevant ideas.
    </Card.Text>
  </Card.Body>
</Card>
<br></br><br></br>
<Card className="text-center" style={{background:'#A4D3FF'}}>
  <Card.Header style={{margin:10}}>Create a Retail Online/Offline Template</Card.Header>
  <Card.Body>
    <Card.Title>Retail Online/Offline Template</Card.Title>
    <Card.Text>
      Journey Map to improve Online/Offline, multi/omnichannel customer journey.
    </Card.Text>
  </Card.Body>
</Card>
<br></br><br></br>
<Card className="text-center" style={{background:'#A4D3FF'}}>
  <Card.Header style={{margin:10}}>Create a PSD Blueprint Template</Card.Header>
  <Card.Body>
    <Card.Title>PSD Blueprint Template</Card.Title>
    <Card.Text>
      In collabaration with Practical Service Design.
    </Card.Text>
  </Card.Body>
</Card>
          </div> */}
                </div>
              </Modal>
            </div>
          </div>
        </div>
        <div className="mapfooter" style={{ marginBottom: 10 }}>
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
export default MapType;
