import React, {Component} from "react";
import "./SignUp.css";
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
            name: "",
            email: "",
            password: "",
            passwordC: ""
        };
        this.handleSignUp = this.handleSignUp(this);
        this.handleNameChange = this.handleNameChange(this);
        this.handleEmailChange = this.handleEmailChange(this);
        this.handlePasswordChange = this.handlePasswordChange(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange(this);
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

    handleSignUpModal() { // Get the modal
        var modal = document.getElementById("signUpModal");
        // button that opens the modal
        var btn = document.getElementById("e43_17_button");
        // close button
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        // closes the modal when "X" is clicked or outside of modal is clicked
        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
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
            passwordC: oldConfirmPass
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
            passwordC: oldConfirmPass
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
            passwordC: oldConfirmPass
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
            passwordC: e.target.value
        });
        if (this.state.password != this.state.passwordC) {
            return (
                <label class="password-match-error">Passwords do not match</label>
            )
        }
    }

    render() {
        return (
            <div className="screen">
                <div id="signUpModal" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <br></br>
                        <br></br>
                        <span id="e94_25">Name</span>
                        <br></br>
                        <div id="e94_23">
                            <input placeholder="Johhny Appleseed" class="signup-name"
                                value={
                                    this.state.name
                                }
                                onChange={
                                    this.handleNameChange
                            }></input>
                        </div>
                        <br></br>
                        <span id="e94_4">Email</span>
                        <br></br>
                        <div id="e94_1">
                            <input placeholder="japple123@email.com" class="signup-email"
                                value={
                                    this.state.email
                                }
                                onChange={
                                    this.handleEmailChange
                            }></input>
                        </div>
                        <br></br>
                        <span id="e94_3">Password</span>
                        <br></br>
                        <div id="e94_2">
                            <input placeholder="********" class="signup-password"
                                value={
                                    this.state.password
                                }
                                onChange={
                                    this.handlePasswordsChange
                            }></input>
                        </div>
                        <br></br>
                        <span id="e94_19">Confirm Password</span>
                        <br></br>
                        <div id="e94_14">
                            <input placeholder="********" class="signup-passwordC"
                                value={
                                    this.state.passwordC
                                }
                                onChange={
                                    this.handleConfirmPasswordChange
                            }></input>
                        </div>
                        <br></br>
                        <span id="e94_18">SIGN UP</span>
                        <div id="e94_8">
                            <button id="signup_button"
                                onClick={
                                    this.handleSignUp
                            }></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
