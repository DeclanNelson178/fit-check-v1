import React, { Component } from "react";
import "../GetAdvice/GetAdvice.css";

/**
 * Get Advice component where users can upload an image for analysis.
 * Users can tag their photos with tags and descriptions to aid future sorting.
 *
 * @version 1.0.1
 * @author [Abhinav Joshi] (https://github.com/abhijoshi2000)
 * @author [Emily Costello] (https://github.com/ecostello9)
 */
class GetAdvice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: this.props.location.state.jwt,
    };
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  // TODO: Add functionality of sending an image to the backend
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
