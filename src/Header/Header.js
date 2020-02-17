import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
         
                <Header>ETU LOGO
                <a style={{marginLeft:"2%",fontSize:20,paddingTop:".75%"}}>Home</a> 
                 <a style={{marginLeft:"2%",fontSize:20,paddingTop:".75%"}}>Pricing</a>
                  <a style={{marginLeft:"2%",fontSize:20,paddingTop:".75%"}}>Terms & Condition</a>
                   <a style={{marginLeft:"2%",fontSize:20,paddingTop:".75%"}}>Privacy Policy</a>
                   {/* <Link to="/sign-in" style={{paddingLeft:"50%",color:"white"}}> <a style={{fontSize:20,paddingTop:".75%"}}>Login</a></Link> */}
                   
                </Header>
           
        );
    }
}

export default Header;