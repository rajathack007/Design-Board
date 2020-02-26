import React, { Component } from "react";
import "./Term.css";
import { Link } from 'react-router-dom';




class Terms extends Component {
    render(){
        return(
            <div className="body">
                 <div className="termnavbar" > <Link to="/Home" style={{color:"black",textDecoration:"none"}}> ETU LOGO</Link>
                 <Link to="/Home" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"black",textDecoration:"none"}}>Home</Link>
                 <Link to="/UserMap"   style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"black",textDecoration:"none"}}>Dashboard</Link>
                 <Link to="/Pricing" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"black",textDecoration:"none"}}>Pricing</Link>
                  {/* <a style={{marginLeft:"2%",fontSize:20,paddingTop:".75%"}}>Terms & Condition</a>
                  <Link to="/PrivacyPolicy" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"black",textDecoration:"none"}}>Privacy Policy</Link> */}
                   <Link to="/sign-in" style={{marginLeft:"38%",color:"black",textDecoration:"none"}}> <a style={{fontSize:20,paddingTop:".75%"}}>Login</a></Link></div> 
                   <div style={{marginLeft:"45%",fontSize:"2em"}}>Terms&Condition</div>
                   <center><img src="https://ht2ltd.zendesk.com/hc/article_attachments/360014926351/terms-display.png"/></center>
                   <div className="termfooter" style={{marginBottom:10}}>
      <footer>
                    Powered By <a href="http://www.edunomics.in" target="_blank"> <strong>Edunomics</strong></a>
                </footer>
      </div>
            </div>

        )
    }

}
export default Terms;