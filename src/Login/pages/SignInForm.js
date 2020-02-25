import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./login.css";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <div classname="body">
      <div className="loginnavbar"><Link to="/Home"style={{textDecoration:"none"}}><p style={{color:"Black",fontSize:"2em",textAlign:"center"}}>ETU LOGO</p></Link>
      <Link to="/Home" style={{marginLeft:"2%",marginTop:"-0.5%",fontSize:"1.5em",paddingTop:".75%",color:"Black",textDecoration:"none"}}>Home</Link>
      </div> 
      <div className="log">
      <h3  style={{marginTop:"1%",marginBottom:"8%",marginLeft:"33%"}}>Welcome!</h3>
      <form onSubmit={this.handleSubmit}>
     
        <label htmlFor="email" style={{marginBottom:"5%"}}><h4  >Email</h4></label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
          
        />
        <label htmlFor="email"style={{marginBottom:"5%"}}><h4 >Password</h4></label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handleChange}
        />
        <center><Link to={{pathname:"/UserMap",data2:this.state.email}}> <button type="submit" className="buttonlogin">Login</button></Link></center>
        <br></br>
        <center> <Link to="/" className="FormField__Link">Create an account</Link>
      
        <Link to="/Forgotpassword" className="FormField__Link" style={{marginLeft:"8%"}}>Forgot Password?</Link></center>
      </form></div>
      <div className="signfooter" style={{marginBottom:10}}>
          <footer>
                    Powered By <a href="http://www.edunomics.in" target="_blank"> <strong>Edunomics</strong></a>
                </footer>
          </div>
      
      </div>
    );
  }
  // handleChanges=event=>{
  //   this.setState({[event.target.name]:event.target.value},()=>{
  //     console.log(this.state.email)
  //   })
    
  // }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("Submitting");
    console.log(this.state);
  };
}


export default SignInForm;