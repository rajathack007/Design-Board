import React, { Component } from "react";
import "./Home.css";
import { Link } from 'react-router-dom';




class Home extends Component {
    render(){
        return(
            <div className="homebody">
                 <div className="homenavbar" > ETU LOGO
                <a style={{marginLeft:"2%",fontSize:20,paddingTop:".75%"}}>Home</a> 
                 <a style={{marginLeft:"2%",fontSize:20,paddingTop:".75%"}}>Pricing</a>
                  <a style={{marginLeft:"2%",fontSize:20,paddingTop:".75%"}}>Terms & Condition</a>
                   <a style={{marginLeft:"2%",fontSize:20,paddingTop:".75%"}}>Privacy Policy</a>
                   <Link to="/sign-in" style={{paddingLeft:"50%",color:"white"}}> <a style={{fontSize:20,paddingTop:".75%"}}>Login</a></Link></div> 
            </div>

        )
    }

}
export default Home;