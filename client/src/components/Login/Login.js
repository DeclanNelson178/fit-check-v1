import React, { Component } from "react";
import "./Login.css";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  testPostAPIEndpoint() {
    axios
      .post("http://localhost:5000/tests", { title: "testAbhiUser" })
      .then((res) => {
        console.log(res.data);
      });
  }

  testGETAPIEndpoint() {
    axios.get("http://localhost:5000/tests").then((res) => {
      console.log(res.data);
    });
  }

  render() {
    return (
      <div className="screen">
        <div id="e6_3">
          <span id="e15_31">Forgot Password?</span>
          <span id="e15_33">Remember Me</span>
          <div id="e15_26"></div>
          <div id="e24_9"></div>
          <span id="e15_17">Password</span>
          <span id="e15_30">Email</span>
          <div id="e15_12"></div>
          <div id="e15_15"></div>
          <div id="e15_16"></div>
          <div id="e15_32"></div>
          <div id="e15_35"></div>
          <span id="e14_4">your pocket stylist</span>
          <span id="e15_36">LOGIN</span>
          <span id="e9_0">“FIT CHECK”</span>
          <span id="e15_37">Don’t have an account? Sign up here!</span>
          <div id="e24_10">
            <div id="e24_11"></div>
            <div id="e24_12"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
