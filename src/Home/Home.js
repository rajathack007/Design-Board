import React, { Component } from "react";
import "./Home.css";
import { Link } from 'react-router-dom';




class Home extends Component {
    render(){
        return(
            <div className="body">
                 <div className="homenavbar" > <Link to="/Home" style={{color:"white",textDecoration:"none"}}> ETU LOGO</Link>
                      <Link to="/UserMap"   style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"white",textDecoration:"none"}}>Dashboard</Link>
         <Link to="/Pricing" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"white",textDecoration:"none"}}>Pricing</Link> 
         <Link to="/Terms" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"white",textDecoration:"none"}}>Terms & Condition</Link>
         <Link to="/PrivacyPolicy" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"white",textDecoration:"none"}}>Privacy Policy</Link>
                   
                   
                   
                   <Link to="/sign-in" style={{marginLeft:"50%",color:"white",textDecoration:"none"}}> <a style={{fontSize:20,paddingTop:".75%"}}>Login</a></Link></div> 
<div style={{marginLeft:"45%",fontSize:"2em"}}>HOME</div>
<center><img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/updates/customer-journey-map-example.png" /></center>

                   <div className="homefooter" style={{marginBottom:10}}>
      <footer>
                    Powered By <a href="http://www.edunomics.in" target="_blank"> <strong>Edunomics</strong></a>
                </footer>
      </div>
            </div>

        )
    }

}
export default Home;