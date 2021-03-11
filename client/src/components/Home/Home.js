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
        <div id="e33_3">
          <Link
            to={{
              pathname: "/getadvice",
              state: {
                jwt: this.state.jwt,
              },
            }}
          >
            <div id="e47_6"></div>
          </Link>
          <Link
            to={{
              pathname: "/getinspired",
              state: {
                jwt: this.state.jwt,
              },
            }}
          >
            <div id="e47_20"></div>
          </Link>
          <Link
            to={{
              pathname: "/getinspired",
              state: {
                jwt: this.state.jwt,
              },
            }}
          >
            <span id="e47_21">
              GET<br></br>INSPIRED
            </span>
          </Link>
          <Link
            to={{
              pathname: "/getadvice",
              state: {
                jwt: this.state.jwt,
              },
            }}
          >
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
          <Route path="/getinspired" component={GetInspired} />
          <Route path="/getadvice" component={GetAdvice} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Home;
