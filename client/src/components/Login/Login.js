import React, { Component } from "react";
import mailIcon from "./images/mail_outline.svg";
import keyIcon from "./images/vpn_key.svg";
import "./Login.css";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleLogin() {
    axios
      .post("http://localhost:5000/auth/signin", {
        email: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        if (res.data.status == 200) {
          this.props.data(this.state);
        }
      });
  }

  async handleUsernameChange(e) {
    const oldPassword = this.state.password;
    await this.setState({ username: e.target.value, password: oldPassword });
  }

  async handlePasswordChange(e) {
    const oldUsername = this.state.username;
    await this.setState({
      username: oldUsername,
      password: e.target.value,
    });
  }

  render() {
    return (
      <div className="screen">
        <div id="e6_3">
          <span id="e15_31">Forgot Password?</span>
          <span id="e15_33">Remember Me</span>
          <div id="e15_26">
            <input
              id="e15_26_input"
              placeholder="example@example.com"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            ></input>
          </div>
          <div id="e24_9">
            <input
              type="password"
              id="e24_9_input"
              placeholder="*******************"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            ></input>
          </div>
          <span id="e15_17">Password</span>
          <span id="e15_30">Email</span>
          <div id="e15_16">
            <img alt="" src={mailIcon} />
          </div>
          <div id="e15_32"></div>
          <div id="e15_35">
            <button id="e15_35_button" onClick={this.handleLogin}>
              <span id="e15_36">LOGIN</span>
            </button>
          </div>
          <span id="e14_4">your pocket stylist</span>
          <span id="e9_0">“FIT CHECK”</span>
          <span id="e15_37">Don’t have an account? Sign up here!</span>
          <div id="e24_10">
            <img alt="" src={keyIcon} />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
