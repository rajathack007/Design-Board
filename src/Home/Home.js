import React, { Component } from "react";
import "./Home.css";
import { Link } from 'react-router-dom';




class Home extends Component {
    render(){
        return(
            <div className="body">
                 <div className="homenavbar" > <Link to="/Home"  class="active" style={{color:"black",textDecoration:"none",display:"inline-flex"}}> ETU LOGO</Link>
                      <Link to="/UserMap"   style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"black",textDecoration:"none"}}>Dashboard</Link>
         <Link to="/Pricing" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"black",textDecoration:"none"}}>Pricing</Link> 
         {/* <Link to="/Terms" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"black",textDecoration:"none"}}>Terms & Condition</Link>
         <Link to="/PrivacyPolicy" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"black",textDecoration:"none"}}>Privacy Policy</Link> */}
                   
                   
                   
                   <Link to="/sign-in" style={{marginLeft:"62.5%",color:"black",paddingLeft:"1%",paddingRight:"1%",textDecoration:"none"}}> <a style={{fontSize:20,paddingTop:".75%"}}>Login</a></Link></div> 
<div style={{marginLeft:"45%",fontSize:"2em"}}>HOME</div>
<center><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-fKDmejJzn8DWadi7jsKYJX3S0d3sMAfedAoVHa47ix3YqaZO" style={{marginTop:"10%"}} /></center>

                   <div className="homefooter" style={{marginBottom:10}}>
      <footer>
      {/* <Link to="/Terms" style={{marginLeft:"2%",fontSize:20,color:"black",textDecoration:"none"}}>Terms & Condition</Link>
         <Link to="/PrivacyPolicy" style={{marginLeft:"2%",fontSize:20,color:"black",textDecoration:"none",marginRight:"2%"}}>Privacy Policy</Link> */}
                   Powered By <a href="http://www.edunomics.in" target="_blank" > <strong>Edunomics</strong></a>
                </footer>
      </div>
            </div>

        )
    }

}
export default Home;