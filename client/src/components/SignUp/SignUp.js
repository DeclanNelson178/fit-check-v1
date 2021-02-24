import React, { Component } from "react";
import "./SignUp.css";
import axios from "axios";

/**
 * Sign up component that handles creating a user and adding them into the database.
 *
 * @version 1.0.1
 * @author [Abhinav Joshi] (https://github.com/abhijoshi2000)
 * @author [Emily Costello] (https://github.com/ecostello9)
 */
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordC: "",
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    );
  }

  // Axios is used to handle requests to backend endpoints --> Here we use a POST request
  // with the user's inputted name, email and password
  handleSignUp() {
    // axios
    // .post("http://localhost:5000/auth/signin", {
    //     email: this.state.username,
    //     password: this.state.password,
    // })
    // .then((res) => {
    //     if (res.status === 200) {
    //       this.props.data(res.data.token);
    //     } else {
    //       // this.state.incorrectLogin = true;
    //     }
    // });
  }

  // Updates dynamically when user inputs email
  async handleNameChange(e) {
    console.log(e.target.value);
    const oldEmail = this.state.email;
    const oldPassword = this.state.password;
    const oldConfirmPass = this.state.passwordC;
    await this.setState({
      name: e.target.value,
      email: oldEmail,
      password: oldPassword,
      passwordC: oldConfirmPass,
    });
  }

  // Updates dynamically when user inputs password
  async handleEmailChange(e) {
    const oldName = this.state.name;
    console.log(e.target.value);
    const oldPassword = this.state.password;
    const oldConfirmPass = this.state.passwordC;
    await this.setState({
      name: oldName,
      email: e.target.value,
      password: oldPassword,
      passwordC: oldConfirmPass,
    });
  }

  // Updates dynamically when user inputs email
  async handlePasswordChange(e) {
    const oldName = this.state.name;
    const oldEmail = this.state.email;
    console.log(e.target.value);
    const oldConfirmPass = this.state.passwordC;
    await this.setState({
      name: oldName,
      email: oldEmail,
      password: e.target.value,
      passwordC: oldConfirmPass,
    });
  }

  // Updates dynamically when user inputs password
  async handleConfirmPasswordChange(e) {
    const oldName = this.state.name;
    const oldEmail = this.state.email;
    const oldPassword = this.state.password;
    console.log(e.target.value);
    await this.setState({
      name: oldName,
      email: oldEmail,
      password: oldPassword,
      passwordC: e.target.value,
    });
    if (this.state.password != this.state.passwordC) {
      return (
        <label className="password-match-error">Passwords do not match</label>
      );
    }
  }

  render() {
    return (
      <div className="screen">
        <div id="signUpModal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <br></br>
            <br></br>
            <span id="e94_25">Name</span>
            <br></br>
            <div id="e94_23">
              <input
                placeholder="Johhny Appleseed"
                className="signup-name"
                value={this.state.name}
                onChange={this.handleNameChange}
              ></input>
            </div>
            <br></br>
            <span id="e94_4">Email</span>
            <br></br>
            <div id="e94_1">
              <input
                placeholder="japple123@email.com"
                className="signup-email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              ></input>
            </div>
            <br></br>
            <span id="e94_3">Password</span>
            <br></br>
            <div id="e94_2">
              <input
                placeholder="********"
                className="signup-password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              ></input>
            </div>
            <br></br>
            <span id="e94_19">Confirm Password</span>
            <br></br>
            <div id="e94_14">
              <input
                placeholder="********"
                className="signup-passwordC"
                value={this.state.passwordC}
                onChange={this.handleConfirmPasswordChange}
              ></input>
            </div>
            <br></br>
            <span id="e94_18">SIGN UP</span>
            <div id="e94_8">
              <button id="signup_button" onClick={this.handleSignUp}></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
