import React, { Component } from "react";
import mailIcon from "./images/mail_outline.png";
import keyIcon from "./images/vpn_key.png";
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
        if (res.status === 200) {
          this.props.data(this.state);
        } else {
          console.log("BAD REQUEST");
        }
      });
  }

  async handleUsernameChange(e) {
    console.log(e.target.value);
    const oldPassword = this.state.password;
    await this.setState({ username: e.target.value, password: oldPassword });
  }

  async handlePasswordChange(e) {
    const oldUsername = this.state.username;
    console.log(e.target.value);
    await this.setState({
      username: oldUsername,
      password: e.target.value,
    });
  }

  render() {
    return (
      <div className="screen">
        <div id="e43_2">
          <div id="e43_5"></div>
          <div id="e43_6">
            <input
              type="password"
              id="e43_11_input"
              placeholder="*******************"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            ></input>
          </div>
          <span id="e43_7">Password</span>
          <span id="e43_8">Email</span>
          <div id="e43_10">
            <input
              id="e43_9_input"
              placeholder="example@example.com"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            ></input>
          </div>
          <div id="e43_11">
            <img alt="" className="mail" src={mailIcon} />
          </div>
          <div id="e43_13"></div>
          <span id="e43_14">your pocket stylist</span>
          <span id="e43_15">LOGIN</span>
          <button id="e43_15_button" onClick={this.handleLogin}></button>
          <div id="e43_21">
            <span id="e43_16">“FIT CHECK”</span>
          </div>
          <span id="e43_17">Don’t have an account? Sign up here!</span>
          <div id="e43_18">
            <img alt="" className="mail" src={keyIcon} />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
