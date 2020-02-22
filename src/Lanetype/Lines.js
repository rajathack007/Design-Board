import React, { Component, Fragment } from "react";
import "./Lines.css";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      nodes: []
    };
  }

  componentDidMount = () => {
    const graph = document.querySelector(".graph");
    graph.addEventListener("click", e => {
      const nodes = this.state.nodes;
      const [X, Y] = [e.clientX - 40, e.clientY - 40];

      // Set the last node's next to current coordinates to a draw line.
      if (nodes.length > 0) nodes[nodes.length - 1].next = { x: X, y: Y };

      nodes.push({ x: X, y: Y });

      this.setState({ nodes });
      this.addEventListenersToNodes();
    });
  };

  dragStart = e => {
    const idx = e.target.getAttribute("data-idx");
    const currentNodes = this.state.nodes;

    // Delete the previous node's next property to remove the line connecting to current node.
    if (idx > 0) delete currentNodes[idx - 1].next;

    // Delete current node's [next] to remove the line connecting next node.
    if (currentNodes[idx].next) delete currentNodes[idx].next;

    this.setState({ nodes: currentNodes });
  };

  dragEnd = e => {
    const currentNodes = this.state.nodes;
    const idx = parseInt(e.target.getAttribute("data-idx"));
    let [X, Y] = [e.clientX - 40, e.clientY - 40];

    if (X < 0) X = 0;
    if (Y < 0) Y = 0;

    // Display node at {top: Y, left: X}
    e.target.setAttribute("style", `display:flex; top:${Y}px; left: ${X}px`);

    // Set current node's Coodinates
    currentNodes[idx] = { x: X, y: Y };

    // Set the previous node's [next] to current coordinates
    if (currentNodes[idx - 1]) currentNodes[idx - 1].next = { x: X, y: Y };

    // Set the current node's [next] to next node's coordinates;
    if (currentNodes[idx + 1]) {
      currentNodes[idx].next = {
        x: currentNodes[idx + 1].x,
        y: currentNodes[idx + 1].y
      };
    }

    this.setState({ nodes: currentNodes });
  };

  drag = e => e.target.setAttribute("style", `display:none`);

  addEventListenersToNodes = () => {
    const nodes = document.querySelectorAll(".node");
    for (let node of nodes) {
      node.addEventListener("dragstart", this.dragStart);
      node.addEventListener("dragend", this.dragEnd);
      node.addEventListener("dragover", e => e.preventDefault());
      node.addEventListener("drag", this.drag);
    }
  };

  render = () => {
    const { nodes } = this.state;
    console.log(nodes.length);
    return (
      <div className="graph">
        {/* {nodes.length < 1 && (
          <h4></h4>
        )} */}
        {nodes.map(({ x, y, next }, idx) => (
          <Fragment key={idx}>
            <div
              className="node"
              data-idx={idx}
              draggable="true"
              style={{ top: y, left: x }}
            />
            {next && (
              <svg width="100%" height="100%" style={{position:"absolute"}}>
                <line
                  x1={x + 25}
                  y1={y + 25}
                  x2={next.x + 25}
                  y2={next.y + 25}
                  stroke="black"
                />
              </svg>
            )}
          </Fragment>
        ))}
      </div>
    );
  };
}