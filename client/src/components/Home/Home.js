import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleSearch() {
  }

  render() {
    return (
      <div className="screen">
        <div id="e33_3">
          <div id="e47_6"></div>
          <div id="e47_20"></div>
            <span id="e47_21">GET<br></br>INSPIRED</span>
            <span id="e47_22">GET<br></br>ADVICE</span>
          <div id="e46_7">
            <div id="e44_7"></div>
            <div id="e44_3"></div>
            <div id="e44_4"></div>
              <span id="e46_6">“FIT CHECK”</span>
            <div id="e48_1"></div>
            <div id="e46_9">
              <input
                id="e46_9_input"
                placeholder=" what u tryna wear?"
                //value={}
                onChange={this.handleSearch}
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
