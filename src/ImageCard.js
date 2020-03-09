import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import "./Imagecard.css"; //

const ImgUpload =({
   onChange,
   src
 })=>
   <label htmlFor="photo-upload" className="custom-file-upload fas">
     <div className="img-wrap img-upload" >
       <img for="photo-upload" src={src}/>
     </div>
     <input id="photo-upload" type="file" onChange={onChange}/> 
   </label>
 
 
 
   

 
 const Profile =({
   onSubmit,
   src,
  
 })=>
   
     <form onSubmit={onSubmit}>
       
       
         <div className="img-wrap" >
           <img for="photo-upload" src={src}/>
         </div>
      
      
       <button type="submit" className="edit">Edit Profile </button>
     </form>
   
      
       
 const Edit =({
   onSubmit,
   children,
 })=>
   <div >
     <form onSubmit={onSubmit}>
       
         {children}
      
     </form>
   </div>
 
 class ImageCard extends React.Component {
   state = {
     file: '',
     imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
    
     active: 'edit'
   }
 
   photoUpload = e =>{
     e.preventDefault();
     const reader = new FileReader();
     const file = e.target.files[0];
     reader.onloadend = () => {
       this.setState({
         file: file,
         imagePreviewUrl: reader.result
       });
     }
     reader.readAsDataURL(file);
   }
   editName = e =>{
     const name = e.target.value;
     this.setState({
       name,
     });
   }
   
   editStatus = e => {
     const status = e.target.value;
     this.setState({
       status,
     });
   }
   
   handleSubmit= e =>{
     e.preventDefault();
     let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
     this.setState({
       active: activeP,
     })
   }
   
   render() {
     const {imagePreviewUrl, 
            name, 
            status, 
            active} = this.state;
     return (
       <div>
         {(active === 'edit')?(
           <Edit onSubmit={this.handleSubmit}>
             <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
            
           </Edit>
         ):(
           <Profile 
             onSubmit={this.handleSubmit} 
             src={imagePreviewUrl} 
             name={name} 
             status={status}/>)}
         
       </div>
     )
   }
 }
 
export default ImageCard; 
