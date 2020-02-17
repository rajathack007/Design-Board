import React, { Component } from 'react';
import logo from './logo.svg';
// import './index.css'//

import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './Login/pages/SignUpForm';
import SignInForm from './Login/pages/SignInForm';
import Board from './Board'
import UserMap from './Map/UserMap'
import MapType from './MapType/MapType'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import Header from './Header/Header'



class App extends Component {
  render() {
    return (
      
        <Router>
        <div className="App">
         
         <Route path="/Home" component={Home}>
              </Route> 
              <Route path="/sign-in" component={SignInForm}>
              </Route> 

              <Route exact path="/" component={SignUpForm}>
              </Route>
             
              <Route path="/UserMap" component={UserMap}>
              </Route>
              <Route path="/MapType" component={MapType}>
              </Route>
              <Route path="/Board" component={Board}>
              </Route>
              
            
          </div>
          
       </Router>

       
     
    );
  }
}

export default App;
