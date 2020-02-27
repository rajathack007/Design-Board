import React, { Component } from "react";
import "./UserMap.css";
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from "@material-ui/core/Tooltip";


class UserMap extends Component {
  state = {
    open: false,
  ProjectName:"",
  };
  handleChange=event=>{
    this.setState({[event.target.name]:event.target.value},()=>{
      console.log(this.state.ProjectName)
    })
    
  }
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
  render(){
    const { open } = this.state;
    
    const {data2} = this.props.location;
    const {data4} = this.props.location;
    return(
      <div className="body" style={{width:"100%"}} >
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
        <div class="brand-title"><Link to="/Home" style={{color:"white",textDecoration:"none"}}> ETU LOGO</Link></div>
        
        <div class="navbar-links">
          <ul>
            <li> <Link to="/Help" style={{fontSize:"1.5em",color:"white",textDecoration:"none"}}><Tooltip title={<span>Help</span>}><HelpIcon/></Tooltip></Link></li>
           <li>
           <a class="submenu" style={{marginLeft:"2%",marginTop:"0.65%"}}>
    
    <a  class="dropbtn" style={{paddingTop:"0.65%",color:"white",textDecoration:"none"}} >Profile </a>
    <div class="dropdown-content">
    <Link to={{pathname:"/Profile",data2:data2,data4:data4}}  style={{color:"black",textDecoration:"none"}}>My Profile</Link> 
    <Link to="/"  style={{color:"black",textDecoration:"none"}}>Logout</Link>
      
     </div></a>
           </li>
          </ul>
        </div>
      </nav>
      
      <div className="mapcontainer">
      
        <div className="containernavbar"><p>Map</p></div>
        
        <div className="map">

        
        <p className="textsize1"
              align="center">New Project</p>
              <div className="mapbutton" onClick={this.onOpenModal}>+</div>
         
         <Modal open={open} onClose={this.onCloseModal } center  >
           <div className="namemodal" >
             <div className="namemodalnavbar" ><div className="textsize2 " style={{paddingTop:5,marginLeft:"5%"}}>Project Name</div></div>
             <div className="inputcontainer" style={{textAlign:"center"}}>
             <input type="text" style={{marginTop:"-25%"}} name="ProjectName" placeholder="Project Name" onChange={e=>this.handleChange(e)} /><br></br>
             <input type="text"  name="ProjectDescription" placeholder="Project Description" onChange={e=>this.handleChange(e)} /><br></br>
             <Link to={{pathname:"/MapType",data:this.state.ProjectName}}> <button  className="buttonlogout"style={{marginTop:"-5%"}} >Submit</button></Link> 
              </div>
              </div>
        </Modal>
       
          </div>
      </div>
      <div className="projectfooter" style={{marginBottom:10}}>
      <footer>
                    Powered By <a href="http://www.edunomics.in" target="_blank"> <strong>Edunomics</strong></a>
                </footer>
      </div>
     </div>
     
    );
  }
}
export default UserMap;
