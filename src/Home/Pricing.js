import React, { Component } from "react";
import "./Pricing.css";
import { Link } from 'react-router-dom';




class Pricing extends Component {
    render(){
        return(
            <div className="body">
                 <div className="pricingnavbar" > <Link to="/Home" style={{color:"white",textDecoration:"none"}}> ETU LOGO</Link>
                 <Link to="/Home" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"white",textDecoration:"none"}}>Home</Link>
                 <Link to="/UserMap"   style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"white",textDecoration:"none"}}>Dashboard</Link>
                 <a style={{marginLeft:"2%",fontSize:20,paddingTop:".75%"}}>Pricing</a>
                 <Link to="/Terms" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"white",textDecoration:"none"}}>Terms & Condition</Link>
                 <Link to="/PrivacyPolicy" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"white",textDecoration:"none"}}>Privacy Policy</Link>
                   <Link to="/sign-in" style={{marginLeft:"45%",color:"white",textDecoration:"none"}}> <a style={{fontSize:20,paddingTop:".75%"}}>Login</a></Link></div> 
                   <div style={{marginLeft:"45%",fontSize:"2em"}}>Pricing</div>
                   <div className="pricingfooter" style={{marginBottom:10}}>
      <footer>
                    Powered By <a href="http://www.edunomics.in" target="_blank"> <strong>Edunomics</strong></a>
                </footer>
      </div>
            </div>

        )
    }

}
export default Pricing;