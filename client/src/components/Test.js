import React, { Component } from "react";
import axios from "axios";

class Test extends Component {
  constructor() {
    super();
    this.testPOSTAPIEndpoint = this.testPostAPIEndpoint.bind(this);
    this.testGETAPIEndpoint = this.testGETAPIEndpoint.bind(this);
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
      <div>
        <h2>Testing Component</h2>
        <button onClick={this.testPostAPIEndpoint}>
          Test POST Button (uses "testAbhiUser")
        </button>
        <br></br>
        <button onClick={this.testGETAPIEndpoint}>Test GET Button</button>
      </div>
    );
  }
}

export default Test;
