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
    return(
      <div className="body" style={{width:"100%"}} >
       <div className="bodynavbar"> 
      <p style={{color:"white"}}>ETU LOGO</p>
     <p style={{color:"white",marginLeft:"60%"}}>Help</p>
     <p style={{color:"white",marginLeft:"2%"}}>Profile</p>
      </div> 
      
      <div className="mapcontainer">
      
        <div className="containernavbar"><p>Map</p></div>
        
        <div className="map">

        
        <p className="textsize1"
              align="center">New Project</p>
              <div className="mapbutton" onClick={this.onOpenModal}>+</div>
         
         <Modal open={open} onClose={this.onCloseModal} center>
           <div className="namemodal" >
             <div className="namemodalnavbar" ><div className="textsize2 " style={{paddingTop:5}}>Project Name</div></div>
             <div className="inputcontainer" style={{textAlign:"center"}}>
             <input type="text" style={{fontSize:25}} name="ProjectName" placeholder="Project Name" onChange={e=>this.handleChange(e)} /><br></br><br></br>
             <Link to={{pathname:"/MapType",data:this.state.ProjectName}}> <button type="button" style={{fontSize:25,background:"blueviolet",borderRadius:30,paddingLeft:30,paddingRight:30,textAlign:"center"}}  >Submit</button></Link> 
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
