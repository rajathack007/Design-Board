import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./logout.css";

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (<div classname="body">
          <nav class="navbar">
        <div class="brand-title"><Link to="/Home" style={{color:"white",textDecoration:"none"}}> ETU LOGO</Link></div>
        
        <div class="navbar-links">
          <ul>
            <li> <Link to="/Home" style={{marginLeft:"2%",fontSize:20,paddingTop:".75%",color:"white",textDecoration:"none"}}>Home</Link></li>
            
            <li> <Link to="/sign-in" style={{textAlign:"right",color:"black",paddingLeft:"1%",paddingRight:"1%",textDecoration:"none"}}> <a style={{textAlign:"right",fontSize:20,paddingTop:".75%"}}>Login</a></Link></li>
          </ul>
        </div>
      </nav>
           {/* <div className="logoutnavbar1"><Link to="/Home"style={{textDecoration:"none"}}><p style={{color:"Black",fontSize:"2em",textAlign:"center"}}>ETU LOGO</p></Link>
           <Link to="/Home" style={{marginLeft:"2%",marginTop:"-0.5%",fontSize:"1.5em",paddingTop:".75%",color:"Black",textDecoration:"none"}}>Home</Link>
           </div>  */}
       <div className="logout" >
         
       <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name" style={{marginBottom:"5%",marginTop:"1%"}}><h4>Username</h4></label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter Username" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password" style={{marginBottom:"5%"}}><h4>Password</h4></label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email"style={{marginBottom:"5%"}}><h4>Email Address</h4></label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your Email Address" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

             

              <div className="FormField">
           <center>  <Link to={{pathname:"/UserMap",data4:this.state.name,data2:this.state.email}}>  <button className="buttonlogout">Sign Up</button></Link><br></br><br></br> <Link to="/sign-in" className="FormField__Link" style={{marginLeft:"2%"}}>I'm already member</Link></center> 
              </div>
            </form>


         
       </div>
          <div className="signfooter1" style={{marginBottom:10}}>
          <footer>
                    Powered By <a href="http://www.edunomics.in" target="_blank"> <strong>Edunomics</strong></a>
                </footer>
          </div></div>
          
        );
    }
}
export default SignUpForm;