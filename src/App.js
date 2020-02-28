import React, { Component } from "react";
import logo from "./logo.svg";
// import './index.css'//

import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import SignUpForm from "./Login/pages/SignUpForm";
import SignInForm from "./Login/pages/SignInForm";
import SignUp from "./Login/pages/SignUpForm";

import Board from "./Board";
import UserMap from "./Map/UserMap";
import MapType from "./MapType/MapType";
import Home from "./Home/Home";
import Pricing from "./Home/Pricing";
import Terms from "./Home/Terms";
import PrivacyPolicy from "./Home/PrivacyPolicy";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Forgotpassword from "./Login/pages/Forgotpassword";
import Help from "./Help/Help";
import Profile from "./Profile/Profile";
import Businesscanvas from "./Business/Businesscanvas";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "signin",
      isSignedIn: false,
      logginStatus: true
    };
  }
  onRouteChange = route => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, route } = this.state;
    //console.log(this.props.match);

    //const { pat } = this.props.match;

    return (
      <Router>
        <div className="App">
          <div>
            {/* <Header /> */}
            <div isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />

            <div>
              <Route path="/Home" component={Home}></Route>
              <Route path="/Pricing" component={Pricing}></Route>
              <Route path="/Terms" component={Terms}></Route>
              <Route path="/PrivacyPolicy" component={PrivacyPolicy}></Route>
              <Route path="/Help" component={Help}></Route>
              <Route path="/sign-in" component={SignInForm}></Route>
              <Route path="/Forgotpassword" component={Forgotpassword}></Route>

              <Route exact path="/" component={SignUpForm}></Route>
              {localStorage.getItem("token") ? (
                <div>
                  <Route path="/Profile" component={Profile}></Route>
                  <Route
                    path="/Businesscanvas"
                    component={Businesscanvas}
                  ></Route>

                  <Route path="/UserMap" component={UserMap}></Route>
                  <Route path="/MapType:id" component={MapType}></Route>
                  <Route path={`/Board:id/:subid`} component={Board}></Route>
                </div>
              ) : route === "signin" ? (
                <p />
              ) : (
                window.location.reload()
              ) // <Signin onRouteChange={this.onRouteChange}/>
              }
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
