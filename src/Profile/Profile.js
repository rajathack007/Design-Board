import React, { Component } from "react";
import "./Profile.css";
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';




class Profile extends Component {
constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false,
            open:false,
            newpassword:'',
            confirmpassword:'',
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
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    render(){
        const {data4} = this.props.location;
        const {data2} = this.props.location;
        const { open } = this.state;
        return(
            <div className="body">
                 <div className="profilenavbar" >
                 <Link to="/Home"style={{textDecoration:"none"}}><p style={{color:"black",fontSize:"2em",textAlign:"center"}}>ETU LOGO</p></Link>
        <Link to="/UserMap" style={{marginLeft:"3%",fontSize:"1.5em",paddingTop:"0.65%",color:"black",textDecoration:"none"}}>Dashboard</Link>
        <Link to="/Help" style={{marginLeft:"65%",fontSize:"1.5em",paddingTop:"0.65%",color:"black",textDecoration:"none"}}>Help</Link> 
       <a class="submenu" style={{marginLeft:"2%",marginTop:"0.75%"}}>
    
    <a  class="dropbtn" style={{color:"black",fontSize:"1.5em",textDecoration:"none"}}>Profile</a>
    <div class="dropdown-content">
    <Link to="/Profile" style={{color:"black",textDecoration:"none"}}>My Profile</Link>  
      <Link to="/" style={{color:"black",textDecoration:"none"}}>Logout</Link>
      
     </div></a>
                      </div>
                      <div style={{marginTop:"1%"}}>
                          <h3 style={{textAlign:"center",marginTop:"2%"}}>Profile</h3>
                      <form onSubmit={this.handleSubmit} className="FormFields">
              <div >
                <label  htmlFor="name" ><h6>Username</h6></label>
                <input type="text" id="name"  placeholder=" Username" name="name" value={this.state.name,data4} onChange={this.handleChange} disabled />
              </div>
              
              <div >
                <label  htmlFor="email"><h6> Email Address</h6></label>
                <input type="email" id="email" className="FormField__Input" placeholder=" Your Email" name="email" value={data2} onChange={this.handleChange} disabled />
              </div>
              <div >
           <center>   <button className="profilebutton" onClick={this.onOpenModal}>Edit Profile</button> </center> 
              </div>
            </form>
            <h3 style={{textAlign:"center",marginTop:"2%"}}>Change Password</h3>
                      <form onSubmit={this.handleSubmit} className="FormFields">
              <div>
                <label  ><h6>Old Password</h6></label>
                <input type="password" id="password"  placeholder=" Old Password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              
              <div >
                <label  ><h6> New Password</h6></label>
                <input type="password" id=" new password" className="FormField__Input" placeholder=" New Password" name="newpassword" value={this.state.newpassword} onChange={this.handleChange} />
              </div>
              <div >
                <label ><h6> Confirm Password</h6></label>
                <input type="password" id="confirm password" className="FormField__Input" placeholder=" Confirm Password" name="confirmpassword" value={this.state.confirmpassword} onChange={this.handleChange} />
              </div>
              <div >
           <center>   <button className="profilebutton" onClick={this.handleSubmit}>Change Password</button> </center> 
              </div>
            </form>
            <Modal open={open} onClose={this.onCloseModal } center  >
           <div className="editprofile" >
             <div className="editprofilenavbar" >Edit Profile</div><br></br>
             <div >
             <form onSubmit={this.handleSubmit} className="FormFields">
             
              <div >
                  
                <label  htmlFor="name" ><h6>Username</h6></label>
                <input style={{width:"220%"}}type="text" id="name"  placeholder=" Username" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              
              <div >
                <label  htmlFor="email"><h6> Email Address</h6></label>
                <input style={{width:"220%"}}type="email" id="email" className="FormField__Input" placeholder=" Your Email" name="email" value={this.state.email} onChange={this.handleChange} />
                
              </div>
              <div >
           <center>   <button className="profilebutton" onClick={this.onCloseModal}>Save Profile</button> </center> 
              </div>
            </form>
              </div>
              </div>
        </Modal>
                      
                      </div>
                  
                   <div className="profilefooter" style={{marginBottom:10}}>
      <footer>
                    Powered By <a href="http://www.edunomics.in" target="_blank"> <strong>Edunomics</strong></a>
                </footer>
      </div>
            </div>

        )
    }

}
export default Profile;