import React, { Component } from "react";
import "../GetAdvice/GetAdvice.css";

class GetAdvice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: this.props.location.state.jwt,
    };
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  async handleImageUpload() {
    console.log(this.state.jwt);
    console.log("handling image upload");
  }

  render() {
    return (
      <div>
        <div id="e63_2">
          <span id="e64_9">// GET ADVICE</span>
          <span id="e63_63">// TAGS</span>
          <span id="e63_64">// DESCRIPTION</span>
          <span id="e63_37">DRAFTS</span>
          <div id="e64_12"></div>
          <div id="e64_13"></div>
          <div id="e64_14"></div>
          <div id="e64_15"></div>
          <div id="e63_40"></div>
          <div id="e64_24"></div>
          <div id="e64_31"></div>
          <div id="e66_2"></div>
          <span id="e66_3">SUBMIT</span>
          <div id="e63_7">
            <div id="ei63_7_44_7"></div>
            <div id="ei63_7_44_3"></div>
            <div id="ei63_7_44_4"></div>
            <span id="ei63_7_46_6">“FIT CHECK”</span>
            <div id="ei63_7_46_9"></div>
            <div id="e48_1"></div>
          </div>
          <div id="e63_34">
            <button id="e63_36" onClick={this.handleImageUpload}></button>
          </div>
        </div>
      </div>
    );
  }
}

export default GetAdvice;
