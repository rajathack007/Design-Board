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
           
          
          </ul>
        </div>
      </nav>
      <div style={{marginLeft:"45%",fontSize:"2em"}}>Help</div>
      <center><img src="https://dsctal.space/wp-content/uploads/2018/10/Canvas_Help_Flowchart.jpg"/></center>
                   {/* <div className="helpfooter" style={{marginBottom:10}}>
      <footer>
                    Powered By <a href="http://www.edunomics.in" target="_blank"> <strong>Edunomics</strong></a>
                </footer>
      </div> */}
            </div>

        )
    }

}
export default Help;