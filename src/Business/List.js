import React, { Component } from "react";
import "./Box.css";
import { Link } from 'react-router-dom';
import {ReactMotion, spring} from 'react-motion';
const maxColumns = 4

class List extends React.Component {
  constructor() {
    super()
    this.state = {
      panels: [
        {
          size: 1,
          height: 2
        },
        {
          size: 1
        },
        {
          size: 1
        },
        {
          size: 1
        },
        {
          size: 1
        },
        {
          size: 1
        },
        {
          size: 1
        }
      ]
    }
  }
  
  renderPanels(){
    return this.state.panels.map((panel, iterator) => {
      return <Panel 
               size={panel.size} 
               order={iterator}
               removePanel={this.removePanel.bind(this)}
               addPanel={this.addPanel.bind(this)}
               makeBigger={this.makeBigger.bind(this)}
               makeSmaller={this.makeSmaller.bind(this)}
             />
    })
  }
  
  removePanel(panelId) {
    const currentPanels = this.state.panels
    delete currentPanels[panelId]
    let newPanels = currentPanels
    
    this.setState({
      panels: newPanels
    })
  }
  
  addPanel(panelPosition) {
    const currentPanels = this.state.panels
    const panelToCopy = currentPanels[panelPosition]
    currentPanels.splice(panelPosition, 0, panelToCopy)
    
    this.setState({
      panels: currentPanels
    })
  }
  
  makeBigger(panelPosition) {

    const currentPanels = this.state.panels
    let size = currentPanels[panelPosition].size 
    if (size < maxColumns) {
      currentPanels[panelPosition].size = currentPanels[panelPosition].size + 1  
    }
   
    console.log('size after ', currentPanels[panelPosition].size)
    this.setState({
      panels: currentPanels
    })
  }
  
  makeSmaller(panelPosition) {
    const currentPanels = this.state.panels
    let size = currentPanels[panelPosition].size 
    if (size > 1) {
      currentPanels[panelPosition].size = currentPanels[panelPosition].size - 1  
    }
    this.setState({
      panels: currentPanels
    })
  }
  
  render() {
    const style = {
      main: {
        width: 1600,
        border: '5px solid black',
        display: 'flex',
        //'justify-content': 'space-around',
        'flex-wrap': 'wrap'
      }
    }
    return (
      <div class="main" style={style.main}>
        {this.renderPanels()}
      </div>
      
    )  
  } 
  
}

class Panel extends React.Component {
  removePanel() {
    this.props.removePanel(this.props.order)
  }
  addPanel() {
    this.props.addPanel(this.props.order)
  }
  makeBigger() {
    this.props.makeBigger(this.props.order)
  }
  makeSmaller() {
    this.props.makeSmaller(this.props.order)
  }
  render() {
    const widthPercent = 100 / maxColumns
    let calculatedSize = `calc(${this.props.size * widthPercent}% - 40px)`
    console.log(calculatedSize)
    const style = {
      panel: {
        background: '#666',
        width: calculatedSize,
        height: 300,
        margin: 10,
        padding: 10,
        
      }
    }
    let order = this.props.order
    return (
      <div class="panel" style={style.panel}>
       
        <div>
         
        </div> 
      </div>
    )
  }
}
export default List;