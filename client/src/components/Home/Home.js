import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import GetAdvice from "../GetAdvice/GetAdvice";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {}

  render() {
    return (
      <BrowserRouter>
        <div id="e33_3">
          <Link
            to={{
              pathname: "/getadvice",
              state: {
                jwt: this.props.jwt,
              },
            }}
          >
            <div id="e47_6"></div>
          </Link>
          <div id="e47_20"></div>
          <span id="e47_21">
            GET<br></br>INSPIRED
          </span>
          <Link to="/getadvice" params={{ jwt: this.props }}>
            <span id="e47_22">
              GET<br></br>ADVICE
            </span>
          </Link>
          <div id="e46_7">
            <div id="e44_7"></div>
            <div id="e44_3"></div>
            <div id="e44_4"></div>
            <span id="e46_6">“FIT CHECK”</span>
            <div id="e48_1"></div>
            <div id="e46_9">
              <input
                id="e46_9_input"
                placeholder=" what u tryna wear?"
                //value={}
                onChange={this.handleSearch}
              ></input>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/getadvice" component={GetAdvice} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Home;
