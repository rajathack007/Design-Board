import React, { Component } from "react";
import "./Box.css";
import { Link } from 'react-router-dom';
import {ReactMotion, spring} from 'react-motion';
import GridLayout from 'react-grid-layout';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';



class List extends React.Component {
    render() {
      // {lg: layout1, md: layout2, ...}
    
      return (
        <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
        <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>afhgffhgfty</div>
        <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 6, minW: 2, maxW: 4 }}><div className="businesscard"></div></div>
        <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div>
      </GridLayout>
      )
    }
  }
export default List;