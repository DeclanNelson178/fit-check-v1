import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import GetAdvice from "../GetAdvice/GetAdvice";
import GetInspired from "../GetInspired/GetInspired";
import "./Home.css";

/**
 * Home page component that acts as a main page from which users can navigate with the app.
 * Currently supporrts "Get Inspired" and "Get Advice" subfields
 *
 * @version 1.0.1
 * @author [Abhinav Joshi] (https://github.com/abhijoshi2000)
 * @author [Emily Costello] (https://github.com/ecostello9)
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: this.props.jwt,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  // TODO: Handle the search bar to render data based on search
  handleSearch() {
    console.log(this.state.jwt);
  }

  render() {
    return (
      <BrowserRouter>
        <div class="e33_3">
          <div class="e136_1980"></div>
          <div class="e136_1983"></div>
          <div class="e136_1982"></div>
          <Link
            to={{
              pathname: "/getinspired",
              state: {
                jwt: this.state.jwt,
              },
            }}
          >
            <span class="e47_21">// GET INSPIRED</span>
          </Link>
          <span class="e136_1975">// COMMUNITY</span>
          <Link
            to={{
              pathname: "/getadvice",
              state: {
                jwt: this.state.jwt,
              },
            }}
          >
            <span class="e47_22">// GET ADVICE</span>
          </Link>
          <div class="e78_0"></div>
          <div class="e82_14"></div>
          <div class="e136_1974"></div>
          <div class="e145_7"></div>
          <div class="e145_8"></div>
          <div class="e136_2000">
            <div class="e136_2001"></div>
            <div class="e136_2002"></div>
            <span class="e136_2003">// FIT CHECK</span>
          </div>
          <div id="e158_1"></div>
        </div>
        <Switch>
          <Route path="/getinspired" component={GetInspired} />
          <Route path="/getadvice" component={GetAdvice} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Home;
