import React, { Component } from "react";
import ReactDOM from "react-dom";

import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
const mdParser = new MarkdownIt
class Markdown extends React.Component {
    
    render(){
        function handleEditorChange({html, text}) {    
            console.log('handleEditorChange', html, text)
          }
        return(
          <div style={{height: 300}}>
            <MdEditor
      value=""
      renderHTML={(text) => mdParser.render(text)}
      onChange={handleEditorChange}
      />
</div>
        )
    }
}
export default Markdown;