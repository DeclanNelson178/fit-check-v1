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
      yourFits: [""],
      friendFits: [""],
    };
    this.handleFriendEmailChange = this.handleFriendEmailChange.bind(this);
    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.renderFriendFits = this.renderFriendFits.bind(this);
    this.renderYourFits = this.renderYourFits.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
  }

  async handleLoading() {
    console.log("loading");
    document.getElementById("loading-screen").style.opacity = 1;

    setTimeout(function () {
      document.getElementById("loading-screen").style.opacity = 0;
    }, 2000);
  }

  componentDidMount() {
    // await this.handleLoading();
    this.renderFriendFits();
    this.renderYourFits();
  }

  renderFriendFits() {
    const res = axios.get("http://localhost:5000/social/display_friends", {
      headers: {
        Authorization: this.state.jwt,
      },
    });
    var imgsArray = [];
    for (var i = 0; i < res.data.length; i++) {
      var len = res.data[i].img.filePath.length;
      imgsArray.push(res.data[i].img.filePath.substring(9, len));
    }
    const oldJwt = this.state.jwt;
    const oldYourFits = this.state.yourFits;
    this.setState({
      jwt: oldJwt,
      friendEmail: "",
      yourFits: oldYourFits,
      friendFits: imgsArray,
    });
  }

  renderYourFits() {
    const res = axios.get("http://localhost:5000/outfits", {
      headers: {
        Authorization: this.state.jwt,
      },
    });
    var imgsArray = [];
    for (var i = 0; i < res.data.length; i++) {
      var len = res.data[i].img.filePath.length;
      imgsArray.push(res.data[i].img.filePath.substring(9, len));
    }
    const oldJwt = this.state.jwt;
    const oldFriendFits = this.state.friendFits;
    this.setState({
      jwt: oldJwt,
      friendEmail: "",
      yourFits: imgsArray,
      friendFits: oldFriendFits,
    });
  }

  async handleFriendEmailChange(e) {
    const oldJwt = this.state.jwt;
    const oldFriendFits = this.state.friendFits;
    const oldYourFits = this.state.yourFits;
    await this.setState({
      jwt: oldJwt,
      friendEmail: e.target.value,
      friendFits: oldFriendFits,
      yourFits: oldYourFits,
    });
  }

  async handleAddFriend(e) {
    if (e.key !== "Enter") {
      console.log(this.state);
      return;
    } else {
      const res = await axios.put(
        "http://localhost:5000/social/follow",
        {
          friendEmail: this.state.friendEmail,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.state.jwt,
          },
        }
      );
    }
  }

  render() {
    const images = require.context("../../files/", true);
    const loadImage = (imageName) => images(`./${imageName}`).default;
    return (
      <div id="e204_7">
        <span id="e205_8">// GET CONNECTED</span>
        <span id="e205_22">// ADD FRIENDS</span>
        <span id="e205_60">// COMMUNITY</span>
        <div id="e205_12">
          <img src={loadImage(this.state.yourFits[0])} alt="text" />
        </div>
        <div id="e205_18"></div>
        <span id="e205_61">// YOUR FITS</span>
        <div id="e205_62"></div>
        <div id="e205_50">
          <input
            id="tags_input_gc"
            value={this.state.friendEmail}
            onChange={this.handleFriendEmailChange}
            onKeyDown={this.handleAddFriend}
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
