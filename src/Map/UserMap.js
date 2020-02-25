import React, { Component } from "react";
import "./UserMap.css";
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';



class UserMap extends Component {
  state = {
    open: false,
  ProjectName:"",
  };
  handleChange=event=>{
    this.setState({[event.target.name]:event.target.value},()=>{
      console.log(this.state.ProjectName)
    })
    
  }
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
  render(){
    const { open } = this.state;
    
    const {data2} = this.props.location;
    const {data4} = this.props.location;
    return(
      <div className="body" style={{width:"100%"}} >
       <div className="bodynavbar" style={{overflow:"hidden"}}>       
       <Link to="/Home"style={{textDecoration:"none"}}><p style={{color:"white",fontSize:"2em",textAlign:"center"}}>ETU LOGO</p></Link>
        
        <Link to="/Help" style={{marginLeft:"65%",fontSize:"1.5em",paddingTop:"0.65%",color:"white",textDecoration:"none"}}>Help</Link> 
  
       <a class="submenu" style={{marginLeft:"2%",marginTop:"0.65%"}}>
    
    <a  class="dropbtn" style={{color:"white",fontSize:"1.5em",textDecoration:"none"}} >Profile </a>
    <div class="dropdown-content">
    <Link to={{pathname:"/Profile",data2:data2,data4:data4}}  style={{color:"black",textDecoration:"none"}}>My Profile</Link> 
    <Link to="/"  style={{color:"black",textDecoration:"none"}}>Logout</Link>
      
     </div></a>
     
      </div> 
      
      <div className="mapcontainer">
      
        <div className="containernavbar"><p>Map</p></div>
        
        <div className="map">

        
        <p className="textsize1"
              align="center">New Project</p>
              <div className="mapbutton" onClick={this.onOpenModal}>+</div>
         
         <Modal open={open} onClose={this.onCloseModal } center  >
           <div className="namemodal" >
             <div className="namemodalnavbar" ><div className="textsize2 " style={{paddingTop:5,marginLeft:"5%"}}>Project Name</div></div>
             <div className="inputcontainer" style={{textAlign:"center"}}>
             <input type="text" style={{fontSize:25}} name="ProjectName" placeholder="Project Name" onChange={e=>this.handleChange(e)} /><br></br>
             <Link to={{pathname:"/MapType",data:this.state.ProjectName}}> <button  style={{fontSize:25,background:"blueviolet",borderRadius:30,paddingLeft:30,paddingRight:30,textAlign:"center",marginTop:"-10%"}}  >Submit</button></Link> 
              </div>
              </div>
        </Modal>
       
          </div>
      </div>
      <div className="projectfooter" style={{marginBottom:10}}>
      <footer>
                    Powered By <a href="http://www.edunomics.in" target="_blank"> <strong>Edunomics</strong></a>
                </footer>
      </div>
     </div>
     
    );
  }
}
export default UserMap;
