import React, { Component } from "react";
import axios from "axios";
import "../GetConnected/GetConnected.css";

/**
 * Get Connected component where users can see their outfits,
 * and users can also add friends and see their outfits.
 *
 * @version 1.0.1
 * @author [Abhinav Joshi] (https://github.com/abhijoshi2000)
 * @author [Emily Costello] (https://github.com/ecostello9)
 */
class GetConnected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: this.props.location.state.jwt,
      friendEmail: "",
    };
    this.handleFriendEmailChange = this.handleFriendEmailChange.bind(this);
  }

  async handleFriendEmailChange(e) {
    const oldJwt = this.state.jwt;
    await this.setState({
      jwt: oldJwt,
      friendEmail: e.target.value,
    });
  }

  render() {
    return (
      <div id="e204_7">
        <span id="e205_8">// GET CONNECTED</span>
        <span id="e205_22">// ADD FRIENDS</span>
        <span id="e205_60">// COMMUNITY</span>
        <div id="e205_12"></div>
        <div id="e205_18"></div>
        <span id="e205_61">// YOUR FITS</span>
        <div id="e205_62"></div>
        <div id="e205_50">
          <input
            id="tags_input"
            value={this.state.friendEmail}
            onChange={this.handleFriendEmailChange}
          ></input>
        </div>
        <div id="e205_64"></div>
        <div id="e136_2000">
          <div id="e136_2001"></div>
          <div id="e136_2002"></div>
          <span id="e136_2003">// FIT CHECK</span>
        </div>
        <div id="e134_0"></div>
        <div id="e135_21"></div>
        <div id="e158_1"></div>
        <div id="e159_1"></div>
      </div>
    );
  }
}

export default GetConnected;
