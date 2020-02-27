import React, { Component } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";
import axios from "axios";
import { API_URL } from "../services/url";
import HelpIcon from "@material-ui/icons/Help";
import Tooltip from "@material-ui/core/Tooltip";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false,
      open: false,
      newpassword: "",
      confirmpassword: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async handleSubmit(e) {
    let data = {
      oldPassword: this.state.password,
      newpassword: this.state.newpassword
    };
    e.preventDefault();
    if (this.state.newpassword === this.state.confirmpassword) {
      try {
        const response = await axios.post(`${API_URL}reset`, data);
        console.log(response);
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          console.log("Password changed");
        }
      } catch (err) {
        console.error(err.response.data.msg);
        alert(err.response.data.msg);
      }
    } else alert("Password doesn't match");
  }
  render() {
    const { data4 } = this.props.location;
    const { data2 } = this.props.location;
    const { open } = this.state;
    return (
      <div className="body">
       
       <nav class="navbar">
        <div class="brand-title"><Link to="/Home" style={{color:"white",textDecoration:"none"}}> ETU LOGO</Link></div>
        
        <div class="navbar-links">
          <ul>
          <li> <Link to="/UserMap" style={{color:"white",textDecoration:"none"}}>Dashboard</Link></li>
            <li> <Link to="/Help" style={{color:"white",textDecoration:"none"}}><Tooltip title={<span>Help</span>}><HelpIcon/></Tooltip></Link></li>
           <li>
           <a class="submenu" style={{marginLeft:"2%",marginTop:"0.65%"}}>
    
    <a  class="dropbtn" style={{paddingTop:"0.65%",color:"white",textDecoration:"none"}} >Profile </a>
    <div class="dropdown-content">
    <Link to={{pathname:"/Profile",data2:data2,data4:data4}}  style={{color:"black",textDecoration:"none"}}>My Profile</Link> 
    <Link onClick={this.logout}  style={{color:"black",textDecoration:"none"}}>Logout</Link>
      
     </div></a>
           </li>
          </ul>
        </div>
      </nav>
        <div style={{ marginTop: "1%" }}>
          <h3 style={{ textAlign: "center", marginTop: "2%" }}>Profile</h3>
          <form className="FormFields">
            <div>
              <label htmlFor="name">
                <h6>Username</h6>
              </label>
              <input
                type="text"
                id="name"
                placeholder=" Username"
                name="name"
                value={(this.state.name, data4)}
                onChange={this.handleChange}
                disabled
              />
            </div>

            <div>
              <label htmlFor="email">
                <h6> Email Address</h6>
              </label>
              <input
                type="email"
                id="email"
                className="FormField__Input"
                placeholder=" Your Email"
                name="email"
                value={data2}
                onChange={this.handleChange}
                disabled
              />
            </div>
            <div>
              <center>
                {" "}
                <button className="profilebutton" onClick={this.onOpenModal}>
                  Edit Profile
                </button>{" "}
              </center>
            </div>
          </form>
          <h3 style={{ textAlign: "center", marginTop: "2%" }}>
            Change Password
          </h3>
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div>
              <label>
                <h6>Old Password</h6>
              </label>
              <input
                type="password"
                id="password"
                placeholder=" Old Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div>
              <label>
                <h6> New Password</h6>
              </label>
              <input
                type="password"
                id=" new password"
                className="FormField__Input"
                placeholder=" New Password"
                name="newpassword"
                value={this.state.newpassword}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>
                <h6> Confirm Password</h6>
              </label>
              <input
                type="password"
                id="confirm password"
                className="FormField__Input"
                placeholder=" Confirm Password"
                name="confirmpassword"
                value={this.state.confirmpassword}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <center>
                {" "}
                <button className="profilebutton" onClick={this.handleSubmit}>
                  Change Password
                </button>{" "}
              </center>
            </div>
          </form>
          <Modal open={open} onClose={this.onCloseModal} center>
            <div className="editprofile">
              <div className="editprofilenavbar">Edit Profile</div>
              <br></br>
              <div>
                <form onSubmit={this.handleSubmit} className="FormFields">
                  <div>
                    <label htmlFor="name">
                      <h6>Username</h6>
                    </label>
                    <input
                      style={{ width: "220%" }}
                      type="text"
                      id="name"
                      placeholder=" Username"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">
                      <h6> Email Address</h6>
                    </label>
                    <input
                      style={{ width: "220%" }}
                      type="email"
                      id="email"
                      className="FormField__Input"
                      placeholder=" Your Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <center>
                      {" "}
                      <button
                        className="profilebutton"
                        onClick={this.onCloseModal}
                      >
                        Save Profile
                      </button>{" "}
                    </center>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        </div>

        <div className="profilefooter" style={{ marginBottom: 10 }}>
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
export default Profile;
