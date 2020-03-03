import React, { Component } from "react";
import "./Help.css";
import { Link } from 'react-router-dom';

import HelpIcon from "@material-ui/icons/Help";
import Tooltip from "@material-ui/core/Tooltip";


class Help extends Component {
    render(){
        return(
            <div className="body">
                  <nav class="navbar">
        <div class="brand-title"><Link to="/UserMap" style={{color:"white",textDecoration:"none"}}> ETU LOGO</Link></div>
        
        <div class="navbar-links">
          <ul>
          <li> <Link to="/UserMap" style={{color:"white",textDecoration:"none"}}>Dashboard</Link></li>
            <li> <Link to="/Help" style={{color:"white",textDecoration:"none"}}><Tooltip title={<span>Help</span>}><HelpIcon/></Tooltip></Link></li>
           <li>
           <a class="submenu" style={{marginLeft:"2%",marginTop:"0.65%"}}>
    
    <a  class="dropbtn" style={{paddingTop:"0.65%",color:"white",textDecoration:"none"}} >Profile </a>
    <div class="dropdown-content">
    <Link to="/Profile"  style={{color:"black",textDecoration:"none"}}>My Profile</Link> 
    <Link to="/"  style={{color:"black",textDecoration:"none"}}>Logout</Link>
      
     </div></a>
           </li>
          </ul>
        </div>
      </nav>
      <div style={{marginLeft:"45%",fontSize:"2em"}}>Help</div>
      <center><img src="https://dsctal.space/wp-content/uploads/2018/10/Canvas_Help_Flowchart.jpg"/></center>
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