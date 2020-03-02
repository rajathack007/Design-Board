import React, { Component } from "react";
import { Link, Redirect, withRouter, NavLink } from "react-router-dom";
import "./login.css";
//import { Link, Redirect, withRouter, NavLink } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../services/url";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}login`, this.state);
      console.log(response);
      if (response.data) {
        localStorage.setItem("token", response.data.token);
        console.log("Logged In");
        this.props.history.push("/UserMap");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
      alert(err.response.data.msg);
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div classname="body">
        <nav class="navbar">
          <div class="brand-title">
            <Link to="/Home" style={{ color: "white", textDecoration: "none" }}>
              {" "}
              ETU LOGO
            </Link>
          </div>

          <div class="navbar-links">
            <ul>
              <li>
                {" "}
                <Link
                  to="/Home"
                  style={{
                    marginLeft: "2%",
                    fontSize: 20,
                    paddingTop: ".75%",
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <div className="loginnavbar"><Link to="/Home"style={{textDecoration:"none"}}><p style={{color:"Black",fontSize:"2em",textAlign:"center"}}>ETU LOGO</p></Link>
      <Link to="/Home" style={{marginLeft:"2%",marginTop:"-0.5%",fontSize:"1.5em",paddingTop:".75%",color:"Black",textDecoration:"none"}}>Home</Link>
      </div>  */}
        <div className="log">
          <h3
            style={{ marginTop: "1%", marginBottom: "8%", marginLeft: "33%" }}
          >
            Welcome!
          </h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email" style={{ marginBottom: "5%" }}>
              <h4>Email</h4>
            </label>
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={this.handleChange}
            />
            <label htmlFor="email" style={{ marginBottom: "5%" }}>
              <h4>Password</h4>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={this.handleChange}
            />
            <center>
              <button type="submit" className="buttonlogin">
                Login
              </button>
            </center>
            <br></br>
            <center>
              {" "}
              <Link to="/" className="FormField__Link">
                Create an account
              </Link>
              <Link
                to="/Forgotpassword"
                className="FormField__Link"
                style={{ marginLeft: "8%" }}
              >
                Forgot Password?
              </Link>
            </center>
          </form>
        </div>
        <div className="signfooter" style={{ marginBottom: 10 }}>
          <footer>
            Powered By{" "}
            <a href="http://www.edunomics.in" target="_blank">
              {" "}
              <strong>Edunomics</strong>
            </a>
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
}

export default SignInForm;
