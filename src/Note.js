import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import ReactDraggable from 'react-draggable' //{DraggableCore}
import FontPicker from "font-picker-react"//
import ColorPicker from 'react-color-picker'//
import { SketchPicker } from 'react-color'//
import { SwatchesPicker } from 'react-color'
import './index.css'//
import './App.css'//

class Note extends Component {  
    constructor(props) {
      super(props);
      

      this.state = {     
        editing: false,
        style: {          
          right: this.randomBetween(0, window.innerWidth - 150, 'px'),
          top: this.randomBetween(0, window.innerHeight -150, 'px')
        }
      }// close this.state
     
    } //close constructor()
   
  
    componentDidUpdate() {
        if (this.state.editing) {
            this.refs.newText.focus()
            this.refs.newText.select()
            
        }
    }//,
    
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.children !== nextProps.children || this.state !== nextState
    }//,
    randomBetween(x, y, s) {
        return (x + Math.ceil(Math.random() * (y-x))) + s
    }//,


    edit = () => {
        
        this.setState({editing: true})
    }
    

    //  save() {
    save = () => {
        this.props.onChange(this.refs.newText.value, this.props.id)
        this.setState({editing: false})
    }//,

    remove = () => {
        this.props.onRemove(this.props.id)
    }//,
    remove1 = () => {
        this.props.onRemove1(this.props.id)
    }
    remove2 = () => {
        this.props.onRemove2(this.props.id)
    }

    renderForm() {
        
        
        return (
            
            <div className="note"
                 style={this.style}>
          
              <textarea  className="apply-font underline italic bold " ref="newText"  
                        
                        defaultValue={this.props.children}  >
                                       
              </textarea>
             
              <button onClick={this.save}>SAVE</button>
              <button onClick={this.edit}>Edit</button>
              
            </div>
        )
    }//,

    renderDisplay() {
        return (
            <div className="note" 
                 style={this.style}
                 >
      
                <p>{this.props.children}</p>
               
                
                
                <span>
                  <button onClick={this.edit}>Write</button>
                  <button onClick={this.remove}>X</button>
                
                </span>
            </div>
            
            
            )
    }//,
    render() {
      return (
          <Fragment > 
          
          
               {(this.state.editing) ? this.renderForm()
                                  : this.renderDisplay()}
                                  {/* <ReactDraggable>
                                      {this.renderDisplay()}
                
               </ReactDraggable> */}
               </Fragment>
               
        );

    }
}
//)

export default Note
