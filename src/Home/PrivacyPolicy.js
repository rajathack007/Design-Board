import React, { Component } from "react";
import "./PrivacyPolicy.css";
import { Link } from 'react-router-dom';




class PrivacyPolicy extends Component {
    render(){
        return(
            <div className="body">
                 <div className="privacynavbar" > <Link to="/Home" style={{color:"white",textDecoration:"none"}}> ETU LOGO</Link>
                 <Link to="/Home" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"white",textDecoration:"none"}}>Home</Link>
                 <Link to="/UserMap"   style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"white",textDecoration:"none"}}>Dashboard</Link>
                 <Link to="/Pricing" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"white",textDecoration:"none"}}>Pricing</Link>
                 <Link to="/Terms" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"white",textDecoration:"none"}}>Terms & Condition</Link>
                   <a style={{marginLeft:"2%",fontSize:20,paddingTop:".75%"}}>Privacy Policy</a>
                   <Link to="/sign-in" style={{marginLeft:"45%",color:"white",textDecoration:"none"}}> <a style={{fontSize:20,paddingTop:".75%"}}>Login</a></Link></div> 
                   <div style={{marginLeft:"45%",fontSize:"2em"}}>PrivacyPolicy</div>
                   <div className="privacyfooter" style={{marginBottom:10}}>
      <footer>
                    Powered By <a href="http://www.edunomics.in" target="_blank"> <strong>Edunomics</strong></a>
                </footer>
      </div>
            </div>

        )
    }

}
export default PrivacyPolicy;