import React, { Component } from "react";
import "./Help.css";
import { Link } from 'react-router-dom';




class Help extends Component {
    render(){
        return(
            <div className="body">
                 <div className="helpnavbar"> 
                 <Link to="/Home"style={{textDecoration:"none"}}><p style={{color:"white",fontSize:"2em",textAlign:"center"}}>ETU LOGO</p></Link>
        <Link to="/UserMap" style={{marginLeft:"3%",fontSize:"1.5em",paddingTop:"0.65%",color:"white",textDecoration:"none"}}>Dashboard</Link>
        <Link to="/Help" style={{marginLeft:"65%",fontSize:"1.5em",paddingTop:"0.65%",color:"white",textDecoration:"none"}}>Help</Link> 
       <a class="submenu" style={{marginLeft:"2%",marginTop:"0.75%"}}>
    
    <a  class="dropbtn" style={{color:"white",fontSize:"1.5em",textDecoration:"none"}}>Profile</a>
    <div class="dropdown-content">
     <Link to="/Profile" style={{color:"black",textDecoration:"none"}}>My Profile</Link>
      <Link to="/"style={{color:"black",textDecoration:"none"}}>Logout</Link>
      
     </div></a>
      </div> 
      <div style={{marginLeft:"45%",fontSize:"2em"}}>Help</div>
                   <div className="helpfooter" style={{marginBottom:10}}>
      <footer>
                    Powered By <a href="http://www.edunomics.in" target="_blank"> <strong>Edunomics</strong></a>
                </footer>
      </div>
            </div>

        )
    }

}
export default Help;