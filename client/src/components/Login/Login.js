import React, { Component } from "react";
import mailIcon from "./images/mail_outline.png";
import keyIcon from "./images/vpn_key.png";
import "./Login.css";
import axios from "axios";

/**
 * Login component that handles user inputted email and password and validates user credentials.
 * Returns a JWT auth token up throughout the component hierarchy in order to make future requests.
 *
 * @version 1.0.1
 * @author [Abhinav Joshi] (https://github.com/abhijoshi2000)
 * @author [Emily Costello] (https://github.com/ecostello9)
 */
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      new_name: "",
      new_email: "",
      new_password: "",
      new_confirm_password: "",
      jwt: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNameChange = this.handleNameChange(this);
    this.handleEmailChange = this.handleEmailChange(this);
    this.handleNewPassChange = this.handleNewPassChange(this);
    this.handleNewConfirmPassChange = this.handleNewConfirmPassChange(this);
  }

  // Axios is used to handle requests to backend endpoints --> Here we use a POST request
  // with the user's inputted email and password
  handleLogin() {
    axios
      .post("http://localhost:5000/auth/signin", {
        email: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        if (res.status === 200) {
          this.props.data(res.data.token);
        } else {
          // this.state.incorrectLogin = true;
        }
      });
  }

  // Updates dynamically when user inputs email
  async handleUsernameChange(e) {
    console.log(e.target.value);
    const oldPassword = this.state.password;
    const oldName = this.state.new_name;
    const oldEmail = this.state.new_email;
    const oldNewPassword = this.state.new_password;
    const oldNewConfirmPass = this.state.new_confirm_password;
    await this.setState({ 
      username: e.target.value,
      password: oldPassword,
      new_name: oldName,
      new_email: oldEmail,
      new_password: oldNewPassword,
      new_confirm_password: oldNewConfirmPass
    });
  }

  // Updates dynamically when user inputs password
  async handlePasswordChange(e) {
    const oldUsername = this.state.username;
    console.log(e.target.value);
    const oldName = this.state.new_name;
    const oldEmail = this.state.new_email;
    const oldNewPassword = this.state.new_password;
    const oldNewConfirmPass = this.state.new_confirm_password;
    await this.setState({
      username: oldUsername,
      password: e.target.value,
      new_name: oldName,
      new_email: oldEmail,
      new_password: oldNewPassword,
      new_confirm_password: oldNewConfirmPass
    });
  }

  handleSignUpModal() {
    // Get the modal
    var modal = document.getElementById("signUpModal");
    // button that opens the modal
    var btn = document.getElementById("e43_17_button");
    // close button
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    //closes the modal when "X" is clicked or outside of modal is clicked
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  // Updates dynamically when user inputs email
  async handleNameChange(e) {
    const oldUsername = this.state.username;
    const oldPassword = this.state.password;
    console.log(e.target.value);
    const oldEmail = this.state.new_email;
    const oldNewPassword = this.state.new_password;
    const oldNewConfirmPass = this.state.new_confirm_password;
    await this.setState({
      username: oldUsername,
      password: oldPassword,
      new_name: e.target.value,
      new_email: oldEmail,
      new_password: oldNewPassword,
      new_confirm_password: oldNewConfirmPass
    });
  }

  // Updates dynamically when user inputs password
  async handleEmailChange(e) {
    const oldUsername = this.state.username;
    const oldPassword = this.state.password;
    const oldName = this.state.new_name;
    console.log(e.target.value);
    const oldNewPassword = this.state.new_password;
    const oldNewConfirmPass = this.state.new_confirm_password;
    await this.setState({
      username: oldUsername,
      password: oldPassword,
      new_name: oldName,
      new_email: e.target.value,
      new_password: oldNewPassword,
      new_confirm_password: oldNewConfirmPass
    });
  }

  // Updates dynamically when user inputs email
  async handleNewPassChange(e) {
    const oldUsername = this.state.username;
    const oldPassword = this.state.password;
    const oldName = this.state.new_name;
    const oldEmail = this.state.new_email;
    console.log(e.target.value);
    const oldNewConfirmPass = this.state.new_confirm_password;
    await this.setState({
      username: oldUsername,
      password: oldPassword,
      new_name: oldName,
      new_email: oldEmail,
      new_password: e.target.value,
      new_confirm_password: oldNewConfirmPass
    });
  }

  // Updates dynamically when user inputs password
  async handleNewConfirmPassChange(e) {
    const oldUsername = this.state.username;
    const oldPassword = this.state.password;
    const oldName = this.state.new_name;
    const oldEmail = this.state.new_email;
    const oldNewPassword = this.state.new_password;
    console.log(e.target.value);
    await this.setState({
      username: oldUsername,
      password: oldPassword,
      new_name: oldName,
      new_email: oldEmail,
      new_password: oldNewPassword,
      new_confirm_password: e.target.value
    });
    if (this.state.new_password != this.state.new_confirm_password) {
      return(
        <label class="password-match-error">Passwords do not match</label>
      )
    }
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
              placeholder="***************"
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
          <button id="e43_17_button" onClick={this.handleSignUpModal}></button>
          <div id="signUpModal" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span><br></br><br></br>
              <span id="e94_25">Name</span><br></br>
              <div id="e94_23">
                <input
                placeholder="Johhny Appleseed"
                class="signup-name"
                value={this.state.new_name}
                onChange={this.handleNameChange}
                ></input>
              </div><br></br>
              <span id="e94_4">Email</span><br></br>
              <div id="e94_1">
                <input
                placeholder="japple123@email.com"
                class="signup-email"
                value={this.state.new_email}
                onChange={this.handleEmailChange}
                ></input>
              </div><br></br>
              <span id="e94_3">Password</span><br></br>
              <div id="e94_2">
                <input
                placeholder="********"
                class="signup-password"
                value={this.state.new_password}
                onChange={this.handleNewPassChange}
                ></input>
              </div><br></br>
              <span id="e94_19">Confirm Password</span><br></br>
              <div id="e94_14">
                <input
                placeholder="********"
                class="signup-passwordC"
                value={this.state.new_confirm_password}
                onChange={this.handleNewConfirmPassChange}
                ></input>
              </div><br></br>
              <span id="e94_18">SIGN UP</span>
              <div id="e94_8">
                <button id="signup_button" onClick={this.handleSignUp}></button>
              </div>
            </div>
          </div>
          <div id="e43_18">
            <img alt="" className="mail" src={keyIcon} />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
