import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Forgotpassword.css";
class Forgotpassword extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password:"",
        
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    
      handleSubmit = event => {
        console.log("Submitting");
        console.log(this.state);
      };
  
    render() {
        const { email, password } = this.state;
        return(
            <div className="body">
              <nav class="navbar">
        <div class="brand-title"><Link to="/Home" style={{color:"white",textDecoration:"none"}}> ETU LOGO</Link></div>
        
        <div class="navbar-links">
          <ul>
            <li> <Link to="/Home" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"white",textDecoration:"none"}}>Home</Link></li>
           
            <li> <Link to="/sign-in" style={{textAlign:"right",color:"black",paddingLeft:"1%",paddingRight:"1%",textDecoration:"none"}}> <a style={{textAlign:"right",fontSize:20,paddingTop:".75%"}}>Login</a></Link></li>
          </ul>
        </div>
      </nav>
                {/* <div className="forgotnavbar" ><Link to="/Home" style={{textDecoration:"none"}}><p style={{color:"Black",fontSize:"2em",textAlign:"center"}}>ETU LOGO</p></Link>
                <Link to="/Home" style={{marginLeft:"2%",marginTop:"-0.5%",fontSize:"1.5em",paddingTop:".75%",color:"Black",textDecoration:"none"}}>Home</Link>
                </div> */}
            <div className="forgotcontainer" >
<form onSubmit={this.handleSubmit}>
        <label htmlFor="email" style={{marginBottom:"5%"}}><h4 > Email</h4></label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
        />
        
        <center><Link to="/sign-in"> <button type="submit" className="buttonlogin">Reset Password</button>
        </Link> </center>
      </form>


            </div>
            {/* <div className="forgotfooter" style={{marginBottom:10}}>
          <footer>
                    Powered By <a href="http://www.edunomics.in" target="_blank"> <strong>Edunomics</strong></a>
                </footer>
          </div> */}
</div>
        )
    }}
    
    
    export default Forgotpassword;
