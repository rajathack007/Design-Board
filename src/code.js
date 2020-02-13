onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
    
  };
  onDrop(pictureFiles, pictureDataURLs) {
		this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
        });
  }
  onChange = (images) =>{
 
    console.log(images)
     
    }
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
    
    handleChange=event=>{
      this.setState({[event.target.name]:event.target.value},()=>{
        console.log(this.state.ProjectName)
      })
      
    }
    change = e =>{
      this.setState({
      [e.target.name]: e.target.value});
    };
  

  addLaneLayer = () => {
    let wrapperStyle = {};
    if (this.state.showBound) {
      wrapperStyle = {
        height: "700px",
        width: "700px",
        background: "rgba(0, 0, 0, 0.2)",
        border: "2px solid #fff",
        overflow: "auto",
        
        padding: "10px"
      };
    }
    const Layerlane = () => {
      return (
        <div>
          <div className="container1">
            <div className="layer">
              <p>Layer Lane</p>
            </div>
            <div style={{display:"flex"}}>
            <div className="sidebar" ><p style={{textAlign:"center",marginTop:"70%"}}> NEW LANE</p></div>
              {/*<button className="button1" onClick={() => this.add("Note")}>
                +
              </button>

      {this.state.notes.map(this.eachNote)}*/}
              <Stickies
                notes={this.state.notes}
                tape={this.state.showTape}
                style={{ float: "left"}}
                colors={
                  this.state.showCustomColors ? this.state.colors : undefined
                }
                title={this.state.showTitle}
                footer={this.state.showFooter}
                onChange={this.onChange}
                wrapperStyle={wrapperStyle}
              />
              
            </div>
          </div>
        </div>
      );
    };
    this.setState({
      layer: [...this.state.layer, <Layerlane />]
    });
  };

  addCardLayer = () => {
    let wrapperStyle = {};
    if (this.state.showBound) {
      wrapperStyle = {
        height: "700px",
        width: "700px",
        background: "rgba(0, 0, 0, 0.2)",
        border: "2px solid #fff",
        overflow: "auto",
        
      
        padding: "10px"
      };
    }
    const Cardlane = () => {
      return (
        
        <div>
          
          <div className="container2">
         
            <div className="layer1">
              <p>Card Lane</p>
            </div>
            <div style={{display:"flex"}}>
            <div className="sidebar" ><p style={{textAlign:"center",marginTop:"70%"}}> NEW LANE</p></div>
               <Stickies
                notes={this.state.notes}
                tape={this.state.showTape}
                style={{ float: "left" }}
                colors={
                  this.state.showCustomColors ? this.state.colors : undefined
                }
                title={this.state.showTitle}
                footer={this.state.showFooter}
                onChange={this.onChange}
                wrapperStyle={wrapperStyle}
                
              /> 
           
            </div>
            
          </div>
        </div>
      );
    };
    this.setState({
      layer1: [...this.state.layer1, <Cardlane />]
    });
  };
  addBubbleLayer = () => {
    let wrapperStyle = {};
    if (this.state.showBound) {
      wrapperStyle = {
        height: "700px",
        width: "700px",
        background: "rgba(0, 0, 0, 0.2)",
        border: "2px solid #fff",
        overflow: "auto",
        padding: "10px"
      };
    }
    const Bubblelane = () => {
      return (
        <div className="Bubblelane">
          <div className="container3">
            <div className="layer2">
              <p>Bubble Lane</p>
            </div>
            <div style={{display:"flex"}}>
            <div className="sidebar" ><p style={{textAlign:"center",marginTop:"70%"}}> NEW LANE</p></div>
              <Bubble
                notes={this.state.notes}
                tape={this.state.showTape}
                style={{ float: "left" }}
                colors={
                  this.state.showCustomColors ? this.state.colors : undefined
                }
                title={this.state.showTitle}
                footer={this.state.showFooter}
                onChange={this.onChange}
                wrapperStyle={wrapperStyle}
              />
            </div>
          </div>
        </div>
      );
    };
    this.setState({
      layer2: [...this.state.layer2, <Bubblelane />]
    });
  };
  
  addLineLayer = () => {
    let wrapperStyle = {};
    if (this.state.showBound) {
      wrapperStyle = {
        height: "700px",
        width: "700px",
        background: "rgba(0, 0, 0, 0.2)",
        border: "2px solid #fff",
        overflow: "auto",
        padding: "10px"
      };
    }
    const Linelane = () => {
      return (
        <div className="linelane">
          <div className="container3">
            <div className="layer3">
              <p>Line Lane</p>
          
            </div>
            <div style={{display:"flex"}}>
            <div className="sidebar" ><p style={{textAlign:"center",marginTop:"70%"}}> NEW LANE</p></div>
            <button className="button1" onClick={this.addCircle}> +
              
            </button>

            {this.state.Circle}
            <div style={{marginTop:40}}>
            <div className="A">Element A</div>
            <div className="B">Element B</div>
            <LineTo from="A" to="B" borderStyle="solid" />
        </div>
           </div>
          </div>
        </div>
      );
    };
    this.setState({
      layer3: [...this.state.layer3, <Linelane />]
    });
  };
  addImageLayer = () => {
    let wrapperStyle = {};
    if (this.state.showBound) {
      wrapperStyle = {
        height: "700px",
        width: "700px",
        background: "rgba(0, 0, 0, 0.2)",
        border: "2px solid #fff",
        overflow: "auto",
        padding: "10px"
      };
    }
    const Imagelane = () => {
      console.log()
      return (
        <div className="Imagelane">
          <div className="container3">
            <div className="layer4">
              <p>Image Lane</p>
          </div>
          <div style={{display:"flex"}}>
          <div className="sidebar" ><p style={{textAlign:"center",marginTop:"70%"}}> NEW LANE</p></div>
          {/* <div className="image"><ImageUploader  /></div>   */}
          <UploadImages  multiple  onChange={this.onChange}  />
  
        
            </div>
        </div>
        </div>
      );
    };
    this.setState({
      layer4: [...this.state.layer4, <Imagelane />]
    });
  };
  addFileLayer = () => {
    let wrapperStyle = {};
    if (this.state.showBound) {
      wrapperStyle = {
        height: "700px",
        width: "700px",
        background: "rgba(0, 0, 0, 0.2)",
        border: "2px solid #fff",
        overflow: "auto",
        padding: "10px"
      };
    }
    const Filelane = () => {
      return (
        <div className="Filelane">
          <div className="container3">
            <div className="layer5">
              <p>File Lane</p>
          </div>
          <div style={{display:"flex"}}>
          <div className="sidebar" ><p style={{textAlign:"center",marginTop:"70%"}}> NEW LANE</p></div>
        <div className="file"><FilePond/></div>  
       </div>
        
        </div>
        
        </div>
      );
    };
    this.setState({
      layer5: [...this.state.layer5, <Filelane />]
    });
  };
  addPhaseLayer = () => {

    

    const Phaselane = () => {
      return (
        <div>
          <div className="container2">
            <div className="layer6">
              <p>Phase Lane</p>
            </div>
            <div style={{display:"flex"}}>
              <div className="sidebar" onClick={this.onOpenModal}><button className="button1" onClick={this.addPhase}> +</button>
              
             <p style={{textAlign:"center",marginTop:"70%"}}> NEW LANE</p> 
              
              </div>
              
            
            <div className="phase" onClick={this.onOpenModal}>{this.state.text}</div>
              {this.state.Phase}
            </div>
          </div>
        </div>
      );
    };
    this.setState({
      layer6: [...this.state.layer6, <Phaselane />]
    });
  };
  addTextLayer = () => {
    
    let wrapperStyle = {};
    if (this.state.showBound) {
      wrapperStyle = {
        height: "700px",
        width: "700px",
        background: "rgba(0, 0, 0, 0.2)",
        border: "2px solid #fff",
        overflow: "auto",
        padding: "10px"
      };
    }
    
    const Textlane = () => {
      const { open } = this.state;
      
      return (
        <div className="linelane">
          <div className="container3">
            <div className="layer7">
              <p>Text Lane</p>
              
            </div>
            <div style={{display:" flex"}} >
          <div className="sidebar"  >
          <button className="button1" onClick={this.addSquare}> +</button>
            <p style={{textAlign:"center",marginTop:"70%"}} onClick={this.onOpenModal}> NEW LANE</p></div>
            {this.state.Square}
          {this.state.Rectangle}
          {this.state.Bubble}
        
          {this.state.Phase} 
          
          <button className="button1" onClick={this.addSquare}> +</button>
            <div className="square1" onClick={this.onOpenModal}>{this.state.text} </div>
          </div>
  
</div>
         
          
        </div>
        
      );
    };
    this.setState({
      layer7: [...this.state.layer7, <Textlane />]
    });
  
  };
  addCircle = () =>{
    const Circlelane =()=>{
      return(
      <div className="circle" >      
             </div>
    
      );
    };
    this.setState({
      Circle:[...this.state.Circle,<Circlelane/>],
     
    
     
    });
  };
  addCircle1 = () =>{
    const Circlelane1 =()=>{
      return(
      <div className="circle1" > 
       {/* <textarea style={{width:100,height:70, marginTop:30, marginLeft:20}}>
        </textarea>  */}{this.state.text}
        <button style={{marginLeft:40,marginTop:80}} onClick={this.onOpenModal}>Write</button>     
             
             </div>
    
      );
    };
    this.setState({
      Circle1:[...this.state.Circle1,<Circlelane1/>],
     
    
     
    });
  };
  addSquare = () =>{
    const Squarelane =()=>{
      const { data } = this.props.location;
      return(
      <div className="square" >  
      {/* <textarea style={{width:150,height:100}}>
        </textarea>  */}{data}
        {this.state.text}
        <button style={{marginLeft:40,marginTop:80}} onClick={this.onOpenModal}>Write</button>     
             </div>
    
      );
    };
    this.setState({
      Square:[...this.state.Square,<Squarelane/>],
     
    
     
    });
  };
  addRectangle = () =>{
    const Rectanglelane =()=>{
      
      return(
      <div className="rectangle" >  
      {/* <textarea style={{width:250,height:100}}>
        </textarea>  */}
       {this.state.text}
        <button style={{marginLeft:40,marginTop:80}} onClick={this.onOpenModal}>Write</button>   
             </div>
    
      );
    };
    this.setState({
      Rectangle:[...this.state.Rectangle,<Rectanglelane/>],
     
    
     
    });
  };
  addLine = () =>{
    const Linelane =()=>{
      return(
      <div className="line" >      
             </div>
    
      );
    };
    this.setState({
      Line:[...this.state.Line,<Linelane/>],
     
    
     
    });
  };
  addBubble = () =>{
    const Bubblelane =()=>{
      return(
      <div className="bubble" > 
      {/* <textarea style={{width:150,height:90,marginTop:10,marginLeft:10}}>
        </textarea>  */}{this.state.text}
        <button style={{marginLeft:40,marginTop:80}} onClick={this.onOpenModal}>Write</button>      
             </div>
    
      );
    };
    this.setState({
      Bubble:[...this.state.Bubble,<Bubblelane/>],
     
    
     
    });
  };
  addPhase = () =>{
    const Phaselane =()=>{
      return(
      <div className="phase" >  {this.state.text}
      {/* <textarea style={{width:150,height:90,marginTop:20,marginLeft:10}}>
        </textarea>  */}
        <button style={{marginLeft:40,marginTop:80}} onClick={this.onOpenModal}>Write</button>     
             </div>
    
      );
    };
    this.setState({
      Phase:[...this.state.Phase,<Phaselane/>],
     
    
     
    });
  };
  addItalic = () =>{
    const Italicfont =()=>{
      return(
      <div className="Italic">
            
      </div>
      );
    };
    this.setState({
      Italic:[...this.state.Italic,<Italicfont />],
      
    })
  }
  addUnderline = () =>{
    const Underlinefont =()=>{
      return(
      <div className="Underline">
            
      </div>
      );
    };
    this.setState({
      Underline:[...this.state.Underline,<Underlinefont />],
      
    })
  }
  addBold = () =>{
    const Boldfont =()=>{
      return(
      <div className="Bold">
            
      </div>
      )
    }
    this.setState({
      Bold:[...this.state.Bold,<Boldfont />],
      
    })
  }
 
  render() {
    const { open } = this.state;
    const { data } = this.props.location;
    
    
    const { data1} = this.props.location;
    function handleSelection(value, event) {  }
   
    

    let wrapperStyle = {};
    if (this.state.showBound) {
      wrapperStyle = {
        height: "700px",
        width: "700px",
        background: "rgba(0, 0, 0, 0.2)",
        border: "2px solid #fff",
        overflow: "auto",
        padding: "10px"
      };
    }
    return (
      
      <div className="board">
        
      
        <div className="navbar" style={{color:"white"}}>
          ETU LOGO
         
          
          
          
        </div>
       
        <div className="projectnamenavbar">{data}
        
        </div>
       
        <div  >
        
              
              
           
      <UncontrolledButtonDropdown style={{marginRight:10}}>
      <DropdownToggle caret>
       Add New Lane
      </DropdownToggle>
      <DropdownMenu>
      <div >
          
         
          <li > <a onClick={this.addCardLayer} >
           &#9645; Add Card Lane</a>
           </li>
           <li> <a onClick={this.addBubbleLayer}>
           &#128172; Add Bubble Lane</a>
           </li>
           <li><a  onClick={this.addPhaseLayer}>
           &#8680; Add Phase Lane</a>
           </li>
           <li><a onClick={this.addLineLayer}>
           📈 Add Line Lane</a>
           </li>
           <li><a onClick={this.addImageLayer}>
           &#128190; Add Image Lane</a>
           </li>
           <li><a onClick={this.addFileLayer}>
           &#128194; Add File Lane</a>
           </li>
           <li ><a onClick={this.addTextLayer}>
           &#128221; Add Text Lane</a>
           </li>
 
           
           
         </div>
        
      </DropdownMenu>
    </UncontrolledButtonDropdown >



    <UncontrolledButtonDropdown style={{marginRight:10}}>
      <DropdownToggle caret>
       Add Card Shape
      </DropdownToggle>
      <DropdownMenu>
      <div >
          
         
         <li> <a onClick={this.addSquare} >
           &#9645;   Square Shape
           </a></li>
           <li> <a  onClick={this.addRectangle}>
           &#x25AD;  Rectangle Shape
           </a></li>
           <li> <a  onClick={this.addBubble}>
           &#128172;  Bubble Shape
           </a></li>
           <li> <a onClick={this.addLine}>
           📈   line Shape
           </a></li>
           <li> <a onClick={this.addCircle1}>
           &#9675;  Circle Shape
           </a></li>
           
           <li> <a onClick={this.addPhase}>
            =>  Phase Shape
           </a></li>
 
           
           
         </div>
        
      </DropdownMenu>
    </UncontrolledButtonDropdown>
     {/* <button onClick={this.onOpenModal} >Write</button>  */}
        <Modal open={open} onClose={this.onCloseModal} center>
           <div className="textlane">
             <div className="textlanenavbar"><div className="textsize2 " style={{padding:10}}>Text Lane</div></div>
             <div className="navbar">

             <FontPicker
            apiKey="AIzaSyBjbypy3oo5oo_xPba71Dnb6836mBwoWVQ"
            activeFontFamily={this.state.activeFontFamily}
            onChange={nextFont =>
              this.setState({
                activeFontFamily: nextFont.family
              })
            }
          />
           <div><button className="Italic" onClick={this.addItalic}>I</button>
          {this.state.Italic}
                </div>
                <div>
                  <button className="Underline" onClick={this.addUnderline}>U</button>
                 
                {this.state.Underline}
                </div>
                <div><button className="Bold" onClick={this.addBold}>B</button>
                {this.state.Bold}</div> 
                
                <UncontrolledButtonDropdown style={{marginRight:10}} >
      <DropdownToggle caret>
       Add Card Shape
      </DropdownToggle>
      <DropdownMenu>
      <div >
          
         
         <li> <a onClick={this.addSquare} >
           &#9645;   Square Shape
           </a></li>
           <li> <a  onClick={this.addRectangle}>
           &#x25AD;  Rectangle Shape
           </a></li>
           <li> <a  onClick={this.addBubble}>
           &#128172;  Bubble Shape
           </a></li>
           <li> <a onClick={this.addLine}>
           📈   line Shape
           </a></li>
           <li> <a onClick={this.addCircle1}>
           &#9675;  Circle Shape
           </a></li>
           
           <li> <a onClick={this.addPhase}>
            =>  Phase Shape
           </a></li>
           
           
           
         </div>
        
      </DropdownMenu>
    </UncontrolledButtonDropdown>
    
                <FontSizeChanger
          targets={['#target .content']}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
            
          }}
          options={{
            stepSize: 2,
            range: 3
          }}
          customButtons={{
            up: <span style={{'fontSize': '36px'}}>A</span>,
            down: <span style={{'fontSize': '20px'}}>A</span>,
            style: {
              backgroundColor: 'red',
              color: 'white',
              WebkitBoxSizing: 'border-box',
              WebkitBorderRadius: '5px',
              width: '60px'
            },
            buttonsMargin: 10
            
          }}         
             
            
               
        />
              </div>
             <textarea  className="apply-font" className="Underline" className="Bold"  className="Italic " style={{width:500,height:350,marginTop:10}} name="text" onChange={e=>this.change(e)}></textarea><br></br>
              <button type="button" style={{fontSize:20,marginLeft:80}}  onClick= {this.onCloseModal} >Save</button>
              
              </div>
              
        </Modal>
      </div>
      
      {data1}
      {this.state.layer1}

          {this.state.layer2}
          {this.state.layer3}
          {this.state.layer4}
          {this.state.layer5}
          {this.state.layer6}
          {this.state.layer7}
           {/* {this.state.Square}
          {this.state.Rectangle}
          {this.state.Bubble}
          {this.state.Line}
          {this.state.Circle1}
          {this.state.Phase}   
           */}
         
          
        <div>
       
          {/* <div className="addlayer">
            <button className="addlayer" onClick={this.addLaneLayer}>
              Add Lane Layer
            </button>
              </div>*/}
            
          {/* <div className="addlayer">
          
         
            <button className="addlayer" onClick={this.addCardLayer}>
              Add Card Layer
            </button>
            <button className="addlayer" onClick={this.addBubbleLayer}>
              Add Bubble Layer
            </button>
            <button className="addlayer" onClick={this.addLineLayer}>
              Add Line Layer
            </button>
            <button className="addlayer" onClick={this.addImageLayer}>
              Add Image Layer
            </button>
            <button className="addlayer" onClick={this.addFileLayer}>
              Add File Layer
            </button>

            {this.state.layer1}

            {this.state.layer2}
            {this.state.layer3}
            {this.state.layer4}
            {this.state.layer5}
            
          </div> */}
         
      
          {/*<div className="addlayer">
      <button className="addlayer" onClick={this.addBubbleLayer}>Add Bubble Layer</button>
         {this.state.layer2}
      </div>     */}
        </div>

        {/*  start */}
        <div className="container">
          {/*<div className="Layerlane">
            <div className="container1">
              <div className="layer">
                <p>Layer Lane</p>
              </div>
              {/*<button className="button1" onClick={() => this.add('New Note')}>+</button>
        {this.state.notes.map(this.eachNote)}
              <Stickies
                notes={this.state.notes}
                tape={this.state.showTape}
                style={{ float: "left" }}
                colors={
                  this.state.showCustomColors ? this.state.colors : undefined
                }
                title={this.state.showTitle}
                footer={this.state.showFooter}
                onChange={this.onChange}
                wrapperStyle={wrapperStyle}
              />
            </div>
              </div>*/}
          {this.state.layer}
          {/*
       <div className="container2">
       <div className="layer1">
           <p>Card Lane</p> 
           </div>
           <button className="button1" onClick={() => this.add1('New Note')}>+</button>
           {this.state.notes1.map(this.eachNote)}         
        </div> 
         <div className="container3">
        <div className="layer2">
        <p>Bubble Lane</p>
        </div>
          <button className="button1" onClick={() => this.add2('New Note')}>+</button>
        {this.state.notes2.map(this.eachNote)}
        
            
        </div>
      
        </div>    
        {/* end */}
          {/* {this.state.notes.map(this.eachNote)} */}
          {/* <button className="button1" onClick={() => this.add('New Note')}>+</button>     */}
        </div>
        <div className="footer">
        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
        <TabList>
          <Tab> <Link to="/Board"> {data}</Link></Tab>
          <Tab>  New </Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
        
        
         
        
        </div>
      </div>
    );
          }