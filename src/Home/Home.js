import React, { Component } from "react";
import "./Home.css";
import { Link } from 'react-router-dom';




class Home extends Component {
    render(){
        return(
            <div className="body">
              <nav class="navbar">
        <div class="brand-title">ETU LOGO</div>
        
        <div class="navbar-links">
          <ul>
          <li> <a href="/Home" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"white",textDecoration:"none"}}>Features</a></li>
            <li> <a href="/Home"style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"white",textDecoration:"none"}}>Pricing</a></li>
            <li> <Link to="/sign-in" style={{textAlign:"right",color:"black",paddingLeft:"1%",paddingRight:"1%",textDecoration:"none"}}> <a style={{textAlign:"right",fontSize:20,paddingTop:".75%"}}>Login</a></Link></li>
          </ul>
        </div>
      </nav>
      
               
                 
                 
<div style={{marginLeft:"45%",fontSize:"2em"}}>HOME</div>
<center><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-fKDmejJzn8DWadi7jsKYJX3S0d3sMAfedAoVHa47ix3YqaZO" style={{marginTop:"10%"}} /></center>

                   <div className="homefooter" style={{marginBottom:10}}>
      <footer>
     
                 <center> Powered By <a href="http://www.tech.edunomics.in" target="_blank" > <strong>Edunomics</strong></a></center> 
                </footer>
      </div>
            </div>

        )
    }

}
export default Home;